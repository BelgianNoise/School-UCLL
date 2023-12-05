using PiCross;
using System;
using System.Windows.Input;
using ViewModel;

namespace View
{

    public abstract class Screen
    {
        public readonly Navigator navigator;

        public Screen(Navigator navigator)
        {
            this.navigator = navigator;
        }

        public void SwitchTo(Screen screen)
        {
            this.navigator.CurrentScreen = screen;
        }
    }
    
    public class StartScreen : Screen
    {
        public StartScreen(Navigator navigator) : base(navigator)
        {
            VM = new StartViewModel();
            Start = new EasyCommand(() => SwitchTo(new GameScreen(navigator, VM.SelectedPuzzle.Puzzle)));
        }
        
        public ICommand Start { get; }
        public StartViewModel VM { get; }
    }

    public class GameScreen : Screen
    {   
        public GameScreen(Navigator navigator, Puzzle puzzle) : base(navigator)
        {
            Rerun = new EasyCommand(() => SwitchTo(new StartScreen(navigator)));
            VM = new GameViewModel(puzzle);
            resetPuzzle = puzzle;
            Reset = new EasyCommand(() => 
            SwitchTo(new GameScreen(navigator, puzzle)));
        }
        public Puzzle resetPuzzle { get; set; }
        public ICommand Rerun { get; }
        public ICommand Reset { get; }
        public GameViewModel VM { get; }
    }

    // Niet meer nodig. gebruik easy command
    //public class Start : ICommand
    //{
    //    private StartScreen screen;

    //    public Start(StartScreen startScreen)
    //    {
    //        this.screen = startScreen;
    //    }

    //    public event EventHandler CanExecuteChanged;

    //    public bool CanExecute(object parameter)
    //    {
    //        throw new NotImplementedException();
    //    }

    //    public void Execute()
    //    {
    //        screen.navigator.CurrentScreen = new GameScreen(screen.navigator);
    //    }

    //    public void Execute(object parameter)
    //    {
    //        throw new NotImplementedException();
    //    }
    //}
}
