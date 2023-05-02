export default function Dashboard() {
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
                  <p className="fs-30 mb-2">4006</p>
                </div>
              </div>
            </div>
            <div className="col mb-4 stretch-card transparent">
              <div className="card card-light-green">
                <div className="card-body">
                  <p className="mb-4">Confirmed</p>
                  <p className="fs-30 mb-2">61344</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4 mb-lg-0 stretch-card transparent">
              <div className="card card-tale">
                <div className="card-body">
                  <p className="mb-4">Users</p>
                  <p className="fs-30 mb-2">34040</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
