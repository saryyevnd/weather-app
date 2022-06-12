import { useStore } from "@src/hooks";
import { Preloader, ImageComponent } from "@src/components";
import { Images } from "@src/assets/images";
import styles from "./styles.module.css";

export const Regions = () => {
  const { weathers } = useStore();
  return (
    <div className="row justify-content-center gap-1">
      {Object.keys(weathers).map((region) => {
        return (
          <div
            className="col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-6 cursor-pointer"
            key={region}
          >
            <div className="card">
              <div className="card-body p-1">
                <ImageComponent
                  url={Images[region]}
                  preloader={Preloader}
                  alt={region}
                  className={styles["card-image"]}
                />
                <h5 className="card-title">{region}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};