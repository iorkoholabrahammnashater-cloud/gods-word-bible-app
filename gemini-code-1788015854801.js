import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('games');

  return (
    <div style={styles.container}>
      {/* Top Header */}
      <header style={styles.header}>
        <div style={styles.greetingContainer}>
          <span style={styles.subTitle}>GOOD MORNING!</span>
          <h1 style={styles.mainTitle}>Welcome to God's Word Bible App</h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={styles.content}>
        {activeTab === 'home' && (
          <div>
            {/* Daily Verse Card */}
            <div style={styles.verseCard}>
              <span style={styles.cardTag}>TODAY'S VERSE</span>
              <p style={styles.verseText}>
                "The Lord is my shepherd; I shall not want."
              </p>
              <span style={styles.verseRef}>— Psalm 23:1</span>
              <button style={styles.shareButton}>Share This Verse</button>
            </div>

            {/* Video Stories Section */}
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Latest Video Stories</h2>
              <span style={styles.seeAll}>See All</span>
            </div>

            <div style={styles.videoCard}>
              <div style={styles.videoPlaceholder}>
                <span style={styles.videoBadge}>New Testament</span>
                <p style={styles.videoTitle}>The Birth of Jesus</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'games' && (
          <div>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Bible Word Matching Game</h2>
            </div>
            <p style={styles.gameDescription}>
              Match the Bible characters with their correct descriptions!
            </p>

            {/* Embedded Wordwall Game Container */}
            <div style={styles.gameContainer}>
              <iframe
                title="Bible Matching Game"
                style={{
                  maxWidth: '100%',
                  width: '100%',
                  height: '380px',
                  border: 'none',
                  borderRadius: '12px',
                }}
                src="https://wordwall.net/embed/play/118084/627/889"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {activeTab === 'bible' && (
          <div style={styles.placeholderSection}>
            <h2>Bible Reading Feature</h2>
            <p>Select a book or chapter to start reading.</p>
          </div>
        )}

        {activeTab === 'videos' && (
          <div style={styles.placeholderSection}>
            <h2>Video Library</h2>
            <p>Explore Old and New Testament animated stories.</p>
          </div>
        )}
      </main>

      {/* Bottom Navigation Bar */}
      <nav style={styles.navBar}>
        <button
          style={activeTab === 'home' ? styles.activeNavItem : styles.navItem}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button
          style={activeTab === 'bible' ? styles.activeNavItem : styles.navItem}
          onClick={() => setActiveTab('bible')}
        >
          Bible
        </button>
        <button
          style={
            activeTab === 'videos' ? styles.activeNavItem : styles.navItem
          }
          onClick={() => setActiveTab('videos')}
        >
          Videos
        </button>
        <button
          style={activeTab === 'games' ? styles.activeNavItem : styles.navItem}
          onClick={() => setActiveTab('games')}
        >
          Games
        </button>
      </nav>
    </div>
  );
}

// Styling matching your app's navy and gold theme
const styles = {
  container: {
    backgroundColor: '#0A1128',
    color: '#FFFFFF',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justify: 'space-between',
    maxWidth: '480px',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  header: {
    padding: '24px 20px 10px 20px',
  },
  subTitle: {
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#00D2FF',
    letterSpacing: '1px',
  },
  mainTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '4px 0 0 0',
  },
  content: {
    padding: '10px 20px 80px 20px',
    flex: 1,
  },
  verseCard: {
    backgroundColor: '#FF9F1C',
    borderRadius: '16px',
    padding: '20px',
    color: '#000000',
    marginBottom: '24px',
  },
  cardTag: {
    fontSize: '10px',
    fontWeight: '800',
    letterSpacing: '0.5px',
    opacity: 0.8,
  },
  verseText: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '10px 0 6px 0',
  },
  verseRef: {
    fontSize: '12px',
    display: 'block',
    marginBottom: '14px',
  },
  shareButton: {
    backgroundColor: '#0A1128',
    color: '#FFFFFF',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '20px',
    fontSize: '11px',
    cursor: 'pointer',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: 0,
  },
  seeAll: {
    fontSize: '12px',
    color: '#00D2FF',
  },
  videoCard: {
    backgroundColor: '#1C2541',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  videoPlaceholder: {
    height: '160px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)',
  },
  videoBadge: {
    backgroundColor: '#7209B7',
    color: '#FFF',
    fontSize: '10px',
    padding: '4px 8px',
    borderRadius: '10px',
    alignSelf: 'flex-end',
  },
  videoTitle: {
    fontSize: '14px',
    fontWeight: 'bold',
    margin: 0,
  },
  gameDescription: {
    fontSize: '13px',
    color: '#A0AABF',
    marginBottom: '14px',
  },
  gameContainer: {
    backgroundColor: '#1C2541',
    borderRadius: '16px',
    padding: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  placeholderSection: {
    textAlign: 'center',
    paddingTop: '40px',
    color: '#A0AABF',
  },
  navBar: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    maxWidth: '480px',
    height: '60px',
    backgroundColor: '#0B132B',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTop: '1px solid #1C2541',
  },
  navItem: {
    background: 'none',
    border: 'none',
    color: '#6C757D',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  activeNavItem: {
    background: 'none',
    border: 'none',
    color: '#FF9F1C',
    fontSize: '13px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};