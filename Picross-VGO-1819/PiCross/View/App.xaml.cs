using PiCross;

using System.Windows;
using ViewModel;

namespace View
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);


            var window = new MainWindow();
            window.DataContext = new Navigator();
            window.Show();
        }
    }
}
