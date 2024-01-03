/*
  Copyright 2020-2023 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import React, { useState, useEffect } from 'react';

const containerStyle = {
  display: 'flex',
  position: 'fixed',
  bottom: 0,
  right: 0,
};
const brandStyle = {
  flex: '0 1 auto',
  contentAlign: 'middle',
  padding: '8px 4px',
  background: '#1990FF',
  borderRadius: 6,
  margin: 4,
};
const imageStyle = {
  flex: '1 0 auto',
  padding: 2,
  marginRight: 4,
};
const textStyle = {
  flex: '1 0 auto',
  fontSize: 12,
  color: 'white',
  lineHeight: '1.2rem',
};

const BrandTag = () => {
  const [showBranding, setShowBranding] = useState(false);
  useEffect(() => {
    fetch('/api/license')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShowBranding(!data.entitlements.includes['NO_BRANDING']);
      });
  }, []);

  if (!showBranding) {
    return;
  }
  return (
    <div style={containerStyle}>
      <span style={brandStyle}>
        <img style={imageStyle} src="/logo_white_40.png" alt="Logo" height={20} />
        <span style={textStyle}>
          <a
            href="https://github.com/lowdefy/lowdefy/tree/main/packages/website"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Built with Lowdefy
          </a>
        </span>
      </span>
    </div>
  );
};

export default BrandTag;
