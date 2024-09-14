import React from 'react';
import './CommunitySupport.css';

function CommunitySupport() {
  return (
    <div className="community-support">
      <h2>Community and Support</h2>
      <p>Join our community, ask questions, share tips, and support each other on your fitness journey!</p>
      
      <div className="community-sections">
        <div className="discussion-forum">
          <h3>Discussion Forum</h3>
          <p>Connect with other members, share your experiences, and get advice.</p>
          {/* Link to forum or embed a forum plugin here */}
        </div>

        <div className="qa-section">
          <h3>Q&A Section</h3>
          <p>Have questions? Get answers from fitness experts and community members.</p>
          {/* Implement a Q&A feature or integrate a third-party service */}
        </div>
      </div>
    </div>
  );
}

export default CommunitySupport;


