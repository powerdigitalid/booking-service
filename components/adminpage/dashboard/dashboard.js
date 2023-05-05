import { useState, useEffect } from "react";

export default function Dashboard() {
  const [datacount, setDatacount] = useState({customers:0,bookings:0,users:0});

  const handleCount =()=>{
    fetch("/api/conterdasboar", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>{
        if(res.status==200){
          return res.json()
        }else{
          throw new Error('Something went wrong');
        }
      }
      )
      .then((data) => {
        setDatacount(data);
      }
      )
      .catch((error) => {
        console.log(error);
      }
      );
  }

  useEffect(() => {
    handleCount();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="row">
            <div className="col-12 col-xl-8 mb-4 mb-xl-0">
              <h3 className="font-weight-bold">Welcome Admin</h3>
              <h6 className="font-weight-normal mb-0">
                Your cars my stars!{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin transparent">
          <div className="row">
            <div className="col mb-4 stretch-card transparent">
              <div className="card card-light-yellow">
                <div className="card-body">
                  <p className="mb-4">Booked</p>
                  <p className="fs-30 mb-2">{datacount.booked}</p>
                </div>
              </div>
            </div>
            <div className="col mb-4 stretch-card transparent">
              <div className="card card-light-green">
                <div className="card-body">
                  <p className="mb-4">Confirmed</p>
                  <p className="fs-30 mb-2">{datacount.customers}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4 mb-lg-0 stretch-card transparent">
              <div className="card card-tale">
                <div className="card-body">
                  <p className="mb-4">Users</p>
                  <p className="fs-30 mb-2">{datacount.users}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
