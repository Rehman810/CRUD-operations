import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Data";
import Edit from "./Edit";
import Add from "./Create";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  let navigate = useNavigate();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        const index = Data.map((e) => {
          return e.id;
        }).indexOf(id);
        Data.splice(index, 1);
        navigate("/");
      }
    });
  };

  return (
    <>
      <Fragment>
        <div
          style={{
            margin: "10rem",
            width: "65%",
          }}
        >
          <Table striped borderd hover size="sm">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  Actions
                  <Add />
                </th>
              </tr>
            </thead>
            <tbody>
              {Data && Data.length > 0
                ? Data.map((item) => {
                    return (
                      <tr>
                        <td>{item.title}</td>
                        <td>{item.state}</td>
                        <td>
                          <img
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                            style={{
                              width: "30px",
                              margin: "10px",
                              cursor: "pointer",
                            }}
                            src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                            alt="delete"
                          />
                          <Edit
                            id={item.id}
                            title={item.title}
                            status={item.state}
                          />
                        </td>
                      </tr>
                    );
                  })
                : "No Data Available"}
            </tbody>
          </Table>
        </div>
      </Fragment>
    </>
  );
};

export default Home;
