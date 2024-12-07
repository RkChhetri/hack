using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;

using System.Configuration;
using backend.Models;
using System.Web.UI.WebControls;
using Microsoft.Ajax.Utilities;

namespace backend.Controllers
{

    [RoutePrefix("api/ViewPurchase")]
    public class TransactionDetailsController : ApiController
    {
       
       
   

        [HttpGet]   //for retriving the data
        [Route("Purchase_Details")]


        public Response viewNewRecordsList(Newdata newdata)
        {
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
            DAL_Records dal = new DAL_Records();
            Response response = dal.viewNewRecordsList(newdata, conn);
            return response;
        }


        [HttpPost]
        [Route("viewRecords")]

        public Response newdatalist(Newdata newdata)
        {
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
            DAL_Records dal = new DAL_Records();
            Response response = new Response();
            response = dal.viewNewRecordsList(newdata,conn);
            return response;

        }



     

        //view remaining items


      


        [HttpPost]
        [Route("Insert_Items")]
        public Response Insert_Items(Newdata insertNew)
        {
            Response response = new Response();
            DAL_Records dal=new DAL_Records();
            SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
            response = dal.Insert_Items(insertNew, conn);
            return response;

         

        }

        
     


    }





}