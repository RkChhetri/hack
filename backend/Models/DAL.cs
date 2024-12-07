using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;
namespace backend.Models
{
    public class DAL
    {
        

        public Response register(Employee employee, SqlConnection conn)
        {

            try
            {
                Response response = new Response();
                SqlCommand cmd = new SqlCommand("usp_Registration", conn);
                cmd.CommandType = CommandType.StoredProcedure;


                cmd.Parameters.AddWithValue("@Busnisessname", employee.BusinessName);
                cmd.Parameters.AddWithValue("@BusinessOwner", employee.BusinessOwner);
                cmd.Parameters.AddWithValue("@Contactnumber", employee.Contactnumber);
                cmd.Parameters.AddWithValue("@PanNumber", employee.PanNumber);
                cmd.Parameters.AddWithValue("@EmailID", employee.EmailID);

                cmd.Parameters.AddWithValue("@Password", employee.Password);
              
                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    response.StatusCode = 200;
                    response.StatusMessage = "User registered successfully";


                }
                else
                {
                    response.StatusCode = 100;
                    response.StatusMessage = "User registration failed";

                }

                return response;

            }
            catch (Exception ex)
            {
                throw ex;

            }


        }
        public Response login(Employee employee, SqlConnection conn)
        {
            SqlDataAdapter da = new SqlDataAdapter("usp_LoginUsers",conn);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@EmailID", employee.EmailID);
            da.SelectCommand.Parameters.AddWithValue("@Password", employee.Password);
            DataTable dt = new DataTable();
            da.Fill(dt);
            
            Response response = new Response();
            Employee employees = new Employee();
            if (dt.Rows.Count > 0)
            {
               // employees.Fullname = Convert.ToString(dt.Rows[0]["Fullname"]);
                //employees.EmailID = Convert.ToString(dt.Rows[0]["EmailID"]);
               // employees.Contactnumber = Convert.ToString(dt.Rows[0]["Contactnumber"]);
               // employees.City = Convert.ToString(dt.Rows[0]["City"]);

                response.StatusCode = 200;
                response.StatusMessage = "User is valid";
                response.employee = employee;
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User is invalid";
                response.employee = null;
            }
            return response;

        }
     
     
           


    }
}