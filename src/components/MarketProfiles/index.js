import { h, Component } from "preact";
import fetch from "cross-fetch";
import style from "./style";

const baseUrl =
  "https://dashboard.privateprep.com/feeds/profiles?roles=director";

const requestHeaders = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export default class App extends Component {
  state = {
    profiles: [],
    isLoading: false,
  };

  componentDidMount() {
    this.fetchProfiles();
  }

  fetchProfiles = () => {
    this.setState({ isLoading: true });

    fetch(`${baseUrl}&location=${this.props.location}`, requestHeaders)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(({ profiles }) => {
        this.setState({
          isLoading: false,
          profiles: profiles.sort(({ position: a }, { position: b }) =>
            a < b ? -1 : a > b ? 1 : 0
          ),
        });
      })
      .catch(error => {
        console.error("Error occurred while loading profiles", error);
      });
  };

  render(props) {
    return (
      <div class={style.profilesContainer}>
        {this.state.isLoading && <p>Loading...</p>}
        {this.state.profiles.map((profile, i) => (
          <div class={style.profileCard} key={i}>
            <img
              src={profile.picture_url}
              alt={`${profile.name} profile photo`}
            />
            <h4>{profile.name}</h4>
          </div>
        ))}
      </div>
    );
  }
}
