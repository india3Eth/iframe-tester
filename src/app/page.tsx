'use client';

import { useState } from 'react';

export default function IframeTester() {
  const [url, setUrl] = useState('');
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [iframeProps, setIframeProps] = useState({
    frameborder: '0',
    scrolling: 'auto',
    allowfullscreen: false,
    sandbox: {
      allowScripts: false,
      allowForms: false,
      allowPopups: false,
      allowSameOrigin: false,
      allowTopNavigation: false,
    },
    loading: 'eager',
    referrerpolicy: 'no-referrer-when-downgrade',
    allow: {
      camera: false,
      microphone: false,
      geolocation: false,
      payment: false,
    },
  });


  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleLoadIframe = () => {
    setError('');
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    if (!isValidUrl(url)) {
      setError('Please enter a valid URL');
      return;
    }
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };


  const generateIframeCode = () => {
    if (!url) return '';
    
    let attributes = [`src="${url}"`, `width="${width}"`, `height="${height}"`];
    
    if (iframeProps.frameborder !== '0') {
      attributes.push(`frameborder="${iframeProps.frameborder}"`);
    } else {
      attributes.push('frameborder="0"');
    }
    
    if (iframeProps.scrolling !== 'auto') {
      attributes.push(`scrolling="${iframeProps.scrolling}"`);
    }
    
    if (iframeProps.allowfullscreen) {
      attributes.push('allowfullscreen');
    }
    
    if (iframeProps.loading !== 'eager') {
      attributes.push(`loading="${iframeProps.loading}"`);
    }
    
    if (iframeProps.referrerpolicy !== 'no-referrer-when-downgrade') {
      attributes.push(`referrerpolicy="${iframeProps.referrerpolicy}"`);
    }
    
    const sandboxValues = [];
    if (iframeProps.sandbox.allowScripts) sandboxValues.push('allow-scripts');
    if (iframeProps.sandbox.allowForms) sandboxValues.push('allow-forms');
    if (iframeProps.sandbox.allowPopups) sandboxValues.push('allow-popups');
    if (iframeProps.sandbox.allowSameOrigin) sandboxValues.push('allow-same-origin');
    if (iframeProps.sandbox.allowTopNavigation) sandboxValues.push('allow-top-navigation');
    
    if (sandboxValues.length > 0) {
      attributes.push(`sandbox="${sandboxValues.join(' ')}"`);
    }
    
    const allowValues = [];
    if (iframeProps.allow.camera) allowValues.push('camera');
    if (iframeProps.allow.microphone) allowValues.push('microphone');
    if (iframeProps.allow.geolocation) allowValues.push('geolocation');
    if (iframeProps.allow.payment) allowValues.push('payment');
    
    if (allowValues.length > 0) {
      attributes.push(`allow="${allowValues.join('; ')}"`);
    }
    
    return `<iframe ${attributes.join(' ')}></iframe>`;
  };

  const copyIframeCode = () => {
    const iframeCode = generateIframeCode();
    navigator.clipboard.writeText(iframeCode);
    alert('Iframe code copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Iframe Tester
        </h1>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[600px]">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Basic Configuration
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Widget URL
                    </label>
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://example.com/widget"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                    {error && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Width (px)
                      </label>
                      <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        min="100"
                        max="2000"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Height (px)
                      </label>
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        min="100"
                        max="2000"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleLoadIframe}
                    disabled={!url || isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    {isLoading ? 'Loading...' : 'Load Widget'}
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Iframe Properties
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Frame Border
                    </label>
                    <select
                      value={iframeProps.frameborder}
                      onChange={(e) => setIframeProps(prev => ({ ...prev, frameborder: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="0">No border (0)</option>
                      <option value="1">With border (1)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Scrolling
                    </label>
                    <select
                      value={iframeProps.scrolling}
                      onChange={(e) => setIframeProps(prev => ({ ...prev, scrolling: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="auto">Auto</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Loading
                    </label>
                    <select
                      value={iframeProps.loading}
                      onChange={(e) => setIframeProps(prev => ({ ...prev, loading: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="eager">Eager</option>
                      <option value="lazy">Lazy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Referrer Policy
                    </label>
                    <select
                      value={iframeProps.referrerpolicy}
                      onChange={(e) => setIframeProps(prev => ({ ...prev, referrerpolicy: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="no-referrer-when-downgrade">No referrer when downgrade</option>
                      <option value="no-referrer">No referrer</option>
                      <option value="origin">Origin</option>
                      <option value="origin-when-cross-origin">Origin when cross-origin</option>
                      <option value="strict-origin">Strict origin</option>
                      <option value="strict-origin-when-cross-origin">Strict origin when cross-origin</option>
                      <option value="unsafe-url">Unsafe URL</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="allowfullscreen"
                      checked={iframeProps.allowfullscreen}
                      onChange={(e) => setIframeProps(prev => ({ ...prev, allowfullscreen: e.target.checked }))}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="allowfullscreen" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      Allow Fullscreen
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Sandbox Permissions
                    </label>
                    <div className="space-y-2">
                      {Object.entries(iframeProps.sandbox).map(([key, value]) => (
                        <div key={key} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`sandbox-${key}`}
                            checked={value}
                            onChange={(e) => setIframeProps(prev => ({
                              ...prev,
                              sandbox: { ...prev.sandbox, [key]: e.target.checked }
                            }))}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`sandbox-${key}`} className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Allow Permissions
                    </label>
                    <div className="space-y-2">
                      {Object.entries(iframeProps.allow).map(([key, value]) => (
                        <div key={key} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`allow-${key}`}
                            checked={value}
                            onChange={(e) => setIframeProps(prev => ({
                              ...prev,
                              allow: { ...prev.allow, [key]: e.target.checked }
                            }))}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor={`allow-${key}`} className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Preview
                </h2>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Dimensions: {width} × {height}px
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 min-h-[500px] flex items-center justify-center">
                {url && isValidUrl(url) ? (
                  <div className="w-full overflow-auto flex justify-center">
                    <iframe
                      src={url}
                      width={width}
                      height={height}
                      frameBorder={iframeProps.frameborder}
                      scrolling={iframeProps.scrolling}
                      allowFullScreen={iframeProps.allowfullscreen}
                      loading={iframeProps.loading}
                      referrerPolicy={iframeProps.referrerpolicy}
                      sandbox={
                        Object.values(iframeProps.sandbox).some(Boolean)
                          ? Object.entries(iframeProps.sandbox)
                              .filter(([, value]) => value)
                              .map(([key]) => {
                                const sandboxMap = {
                                  allowScripts: 'allow-scripts',
                                  allowForms: 'allow-forms',
                                  allowPopups: 'allow-popups',
                                  allowSameOrigin: 'allow-same-origin',
                                  allowTopNavigation: 'allow-top-navigation'
                                };
                                return sandboxMap[key] || key;
                              })
                              .join(' ')
                          : undefined
                      }
                      allow={
                        Object.values(iframeProps.allow).some(Boolean)
                          ? Object.entries(iframeProps.allow)
                              .filter(([, value]) => value)
                              .map(([key]) => key)
                              .join('; ')
                          : undefined
                      }
                      className="border border-gray-300 dark:border-gray-600 rounded"
                      onLoad={() => setIsLoading(false)}
                      onError={() => {
                        setIsLoading(false);
                        setError('Failed to load the URL');
                      }}
                    />
                  </div>
                ) : (
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="text-4xl mb-4">📱</div>
                    <p>Enter a valid URL to preview the widget</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Generated HTML Code
            </h2>
            
            <div className="space-y-4">
              <div>
                <textarea
                  value={generateIframeCode()}
                  readOnly
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white font-mono text-sm"
                  placeholder="Enter a URL to generate iframe code..."
                />
              </div>
              
              {url && isValidUrl(url) && (
                <button
                  onClick={copyIframeCode}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Copy Code to Clipboard
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
