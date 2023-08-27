export default function Section({ data, cartItem }) {
    return (
      <>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {data.map((d, index) => {
                return (
                  <div className="col mb-5" key={index}>
                    <div className="card h-100">
                      <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                      >
                        {d.sale}
                      </div>
                      <img className="card-img-top" src={d.image} alt="..." />
                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="fw-bolder">{d.type}</h5>
                          <div className="d-flex justify-content-center small text-warning mb-2">
                            {d.stars > 0
                              ? Array.from({ length: d.stars }).map((_, id) => (
                                  <i
                                    className="bi bi-star-fill yellow-color"
                                    key={id}
                                  ></i>
                                ))
                              : ""}
                          </div>
                          <span className="text-muted text-decoration-line-through">
                            {d.price}
                          </span>
                          {d.disPrice}
                        </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <button
                            className="btn btn-outline-dark mt-auto"
                            onClick={cartItem}
                          >
                            {d.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }