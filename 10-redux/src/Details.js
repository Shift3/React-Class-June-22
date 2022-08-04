import { connect } from "react-redux";
import { Component, lazy } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import classes from "./Details.module.css";
const Modal = lazy(() => import("./Modal"));

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();

    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  buyAnimal = () =>
    (window.location =
      "https://www.petfinder.com/search/dogs-for-adoption/?distance=100");
  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>

          <button
            onClick={this.toggleModal}
            style={{ backgroundColor: this.props.theme, color: "#fff" }}
          >
            Adopt {name}
          </button>
          <p>{description}</p>

          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className={classes.buttons}>
                  <button onClick={this.buyAnimal}>Yes</button>
                  <button onClick={this.toggleModal}>NO</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>

        <Carousel images={images} />
      </div>
    );
  }
}

const mapStateToProps = ({ theme }) => ({ theme });

const ReduxWrappedDetails = connect(mapStateToProps)(Details);

const DetailsWithRouter = withRouter(ReduxWrappedDetails);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
