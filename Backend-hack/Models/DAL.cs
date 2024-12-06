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
        private object command;

        public Response register(Employee employee, SqlConnection conn)
        {

            try
            {
                Response response = new Response();
                SqlCommand cmd = new SqlCommand("usp_Registration", conn);
                cmd.CommandType = CommandType.StoredProcedure;


                cmd.Parameters.AddWithValue("@BusinessName", employee.BusinessName);
                cmd.Parameters.AddWithValue("@BusinessOwner", employee.BusinessOwner);
                cmd.Parameters.AddWithValue("@ContactNumber", employee.ContactNumber);
                cmd.Parameters.AddWithValue("@EmailID", employee.EmailID);
             

               
           
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
        public Response viewEmployee(Employee employee, SqlConnection conn)
        {
            SqlDataAdapter da = new SqlDataAdapter();
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@EmailID", employee.EmailID);
            DataTable dt = new DataTable();
            da.Fill(dt);
            Response response = new Response();
            Employee employees = new Employee();
            if (dt.Rows.Count > 0)
            {
                employees.BusinessName = Convert.ToString(dt.Rows[0]["Fullname"]);
                employees.BusinessOwner = Convert.ToString(dt.Rows[0]["BusinessOwner"]);
                employees.ContactNumber = Convert.ToString(dt.Rows[0]["ContactNumber"]);
             

                employees.PanNumber = Convert.ToString(dt.Rows[0]["PanNumber"]);
                employees.EmailID = Convert.ToString(dt.Rows[0]["EmailID"]);
                employees.Password = Convert.ToString(dt.Rows[0]["Password"]);
               

                response.StatusCode = 200;
                response.StatusMessage = "User exist";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User doesnot exit";
                response.employee = employee;
            }
            return response;

        }

        public Response viewEmployeeList(SqlConnection conn)
        {
            Response response = new Response();
            List<Employee> listEmployees = new List<Employee>();
            
            SqlDataAdapter da=new SqlDataAdapter("usp_ViewEmployes", conn);
       
            da.SelectCommand.CommandType= CommandType.StoredProcedure;
      
            DataTable dt = new DataTable();
            da.Fill(dt);

            if(dt.Rows.Count > 0)
            {
                for(int i=0; i < dt.Rows.Count;i++)
                {
                    Employee employees = new Employee();
                    employees.BusinessName = Convert.ToString(dt.Rows[i]["BusinessName"]);
                    employees.BusinessOwner = Convert.ToString(dt.Rows[i]["BusinessOwner"]);
                    employees.ContactNumber = Convert.ToString(dt.Rows[i]["Contactnumber"]);
                    employees.PanNumber = Convert.ToString(dt.Rows[i]["PanNumber"]);
                    employees.EmailID = Convert.ToString(dt.Rows[i]["EmailID"]);
                    employees.Password = Convert.ToString(dt.Rows[i]["Password"]);
                    listEmployees.Add(employees);
                }

                if(listEmployees.Count > 0)
                {
                    response.StatusCode = 200;
                    response.StatusMessage = "User details fetched";
                    response.listEmployee = listEmployees;
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

      

    }
}