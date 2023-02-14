import { format } from "date-fns";
import React from "react";

const Timeline = ({ dates }) => {
  const parsedDates = dates.reduce((acc, date) => {
    const day = date.status_time.toString().split("T")[0];
    console.log(date.status_time);
    const index = acc.findIndex(
      (d) => d[0].status_time.toString().split("T")[0] === day
    );

    if (index === -1) {
      acc.push([date]);
    } else {
      acc[index].push(date);
    }

    return acc;
  }, []);

  console.log(parsedDates);

  return (
    <div>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>История Статусов</h1>
            </div>
            <div className="col-sm-6">
              {/* <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Timeline</li>
              </ol> */}
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="timeline">
                {parsedDates.map((item, index) => (
                  <>
                    <div className="time-label">
                      <span className="bg-orange">
                        {item[0]?.status_time.split("T")[0]}
                      </span>
                    </div>
                    {item.map((data) => (
                      <div>
                       
                        <i className="fas fa-cart-plus bg-green" />
                        <div className="timeline-item">
                          <span className="time">
                            <i className="fas fa-clock" />{format(new Date(data?.status_time),"HH mm")}
                          </span>
                          <h3 className="timeline-header no-border">
                            <div>
                                {data?.status_text}
                            </div>
                          </h3>
                        </div>
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
