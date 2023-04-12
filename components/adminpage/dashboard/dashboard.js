export default function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="row">
            <div className="col-12 col-xl-8 mb-4 mb-xl-0">
              <h3 className="font-weight-bold">Welcome Admin</h3>
              <h6 className="font-weight-normal mb-0">
                All systems are running smoothly!{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin transparent">
          <div className="row">
            <div className="col mb-4 stretch-card transparent">
              <div className="card card-tale">
                <div className="card-body">
                  <p className="mb-4">Today’s Bookings</p>
                  <p className="fs-30 mb-2">4006</p>
                  <p>10.00% (30 days)</p>
                </div>
              </div>
            </div>
            <div className="col mb-4 stretch-card transparent">
              <div className="card card-dark-blue">
                <div className="card-body">
                  <p className="mb-4">Total Bookings</p>
                  <p className="fs-30 mb-2">61344</p>
                  <p>22.00% (30 days)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4 mb-lg-0 stretch-card transparent">
              <div className="card card-light-blue">
                <div className="card-body">
                  <p className="mb-4">Number of Meetings</p>
                  <p className="fs-30 mb-2">34040</p>
                  <p>2.00% (30 days)</p>
                </div>
              </div>
            </div>
            <div className="col stretch-card transparent">
              <div className="card card-light-danger">
                <div className="card-body">
                  <p className="mb-4">Number of Clients</p>
                  <p className="fs-30 mb-2">47033</p>
                  <p>0.22% (30 days)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
