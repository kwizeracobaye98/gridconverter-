(function(){
  const OfflineMapLayer = L.GridLayer.extend({
    createTile: function(coords) {
      const tile = document.createElement('div');
      tile.style.width = '256px';
      tile.style.height = '256px';
      tile.style.position = 'relative';
      tile.style.overflow = 'hidden';
      tile.style.background = '#07110a';

      const style = this.options.style || 'osm';
      const bg = style === 'sat' ? '#0b1717' : style === 'topo' ? '#07110d' : '#07110a';
      const grid = style === 'sat' ? 'rgba(255,255,255,0.14)' : style === 'topo' ? 'rgba(255,255,255,0.10)' : 'rgba(57,255,106,0.12)';
      const road = style === 'sat' ? '#4d6a58' : style === 'topo' ? '#5b553e' : '#2d4f3b';
      const accent = style === 'sat' ? '#8dd4a5' : style === 'topo' ? '#d6b96d' : '#39ff6a';
      const text = style === 'sat' ? '#b6e1c3' : style === 'topo' ? '#e3c97f' : '#c8e8c8';
      const x = coords.x;
      const y = coords.y;
      const z = coords.z;
      const roadX = 40 + ((x + y) % 7) * 24;
      const roadY = 80 + ((x * 3 + y * 5) % 5) * 24;
      const roadX2 = 180 + ((x * 2 + y) % 6) * 12;
      const roadY2 = 40 + ((x + y * 2) % 6) * 24;

      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="${bg}" />
          <rect x="12" y="12" width="232" height="232" rx="16" fill="rgba(255,255,255,0.02)" stroke="${grid}" />
          <g stroke="${grid}" stroke-width="1" stroke-linecap="round">
            <line x1="0" y1="64" x2="256" y2="64" />
            <line x1="0" y1="128" x2="256" y2="128" />
            <line x1="0" y1="192" x2="256" y2="192" />
            <line x1="64" y1="0" x2="64" y2="256" />
            <line x1="128" y1="0" x2="128" y2="256" />
            <line x1="192" y1="0" x2="192" y2="256" />
          </g>
          <g fill="none" stroke="${road}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.85">
            <path d="M28 212 C78 170, 108 155, 156 122 S232 84, 232 34" />
            <path d="M34 64 C98 92, 118 108, 154 160 S214 228, 228 228" />
            <path d="M${roadX} ${roadY} C ${roadX + 42} ${roadY - 24}, ${roadX2 - 14} ${roadY2 + 24}, ${roadX2} ${roadY2}" />
          </g>
          <g fill="${accent}" opacity="0.8">
            <circle cx="70" cy="76" r="6" />
            <circle cx="188" cy="186" r="6" />
          </g>
          <g fill="${text}" font-family="Segoe UI, Arial, sans-serif" font-size="14">
            <text x="18" y="32">Offline map</text>
            <text x="18" y="246">z${z} · x${x} · y${y}</text>
          </g>
        </svg>`;

      const dataUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
      const img = document.createElement('img');
      img.src = dataUrl;
      img.alt = `${style} offline map tile`;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.display = 'block';
      tile.appendChild(img);
      return tile;
    }
  });

  L.offlineMapLayer = function(options) {
    return new OfflineMapLayer(options || {});
  };
})();
