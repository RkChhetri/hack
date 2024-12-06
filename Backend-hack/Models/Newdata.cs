using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models
{
    public class Newdata
    {

        public string Date { get; set; }
        public string Product_Name { get; set; }    
        public float Marked_Price { get; set;}
            public float Quantity { get; set; }
        public float Discount_Percent { get; set; }  
        public float Discount { get; set; }

        public float Vat_Percent{ get; set; }
        public float Vat { get; set; }
        public float Total { get; set; }


}
}