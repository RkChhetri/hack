using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;
namespace backend.Models
{

    public class DAL_Records
    {

        
        //insert new records
        public Response Insert_Items(Newdata insertNew,SqlConnection conn)
        {

            string message = string.Empty;
            try
            {
                Response response = new Response();
                SqlCommand cmd = new SqlCommand("usp_insert_newdata", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@BusinessName", insertNew.BusinessName);
                cmd.Parameters.AddWithValue("@BusinessOwner", insertNew.BusinessOwner);
                cmd.Parameters.AddWithValue("@ContactNumber", insertNew.ContactNumber);
                cmd.Parameters.AddWithValue("@PanNumber", insertNew.EmailID);
                cmd.Parameters.AddWithValue("@EmailID", insertNew.Password);
              

                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    response.StatusCode = 200;
                    response.StatusMessage = "data inserted";


                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = " Failed to insert data";
                }
                return response;

            }
            catch (Exception ex)
            {
                throw ex;

            }
            


        }


        //view record list of purchase
        public Response viewNewRecordsList(Newdata newdata_s, SqlConnection conn)
        {
            try
            {
                Response response = new Response();
                List<Newdata> listnewdata = new List<Newdata>();
                SqlDataAdapter da = new SqlDataAdapter("usp_ViewNewRecords", conn);

                da.SelectCommand.CommandType = CommandType.StoredProcedure;

                DataTable dt = new DataTable();
                da.Fill(dt);

                if (dt.Rows.Count > 0)
                {
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        Newdata newdata = new Newdata();
                        newdata.BusinessName = Convert.ToString(dt.Rows[i]["BusinessName"]);
                        newdata.BusinessOwner = Convert.ToString(dt.Rows[i]["BusinessOwner"]);
                        newdata.ContactNumber = Convert.ToString(dt.Rows[i]["ContactNumber"]);
                        newdata.PanNumber = Convert.ToString(dt.Rows[i]["PanNumber"]);
                        newdata.EmailID = Convert.ToString(dt.Rows[i]["EmailID"]);
                        newdata.Password = Convert.ToString(dt.Rows[i]["Password"]);
                       
                        listnewdata.Add(newdata);
                    }

                    if (listnewdata.Count > 0)
                    {
                        response.StatusCode = 200;
                        response.StatusMessage = "User details fetched";
                        response.listNewdata = listnewdata; //first listNewdata one from response class and second one is  object
                    }
                    else
                    {
                        response.StatusCode = 100;
                        response.StatusMessage = "User is unavailable";
                        response.listEmployee = null;

                    }
                }

                return response;


            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        //view recorrd list of total sales
      



        //Transactions...


        
    }
}