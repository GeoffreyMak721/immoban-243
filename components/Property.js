import React from "react";

import Link from "next/link";

import { imageBuilder } from "../lib/sanity";

export default function Property({ posts }) {
  return (
    <section className="property section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">Les plus populaires</h2>
              <p>Explorer notre catalogue des maisons de qualité.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {!!posts &&
            posts.map((post) => (
              <div className="col-lg-4 col-md-6 col-xs-12">
                <div className="property-main">
                  <div className="property-wrap">
                    <div className="property-item">
                      <div className="item-thumb">
                        <Link href="/">
                          <a className="hover-effect">
                            <img
                              width={480}
                              height={320}
                              className="img-fluid"
                              src="/img/property/house-1.jpg"
                              alt=""
                              src={imageBuilder(post.image)
                                .width(480)
                                .height(320)
                                .url()}
                            />
                          </a>
                        </Link>
                        <div className="label-inner">
                          <span className="label-status label bg-red">
                            {post.type}
                          </span>
                        </div>
                      </div>
                      <div className="item-body">
                        <h3 className="property-title">
                          <a href="property.html">{post.title}</a>
                        </h3>
                        <div className="adderess">
                          <i className="lni-map-marker"></i>
                          {`${post.avenue}, Q/${post.quartier}, C/${post.commune}, ${post.province}`}
                        </div>
                        <div className="pricin-list">
                          <div className="property-price">
                            <span>${post.prix}</span>
                          </div>
                          <p>
                            <span>{post.description}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="property-main">
                <div className="property-wrap">
                  <div className="property-item">
                    <div className="item-thumb">
                      <a className="hover-effect" href="property.html">
                        <img
                          className="img-fluid"
                          src="/img/property/house-2.jpg"
                          alt=""
                        />
                      </a>
                      <div className="label-inner">
                        <span className="label-status label">For Rent</span>
                      </div>
                    </div>
                    <div className="item-body">
                      <h3 className="property-title">
                        <a href="property.html">Family Condo</a>
                      </h3>
                      <div className="adderess">
                        <i className="lni-map-marker"></i> Louis, Missouri, US
                      </div>
                      <div className="pricin-list">
                        <div className="property-price">
                          <span>$27,00</span>
                        </div>
                        <p>
                          <span>6 bds</span> . <span>8 ba</span> .{" "}
                          <span>2600 Sqft</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="property-main">
                <div className="property-wrap">
                  <div className="property-item">
                    <div className="item-thumb">
                      <a className="hover-effect" href="property.html">
                        <img
                          className="img-fluid"
                          src="/img/property/house-3.jpg"
                          alt=""
                        />
                      </a>
                      <div className="label-inner">
                        <span className="label-status label bg-yellow">New</span>
                      </div>
                    </div>
                    <div className="item-body">
                      <h3 className="property-title">
                        <a href="property.html">Guaranteed modern home</a>
                      </h3>
                      <div className="adderess">
                        <i className="lni-map-marker"></i> Avenue C, New York, US
                      </div>
                      <div className="pricin-list">
                        <div className="property-price">
                          <span>$1,750</span>
                        </div>
                        <p>
                          <span>8 bds</span> . <span>8 ba</span> .{" "}
                          <span>3000 Sqft</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="property-main">
                <div className="property-wrap">
                  <div className="property-item">
                    <div className="item-thumb">
                      <a className="hover-effect" href="property.html">
                        <img
                          className="img-fluid"
                          src="/img/property/house-4.jpg"
                          alt=""
                        />
                      </a>
                      <div className="label-inner">
                        <span className="label-status label">For Rent</span>
                      </div>
                    </div>
                    <div className="item-body">
                      <h3 className="property-title">
                        <a href="property.html">Family home for sale</a>
                      </h3>
                      <div className="adderess">
                        <i className="lni-map-marker"></i> Sacramento, Chicago, US
                      </div>
                      <div className="pricin-list">
                        <div className="property-price">
                          <span>$1,400</span>
                        </div>
                        <p>
                          <span>2 bds</span> . <span>2 ba</span> .{" "}
                          <span>2200 Sqft</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="property-main">
                <div className="property-wrap">
                  <div className="property-item">
                    <div className="item-thumb">
                      <a className="hover-effect" href="property.html">
                        <img
                          className="img-fluid"
                          src="/img/property/house-5.jpg"
                          alt=""
                        />
                      </a>
                      <div className="label-inner">
                        <span className="label-status label bg-yellow">New</span>
                      </div>
                    </div>
                    <div className="item-body">
                      <h3 className="property-title">
                        <a href="property.html">Amazing oceanfront apartment</a>
                      </h3>
                      <div className="adderess">
                        <i className="lni-map-marker"></i> 53 W 88th St, Dallas, US
                      </div>
                      <div className="pricin-list">
                        <div className="property-price">
                          <span>$1,750</span>
                        </div>
                        <p>
                          <span>6 bds</span> . <span>6 ba</span> .{" "}
                          <span>2700 Sqft</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="property-main">
                <div className="property-wrap">
                  <div className="property-item">
                    <div className="item-thumb">
                      <a className="hover-effect" href="property.html">
                        <img
                          className="img-fluid"
                          src="/img/property/house-6.jpg"
                          alt=""
                        />
                      </a>
                      <div className="label-inner">
                        <span className="label-status label bg-red">For Sale</span>
                      </div>
                    </div>
                    <div className="item-body">
                      <h3 className="property-title">
                        <a href="property.html">Luxury home for sale</a>
                      </h3>
                      <div className="adderess">
                        <i className="lni-map-marker"></i> 365 Webber Street,
                        Washington
                      </div>
                      <div className="pricin-list">
                        <div className="property-price">
                          <span>$1,800</span>
                        </div>
                        <p>
                          <span>5 bds</span> . <span>7 ba</span> .{" "}
                          <span>2800 Sqft</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             */}
          <div className="col-12">
            <div className="text-center">
              <a href="listing.html" className="btn btn-common">
                Tout voir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}