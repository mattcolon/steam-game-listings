import styles from './App.module.css';
import GameCard from './cards/GameCard';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.cardRow}>
        <GameCard
          id="730"
          isWindowsSupported
          isSteamOSSupported
        />
        <GameCard
          id="2074920"
          isWindowsSupported
        />
      </div>
      <div className={styles.cardRow}>
        <GameCard
          id="238960"
          isWindowsSupported
        />
        <GameCard
          id="1245620"
          isWindowsSupported
          fullPrice={ 59.99 }
        />
        <GameCard
          id="2139460"
          isWindowsSupported
        />
      </div>
      <div className={styles.cardRow}>
        <GameCard
          id="381210"
          isWindowsSupported
          fullPrice={ 19.99 }
          discountedPrice={ 7.99 }
        />
        <GameCard
          id="1203220"
          isWindowsSupported
        />
        <GameCard
          id="271590"
          isWindowsSupported
          fullPrice={ 39.98 }
          discountedPrice={ 14.98 }
        />
        <GameCard
          id="230410"
          isWindowsSupported
        />
      </div>
      <div className={styles.cardRow}>
        <GameCard
          id="2358720"
          isWindowsSupported
          canPrepurchase
          fullPrice={ 59.99 }
        />
        <GameCard
          id="1142710"
          isWindowsSupported
          fullPrice={ 59.99 }
          discountedPrice={ 29.99 }
        />
        <GameCard
          id="1172470"
          isWindowsSupported
        />
      </div>
      <div className={styles.cardRow}>
        <GameCard
          id="1938090"
          isWindowsSupported
          fullPrice=""
        />
        <GameCard
          id="2291060"
          isWindowsSupported
          isNew
          fullPrice={ 59.99 }
          discountedPrice={ 53.99 }
        />
      </div>
    </div>
  );
}

export default App;
