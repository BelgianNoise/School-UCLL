using PiCross;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel
{
    public class StartViewModel
    {
        private readonly IGameData data;
        public StartViewModel()
        {
            var facade = new PiCrossFacade();
            data = facade.CreateDummyGameData();
            Puzzles = data.PuzzleLibrary.Entries;
            SelectedPuzzle = Puzzles.ElementAt(0);
        }
        public IPuzzleLibraryEntry SelectedPuzzle{ get; set; }
        public IEnumerable<IPuzzleLibraryEntry> Puzzles { get; }
    }
}
