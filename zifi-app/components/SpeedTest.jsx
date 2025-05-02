import { useState } from 'react';
import styles from '../styles/speedtest.module.css';

const SpeedTest = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState('0');
  const [uploadSpeed, setUploadSpeed] = useState('0');
  const [showDetails, setShowDetails] = useState(false);
  const [previousSpeeds, setPreviousSpeeds] = useState([]);

  const startTest = () => {
    setIsTesting(true);
    setIsTestComplete(false);

    setTimeout(() => {
      const newDownloadSpeed = (Math.random() * 200).toFixed(2);
      const newUploadSpeed = (Math.random() * 100).toFixed(2);

      if (isTestComplete) {
        setPreviousSpeeds([...previousSpeeds, { download: downloadSpeed, upload: uploadSpeed }]);
      }

      setDownloadSpeed(newDownloadSpeed);
      setUploadSpeed(newUploadSpeed);
      setIsTesting(false);
      setIsTestComplete(true);
      setShowDetails(false); // Hide details on new test
    }, 3000);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles["speed-test-container"]}>
      {/* Header - Always rendered */}
      <header className={styles["header"]}>
        <div className={styles["logo-left"]}>
          <span className={styles["logo-text"]}>
            <img src="/icons/ZiFi W.png" alt="zifi" className={styles["logo-image"]} />
          </span>
        </div>
        <h1 className={styles["header-title"]}>YOUR INTERNET SPEED</h1>
        <div className={styles["logo-right"]}>
          <img src="/united-kingdom.png" alt="UK Flag" className={styles["logo-image"]} />
        </div>
      </header>

      {/* Main Content */}
      <main className={styles["main-content"]}>
        {/* Previous Speed Tests */}
        <div className={styles["previous-tests-container"]}>
          {previousSpeeds.map((speed, index) => (
            <div key={index} className={styles["previous-speed-item"]}>
             
            </div>
          ))}
        </div>

        {/* Current Speed Test */}
        <div className={styles["current-test-container"]} style={{ opacity: showDetails ? '0.2' : '1' }}>
          <div className={styles["speed-display"]}>
            <div className={styles["speed-main"]}> {/* Changed class name here */}
              <div><p className={styles["speed-text"]}>{downloadSpeed}</p></div>
              <div className={styles["mbps"]}>
                <p className={styles["mbps-text"]}>Mbps</p>
                <button className={styles["go-btn"]} onClick={startTest}>
                  {isTesting ? (
                    <img src="/ZIFI Circle Download Green.png" alt="Test Again" className={styles["go-image"]} />
                  ) : (
                    <div className={styles["go-btn-container"]}>
                      <img src="/ZIFI Circle Test.png" alt="GO" className={styles["go-image"]} />
                      <span className={styles["go-text"]}>GO</span>
                    </div>
                  )}
                </button>
                {isTestComplete && !isTesting && (
                <div className={styles["more-info"]}>
                  <button className={styles["more-info-btn"]} onClick={toggleDetails}>
                    MORE INFORMATION
                  </button>
                </div>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Details View */}
        {showDetails && (
          <div className={styles["details-view"]}>
            <div className={styles["details-content"]}>
              <div className={styles["details-header"]}>
                <h2 className={styles["details-title"]}>MORE INFORMATION</h2>
                <div className={styles["back-button"]} onClick={toggleDetails}>
                  <img src="/icons/Arrow Back W Web.png" alt="Back" className={styles["back-arrow-image"]} />
                </div>
              </div>
              {/* City */}
              <div className={styles["city-country-container"]}>
                <div className={styles["city-country-icon"]}>
                  <img src="/united-kingdom.png" alt="uk" className={styles["city-country-image"]} />
                </div>
                <div className={styles["city-country-details"]}>
                  {/* City */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["flag-icon"]}></div>
                    <span className={styles["detail-label"]}>CITY</span>
                    <span className={styles["detail-value"]}>LONDON</span>
                  </div>

                  {/* Country */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["flag-icon"]}></div>
                    <span className={styles["detail-label"]}>COUNTRY</span>
                    <span className={styles["detail-value"]}>UNITED KINGDOM</span>
                  </div>
                </div>
              </div>

              <div className={styles["city-country-container"]}>
                <div className={styles["city-country-icon"]}>
                  <img src="/icons/ZIFI User Icon.png" alt="uk" className={styles["city-country-image"]} />
                </div>
                <div className={styles["city-country-details"]}>
                  {/* Latitude */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["flag-icon"]}></div>
                    <span className={styles["detail-label"]}>LATITUDE</span>
                    <span className={styles["detail-value"]}>51.514882</span>
                  </div>

                  {/* Longitude */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["flag-icon"]}></div>
                    <span className={styles["detail-label"]}>LONGITUDE</span>
                    <span className={styles["detail-value"]}>-0.123563</span>
                  </div>

                  {/* Internal IP */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["user-icon"]}></div>
                    <span className={styles["detail-label"]}>INTERNAL IP</span>
                    <span className={styles["detail-value"]}>10.0.0.186</span>
                  </div>

                  {/* External IP */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["user-icon"]}></div>
                    <span className={styles["detail-label"]}>EXTERNAL IP</span>
                    <span className={styles["detail-value"]}>82.41.174.63</span>
                  </div>

                  {/* MAC Address */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["user-icon"]}></div>
                    <span className={styles["detail-label"]}>MAC ADDRESS</span>
                    <span className={styles["detail-value"]}>5D:C3:07:7A:C4:8B</span>
                  </div>
                </div>
              </div>

              <div className={styles["city-country-container"]}>
                <div className={styles["city-country-icon"]}>
                  <img src="/icons/ZIFI WiFi Icon W.png" alt="uk" className={styles["city-country-image"]} />
                </div>
                <div className={styles["city-country-details"]}>
                  {/* Provider */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["wifi-icon"]}></div>
                    <span className={styles["detail-label"]}>PROVIDER</span>
                    <span className={styles["detail-value"]}>VIRGIN MEDIA</span>
                  </div>

                  {/* Router Name */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["wifi-icon"]}></div>
                    <span className={styles["detail-label"]}>ROUTER NAME</span>
                    <span className={styles["detail-value"]}>TP LINK</span>
                  </div>

                  {/* Server */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["wifi-icon"]}></div>
                    <span className={styles["detail-label"]}>SERVER</span>
                    <span className={styles["detail-value"]}>LONDON</span>
                  </div>

                  {/* Ping */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["wifi-icon"]}></div>
                    <span className={styles["detail-label"]}>PING</span>
                    <span className={styles["detail-value"]}>12 ms</span>
                  </div>
                </div>
              </div>

              <div className={styles["city-country-container"]}>
                <div className={styles["city-country-icon"]}>
                  {/* Empty placeholder div to maintain alignment */}
                  <div className={styles["placeholder-icon"]}></div>
                </div>
                <div className={styles["city-country-details"]}>
                  {/* Date */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["flag-icon"]}></div>
                    <span className={styles["detail-label"]}>DATE</span>
                    <span className={styles["detail-value"]}>27/03/2024</span>
                  </div>

                  {/* Time */}
                  <div className={styles["detail-item"]}>
                    <div className={styles["flag-icon"]}></div>
                    <span className={styles["detail-label"]}>TIME</span>
                    <span className={styles["detail-value"]}>15:45</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Speed Information */}
            <div className={styles["details-speed-info"]}>
              <div className={styles["details-speed-group"]}>
                <div className={styles["details-speed-value"]}>{downloadSpeed}</div>
                <div className={styles["details-speed-unit"]}>
                  <span className={styles["details-mbps"]}>Mbps</span>
                  <span className={styles["details-type-download"]}>
                    <img src="/icons/ZIFI Download Arrow Green.png" alt="Download" className={styles["up-image"]} />
                  </span>
                  <span>Download</span>
                </div>
              </div>

              <div className={styles["details-speed-group"]}>
                <div className={styles["details-speed-value"]}>{uploadSpeed}</div>
                <div className={styles["details-speed-unit"]}>
                  <span className={styles["details-mbps"]}>Mbps</span>
                  <span className={styles["details-type-upload"]}>
                    <img src="/icons/ZIFI Upload Arrow Purple.png" alt="Upload" className={styles["up-image"]} />
                  </span>
                  <span>Upload</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer - Always rendered */}
      <footer className={styles["footer"]}>
        <div className={styles["footer-left"]}>
          <div className={styles["footer-logo"]}>
            <img src="/icons/rightFooter.png" alt="zimo Flag" className={styles["footer-image"]} />
          </div>
        </div>
        <div className={styles["footer-right"]}>
          <div className={styles["footer-logo"]}>
            <img src="/icons/ZTFR w.png" alt="zimo Flag" className={styles["footer-image"]} />
            <img src="/icons/ZIMO MEET masked W.png" alt="zimo Flag" className={styles["footer-image"]} />
          </div>
          <div className={styles["footer-icon"]}></div>
        </div>
      </footer>
    </div>
  );
};

export default SpeedTest;