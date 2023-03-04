import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGitlab } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "./Style.css";
import { Opentab } from "../component/Opentab";

class TentangSaya extends React.Component {
  render() {
    return (
      <section id="about" class="about">
        <div class="h-fit">
          <div class="flex flex-col md:flex-row">
            <div class="mt-12 col-lg-6">
              <div class="mt-3 ml-24">
                <img
                  src="asset/jiankapal.jpeg"
                  alt=""
                  class="img-fluid mx-auto d-block img-thumbnail"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="md:my-48">
                <h4 class="mt-4 text-base md:text-2xl">
                  <p>Hi!</p>
                  <span class="text-custom font-weight-bold">
                    I'M Firyal Jihan Haura
                  </span>
                </h4>
                <p class="text-sm md:text-xl mt-4">
                  Nama Panggilan : Jihan <br />
                  TTL : Sidoarjo, 03 Januari 2006 <br />
                  Agama : Islam <br />
                  Kewarganegaraan : Indonesia <br />
                  Alamat :
                  Ds.Rejeni-Dsn.Bawang-RT.20/RW.10-Kec.Krembung-Kab.Sidoarjo{" "}
                  <br />
                </p>
                <div>
                  <ul class="mb-0 mt-4 ">
                    <li className="flex flex-row gap-2">
                      <a href="https://github.com/firyaljihan/">
                        <AiFillGithub font-size="2em" color="black" />
                      </a>
                      <a href="https://gitlab.com/firyaljihan/">
                        <AiFillGitlab font-size="2em" color="black" />
                      </a>
                      <a href="https://www.linkedin.com/in/firyal-jihan-haura-52a304249">
                        <AiFillLinkedin font-size="2em" color="black" />
                      </a>
                      <a href="https://instagram.com/fjhn.hra/">
                        <AiOutlineInstagram font-size="2em" color="black" />
                      </a>

                      <a href="https://wa.me/6258903121725/">
                        <AiOutlineWhatsApp font-size="2em" color="black" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row-reverse">
            <div class="col-lg-6">
              <div class="mt-3">
                <img
                  src="asset/hb2.png"
                  alt=""
                  class="img-fluid mx-auto d-block w-full md:w-[900px] "
                />
              </div>
            </div>
            <div class="col-lg-6 ">
              <div class="md:mt-40 md:ml-52 text-2xl">
                {/* <div id="about"/> */}
                <div className="container">
                  <div className="row">
                    <div className="about-col-2">
                     
                      <div className="tab-titles">
                        <p
                          className="tab-links active-link"
                          onClick={(event) => {
                            Opentab(event, "education");
                          }}
                        >
                          Education
                        </p>
                        <p
                          className="tab-links"
                          onClick={(event) => {
                            Opentab(event, "skills");
                          }}
                        >
                          Skills
                        </p>
                        <p
                          className="tab-links"
                          onClick={(event) => {
                            Opentab(event, "hobi");
                          }}
                        >
                          Hobby
                        </p>
                      </div>

                      <div className="tab-contents active-tab" id="education">
                        <ul>
                          <li>
                            <span>SD</span>
                            <a href="https://goo.gl/maps/qim6DbAeYs95dAAR8" className="hover:no-underline hover:text-rose-900"><p>SD NEGERI REJENI</p></a>
                          </li>
                          <li>
                            <span>SMP</span>
                            <a href="https://goo.gl/maps/aZbyMXmqruTxGQETA" className="hover:no-underline hover:text-rose-900"><p>SMP NEGERI 1 KREMBUNG</p></a>
                          </li>
                          <li>
                            <span>SMA/SMK</span>
                            <a href="https://goo.gl/maps/XQEGdm98u2zKuqrH7" className="hover:no-underline hover:text-rose-900"><p>SMK TELKOM MALANG</p></a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-contents text-rose-800  " id="skills">
                        <ul>
                          <li>
                            <p>- Backend Developer</p>
                          </li>
                          <li>
                            <p>- Manajemen waktu</p>
                          </li>
                          <li>
                            <p>- Mudah beradaptasi</p>
                          </li>
                        </ul>
                        </div>
                      <div className="tab-contents text-rose-800" id="hobi">
                        <ul>
                          <li>
                            <p>- Memasak</p>
                          </li>
                          <li>
                            <p>- Membaca novel</p>
                          </li>
                          <li>
                            <p>- Badminton</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TentangSaya;
