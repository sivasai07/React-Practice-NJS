import MiniGame from "./MiniGame";

const OfflinePage = () => {
  return (
    <div className="offline-page">
      <h1>🍔 You're Offline</h1>

      <p>
        Looks like your internet connection is unavailable.
      </p>

      <p>
        Reconnect to continue exploring delicious restaurants and menus.
      </p>

      <h3>While you're waiting, play a quick game!</h3>

      <MiniGame />
    </div>
  );
};

export default OfflinePage;