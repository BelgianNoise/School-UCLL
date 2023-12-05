using Cells;
using DataStructures;
using PiCross;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using System.Windows.Threading;

namespace ViewModel
{
    public class GameViewModel : INotifyPropertyChanged
    {
        public IPlayablePuzzle playablePuzzle { get; set; }

        public GameViewModel(Puzzle puzzle)
        {
            var facade = new PiCrossFacade();
            this.playablePuzzle = facade.CreatePlayablePuzzle(puzzle);
           
            this.Grid = this.playablePuzzle.Grid.Map(square => new SquareVM(square)).Copy();

            this.ColumnConstraints = this.playablePuzzle.ColumnConstraints.Map(column => new ColumnsVM(column)).Copy();
            this.RowConstraints = this.playablePuzzle.RowConstraints.Map(row => new RowsVM(row)).Copy();

            Check = playablePuzzle.IsSolved;
            this.StartTimer = new StartTimer(this);
            this.StopTimer = new StopTimer(this);
            lastTick = DateTime.Now;
            timerken = new DispatcherTimer(TimeSpan.FromMilliseconds(10), DispatcherPriority.Background, 
                t_Tick, Dispatcher.CurrentDispatcher);
            timerken.IsEnabled = true;
        }

        public Cell<bool> Check { get; }
        public object Grid { get; }

        public object ColumnConstraints { get; }

        public object RowConstraints { get; }

        public event PropertyChangedEventHandler PropertyChanged;

        // Timer
        public DispatcherTimer timerken { get; set; }
        public DateTime lastTick { get; set; }
        public TimeSpan accTime;
        public TimeSpan Time
        {
            get
            { return accTime; }
            set
            {
                accTime = value;
                PropertyChanged?.Invoke(this,
                    new PropertyChangedEventArgs(nameof(Time)));
            }
        }

        public bool IsRunning
        {
            get
            {
                return timerken.IsEnabled;
            }
            set
            {
                timerken.IsEnabled = value;
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(IsRunning)));
            }
        }
        
        public ICommand StartTimer { get; set; }
        public ICommand StopTimer { get; set; }

        public void t_Tick(object sender, EventArgs e)
        {
            if (Check.Value)
            {
                this.timerken.IsEnabled = false;
            }
            var nu = DateTime.Now;
            Time += nu - lastTick;
            lastTick = nu;
        }
    }

    class StartTimer : ICommand
    {
        private GameViewModel _viewModel;

        public StartTimer(GameViewModel vm)
        {
            _viewModel = vm;
        }

        public event EventHandler CanExecuteChanged;

        public bool CanExecute(object parameter)
        {
            return true;
        }

        public void Execute(object parameter)
        {
            _viewModel.timerken.IsEnabled = true;
        }
    }

    class StopTimer : ICommand
    {
        private GameViewModel _viewModel;

        public StopTimer(GameViewModel vm)
        {
            _viewModel = vm;
        }

        public event EventHandler CanExecuteChanged;

        public bool CanExecute(object parameter)
        {
            return true;
        }

        public void Execute(object parameter)
        {
            _viewModel.timerken.IsEnabled = false;
        }
    }




    internal class ColumnsVM
    {
        private IPlayablePuzzleConstraints column;

        public ColumnsVM(IPlayablePuzzleConstraints column)
        {
            this.column = column;
            this.Satisfied = column.IsSatisfied;
        }

        public object Values => column.Values;

        public Cell<bool> Satisfied { get; }
    }

    internal class RowsVM
    {
        private IPlayablePuzzleConstraints row;

        public RowsVM(IPlayablePuzzleConstraints row)
        {
            this.row = row;
            this.Satisfied = row.IsSatisfied;
        }

        public object Values => row.Values;

        public Cell<bool> Satisfied { get; }
    }

    public class SquareVM
    {
        private readonly IPlayablePuzzleSquare square;

        public SquareVM(IPlayablePuzzleSquare square)
        {
            this.square = square;
            this.Press = new ClickSquareCommand(this);
            this.PressRight = new ClickRightCommand(this);
        }

        public object Contents => square.Contents;

        public ICommand Press { get; }
        public ICommand PressRight { get; }

        private class ClickSquareCommand : ICommand
        {
            private SquareVM _viewModel;

            public ClickSquareCommand(SquareVM vm)
            {
                _viewModel = vm;

            }

            public event EventHandler CanExecuteChanged;

            public bool CanExecute(object parameter)
            {
                return true;
            }

            public void Execute(object parameter)
            {
                if(_viewModel.square.Contents.Value == Square.FILLED) {
                    _viewModel.square.Contents.Value = Square.UNKNOWN;
                }
                else
                {
                    _viewModel.square.Contents.Value = Square.FILLED;
                }
                
            }
        }

        private class ClickRightCommand : ICommand
        {
            private SquareVM _viewModel;

            public ClickRightCommand(SquareVM vm)
            {
                _viewModel = vm;
            }

            public event EventHandler CanExecuteChanged;

            public bool CanExecute(object parameter)
            {
                return true;
            }

            public void Execute(object parameter)
            {
                _viewModel.square.Contents.Value = Square.EMPTY;    
            }
        }
    }
}

