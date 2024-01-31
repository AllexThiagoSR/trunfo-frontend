import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

ProfilesList.propTypes = {
  
};

function ProfilesList({ profiles }) {
  return (
    <div>
      <ul className="list">
        {
          profiles ? profiles.map((profile) => (
            <li key={ `${profile.id}-profile`}>
              <Link href={ `/profile/${profile.id}` }>
                <div>
                  <p>{ profile.username }</p>
                  <img src={ profile.image } />
                </div>
              </Link>
            </li>
          )) : []
        }
      </ul>
    </div>
  );
}

export default ProfilesList;