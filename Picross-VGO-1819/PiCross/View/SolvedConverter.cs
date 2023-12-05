using System;

using System.Globalization;
using System.Windows.Data;

namespace View
{
    public class SolvedConverter : IValueConverter
    {

        public object t { get; set; }
        public object f { get; set; }

        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            bool status = (bool)value;
            if (status)
            {
                return t;
            }
            else
            {
                return f;
            }
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}