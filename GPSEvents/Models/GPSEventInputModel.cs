using System;
using System.Collections.Generic;

namespace GPSEvents.Models
{
    public class GPSEventInputModel
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string EventName { get; set; }
        public DateTime EvenTime { get; set; }
        public IEnumerable<SensorMeasurementInputModel> SensorMeasurements { get; set; }
    }
}
