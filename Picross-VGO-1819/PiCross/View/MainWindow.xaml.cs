using ViewModel;
using System.Windows;
using PiCross;
using System.Windows.Media;
using System.Collections.Generic;
using System;
using System.Linq;
using System.Windows.Threading;

namespace View
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            liedjes = new List<string>();
            liedjes.Add("../../beats/sea_chant.mp3");
            liedjes.Add("../../beats/lasagna.mp3");
            liedjes.Add("../../beats/congrats.mp3");
            liedjes.Add("../../beats/autumn.mp3");
            liedjes.Add("../../beats/old_theme.mp3");
            player = new MediaPlayer();
            player.MediaEnded += OnMediaEnded;
            var randomSongs = liedjes.OrderBy(a => rand.Next());
            player.Open(new Uri((randomSongs.ElementAt(0)).ToString(), UriKind.Relative));
            player.Play();
        }
        private MediaPlayer player;
        private List<string> liedjes;
        private static Random rand = new Random();
        
        private void OnMediaEnded(object sender, EventArgs e)
        {
            var randomSongs = liedjes.OrderBy(a => rand.Next());
            player.Open(new Uri((randomSongs.ElementAt(0)).ToString(), UriKind.Relative));
            player.Play();
        }

        private void SkipSong(object sender, RoutedEventArgs e)
        {
            player.Stop();
            var randomSongs = liedjes.OrderBy(a => rand.Next());
            player.Open(new Uri((randomSongs.ElementAt(0)).ToString(), UriKind.Relative));
            player.Play();
        }
    }

}
