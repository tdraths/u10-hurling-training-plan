// diagrams.jsx — SVG pitch diagrams for hurling drills

const PITCH_GREEN = '#166534';
const PITCH_BORDER = '#15803d';

function PitchSVG({ width = 260, height = 160, children }) {
  return (
    <svg width="100%" viewBox={`0 0 ${width} ${height}`}
      style={{ background: PITCH_GREEN, borderRadius: 10, border: `2px solid ${PITCH_BORDER}`, display: 'block', maxWidth: width }}>
      <rect x="4" y="4" width={width - 8} height={height - 8} fill="none" stroke={PITCH_BORDER} strokeWidth="1.5" />
      {children}
    </svg>
  );
}

// Hurling-specific primitives
function Cone({ x, y, color = '#f59e0b', size = 7 }) {
  return <polygon points={`${x},${y - size} ${x - size * 0.7},${y + size * 0.4} ${x + size * 0.7},${y + size * 0.4}`} fill={color} stroke="#000" strokeWidth="0.5" />;
}

// Sliotar (hurling ball) — white with stitching lines
function Sliotar({ x, y, r = 6 }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#fff" stroke="#333" strokeWidth="1" />
      <path d={`M${x - r * 0.5},${y} Q${x},${y - r * 0.7} ${x + r * 0.5},${y}`} fill="none" stroke="#999" strokeWidth="0.7" />
      <path d={`M${x - r * 0.5},${y} Q${x},${y + r * 0.7} ${x + r * 0.5},${y}`} fill="none" stroke="#999" strokeWidth="0.7" />
    </g>
  );
}

// Hurley stick shape
function Hurley({ x, y, angle = 0, color = '#b45309' }) {
  const rad = (angle * Math.PI) / 180;
  const len = 28, bw = 10, bh = 7;
  const tx = x + Math.cos(rad) * len, ty = y + Math.sin(rad) * len;
  return (
    <g transform={`rotate(${angle} ${x} ${y})`}>
      <line x1={x} y1={y} x2={x} y2={y - len} stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx={x} cy={y - len} rx={bw / 2} ry={bh / 2} fill={color} opacity="0.85" />
    </g>
  );
}

function Player({ x, y, label = 'P', color = '#3b82f6', size = 11 }) {
  return (
    <g>
      <circle cx={x} cy={y} r={size} fill={color} stroke="#fff" strokeWidth="1.5" />
      <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">{label}</text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, color = '#10b981', dashed = false }) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = dx / len, uy = dy / len, h = 8;
  const ax = x2 - ux * h - uy * h * 0.4, ay = y2 - uy * h + ux * h * 0.4;
  const bx = x2 - ux * h + uy * h * 0.4, by = y2 - uy * h - ux * h * 0.4;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" strokeDasharray={dashed ? '5,4' : undefined} opacity="0.9" />
      <polygon points={`${x2},${y2} ${ax},${ay} ${bx},${by}`} fill={color} />
    </g>
  );
}

// Hurling goal (posts + crossbar)
function HurlingGoal({ x, y, w = 50, dir = 'top' }) {
  const postH = 30, crossH = 14;
  if (dir === 'top') return (
    <g>
      <rect x={x - w * 0.3} y={y} width={w * 0.6} height={crossH} fill="none" stroke="#fff" strokeWidth="2" />
      <line x1={x - w / 2} y1={y} x2={x - w / 2} y2={y - postH} stroke="#fff" strokeWidth="2" />
      <line x1={x + w / 2} y1={y} x2={x + w / 2} y2={y - postH} stroke="#fff" strokeWidth="2" />
    </g>
  );
  return (
    <g>
      <rect x={x - w * 0.3} y={y - crossH} width={w * 0.6} height={crossH} fill="none" stroke="#fff" strokeWidth="2" />
      <line x1={x - w / 2} y1={y} x2={x - w / 2} y2={y + postH} stroke="#fff" strokeWidth="2" />
      <line x1={x + w / 2} y1={y} x2={x + w / 2} y2={y + postH} stroke="#fff" strokeWidth="2" />
    </g>
  );
}

function Label({ x, y, text, color = '#86efac', size = 9 }) {
  return <text x={x} y={y} textAnchor="middle" fill={color} fontSize={size}>{text}</text>;
}

// ── INDIVIDUAL DIAGRAMS ───────────────────────────────────────────────

// Ball familiarisation — everyone has a sliotar
export function DiagBallFamiliarity() {
  return (
    <PitchSVG width={240} height={160}>
      {[40, 80, 120, 160, 200].map(x => <Cone key={x + 't'} x={x} y={18} />)}
      {[40, 80, 120, 160, 200].map(x => <Cone key={x + 'b'} x={x} y={142} />)}
      {[30, 70, 110, 150, 190, 120].map((x, i) => (
        <g key={i}>
          <Player x={x} y={[55, 85, 65, 100, 75, 120][i]} color={i % 2 ? '#ef4444' : '#3b82f6'} />
          <Sliotar x={x + 10} y={[55, 85, 65, 100, 75, 120][i] + 8} r={5} />
        </g>
      ))}
      <Label x={120} y={155} text="Every player has a sliotar — free movement" />
    </PitchSVG>
  );
}

// Catching — two players, lofted ball
export function DiagCatching() {
  return (
    <PitchSVG width={240} height={160}>
      <Player x={60} y={110} label="P1" color="#3b82f6" />
      <Player x={180} y={80} label="P2" color="#ef4444" />
      <Sliotar x={120} y={50} r={6} />
      <path d="M70,105 Q120,20 175,78" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5,3" />
      <Arrow x1={160} y1={55} x2={175} y2={78} color="#fbbf24" />
      <Label x={120} y={148} text="High lofted ball — both hands up, watch it in" />
    </PitchSVG>
  );
}

// Grip & swing — individual with cone
export function DiagGripSwing() {
  return (
    <PitchSVG width={240} height={150}>
      {[50, 100, 150, 200].map((x, i) => (
        <g key={i}>
          <Cone x={x} y={90} />
          <Sliotar x={x} y={78} r={5} />
          <Player x={x} y={115} label="P" color="#3b82f6" />
          <Hurley x={x} y={108} angle={-30} />
        </g>
      ))}
      <Label x={120} y={138} text="Ground strike off tee — dominant side first" />
    </PitchSVG>
  );
}

// Ground striking — rolling ball
export function DiagGroundStrike() {
  return (
    <PitchSVG width={260} height={160}>
      <HurlingGoal x={130} y={15} w={60} dir="top" />
      <Player x={70} y={120} label="P" color="#3b82f6" />
      <Hurley x={70} y={113} angle={-20} />
      <Sliotar x={100} y={110} r={5} />
      <Arrow x1={103} y1={108} x2={128} y2={20} color="#ef4444" />
      <Player x={190} y={120} label="P" color="#3b82f6" />
      <Sliotar x={160} y={108} r={5} />
      <Arrow x1={158} y1={106} x2={133} y2={20} color="#ef4444" />
      <Label x={130} y={148} text="Roll ball, strike on ground into goal" />
    </PitchSVG>
  );
}

// Puck-out / overhead striking
export function DiagOverheadStrike() {
  return (
    <PitchSVG width={240} height={170}>
      <Player x={120} y={130} label="P" color="#3b82f6" />
      <Hurley x={120} y={118} angle={-90} />
      <Sliotar x={120} y={60} r={6} />
      <path d="M120,115 L120,65" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,3" />
      <Arrow x1={120} y1={62} x2={160} y2={25} color="#ef4444" />
      <Label x={120} y={158} text="Toss ball, strike overhead — head up" />
    </PitchSVG>
  );
}

// Soloing — player running with ball
export function DiagSoloing() {
  return (
    <PitchSVG width={260} height={150}>
      {[40, 80, 120, 160, 200].map(x => <Cone key={x} x={x} y={75} />)}
      <Player x={20} y={75} label="P" color="#3b82f6" />
      <Hurley x={20} y={67} angle={10} />
      <Sliotar x={30} y={58} r={5} />
      <path d="M25,72 Q62,50 80,72 Q98,94 120,72 Q142,50 160,72 Q178,94 200,72 L220,72"
        fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="6,3" />
      <Label x={130} y={130} text="Solo between cones — drop & strike rhythm" />
    </PitchSVG>
  );
}

// Hand-pass drill
export function DiagHandPass() {
  return (
    <PitchSVG width={240} height={150}>
      <Player x={60} y={75} label="P1" color="#3b82f6" />
      <Sliotar x={85} y={72} r={5} />
      <Arrow x1={88} y1={72} x2={148} y2={72} color="#10b981" />
      <Player x={170} y={75} label="P2" color="#ef4444" />
      <text x={120} y={62} textAnchor="middle" fill="#fbbf24" fontSize="9">✋ fist / open palm</text>
      <line x1={30} y1={55} x2={30} y2={95} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
      <line x1={210} y1={55} x2={210} y2={95} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3" />
      <Label x={120} y={128} text="5m apart — fist or open palm pass" />
    </PitchSVG>
  );
}

// Blocking technique
export function DiagBlocking() {
  return (
    <PitchSVG width={220} height={160}>
      <Player x={80} y={100} label="A" color="#3b82f6" />
      <Hurley x={80} y={90} angle={-40} />
      <Sliotar x={110} y={75} r={5} />
      <Arrow x1={108} y1={73} x2={85} y2={98} color="#ef4444" />
      <Player x={140} y={65} label="D" color="#ef4444" />
      <Hurley x={140} y={55} angle={40} />
      <Label x={110} y={148} text="D presents hurley flat — block the strike" />
    </PitchSVG>
  );
}

// Relay / team drill with lines
export function DiagRelay() {
  return (
    <PitchSVG width={260} height={160}>
      {[['#3b82f6', 50], ['#ef4444', 130], ['#10b981', 210]].map(([color, x]) => (
        <g key={x}>
          {[30, 55, 80, 105].map((y, i) => <Player key={i} x={x} y={y} color={color} size={9} />)}
          <Cone x={x} y={140} />
          <Arrow x1={x} y1={26} x2={x} y2={132} color={color} dashed />
        </g>
      ))}
      <Label x={130} y={155} text="3 relay teams — dribble/solo to cone and back" />
    </PitchSVG>
  );
}

// 3v3 small game with hurling goals
export function DiagSmallGame() {
  return (
    <PitchSVG width={280} height={185}>
      <HurlingGoal x={140} y={12} w={55} dir="top" />
      <HurlingGoal x={140} y={173} w={55} dir="bottom" />
      {[[70, 45], [140, 65], [210, 45]].map(([x, y], i) => <Player key={i} x={x} y={y} label="B" color="#ef4444" size={10} />)}
      {[[80, 140], [140, 120], [200, 140]].map(([x, y], i) => <Player key={i} x={x} y={y} label="A" size={10} />)}
      <Sliotar x={140} y={92} r={6} />
    </PitchSVG>
  );
}

// Puck wall — individual striking at targets
export function DiagPuckWall() {
  return (
    <PitchSVG width={240} height={160}>
      <rect x={20} y={20} width={8} height={120} fill="#94a3b8" rx={2} />
      {[40, 60, 80].map(y => <Sliotar key={y} x={80} y={y} r={5} />)}
      {[40, 60, 80].map((y, i) => (
        <g key={i}>
          <Player x={160} y={y + 20} label="P" color="#3b82f6" size={10} />
          <Arrow x1={148} y1={y + 20} x2={90} y2={y} color="#ef4444" />
        </g>
      ))}
      <Label x={140} y={148} text="Strike at wall / target — both sides" />
    </PitchSVG>
  );
}

// First touch — receiving a ground ball
export function DiagFirstTouch() {
  return (
    <PitchSVG width={240} height={150}>
      <Player x={60} y={75} label="Co" color="#7c3aed" size={12} />
      <Sliotar x={90} y={75} r={5} />
      <Arrow x1={93} y1={75} x2={155} y2={75} color="#10b981" />
      <Player x={175} y={75} label="P" color="#3b82f6" />
      <Hurley x={175} y={65} angle={10} />
      <Arrow x1={175} y1={62} x2={175} y2={40} color="#fbbf24" dashed />
      <Label x={120} y={128} text="Coach rolls — player controls & lifts" />
    </PitchSVG>
  );
}

// Shooting — striking at goal from various angles
export function DiagShooting() {
  return (
    <PitchSVG width={260} height={170}>
      <HurlingGoal x={130} y={15} w={60} dir="top" />
      <Player x={70} y={100} label="GK" color="#7c3aed" size={11} />
      {[[50, 140], [130, 150], [210, 140]].map(([x, y], i) => (
        <g key={i}>
          <Sliotar x={x} y={y} r={5} />
          <Player x={x} y={y + 14} label="P" color="#3b82f6" size={10} />
          <Arrow x1={x} y1={y - 4} x2={[60, 130, 110][i]} y2={[25, 20, 25][i]} color="#ef4444" />
        </g>
      ))}
      <Label x={130} y={162} text="Strike from multiple angles — both sides" />
    </PitchSVG>
  );
}

// Jab lift — picking ball off ground
export function DiagJabLift() {
  return (
    <PitchSVG width={240} height={150}>
      {[40, 90, 140, 190].map((x, i) => (
        <g key={i}>
          <Sliotar x={x} y={80} r={5} />
          <Player x={x} y={105} label="P" color="#3b82f6" size={10} />
          <Hurley x={x} y={97} angle={5} />
          <Arrow x1={x} y1={93} x2={x} y2={75} color="#fbbf24" />
        </g>
      ))}
      <Label x={120} y={135} text="Jab lift — roll back onto hurley, flick up" />
    </PitchSVG>
  );
}

// Overhead catch
export function DiagOverheadCatch() {
  return (
    <PitchSVG width={220} height={165}>
      <Player x={110} y={120} label="P" color="#3b82f6" />
      <Sliotar x={110} y={45} r={7} />
      <path d="M100,115 Q95,80 108,50" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,3" />
      <text x={75} y={85} fill="#fbbf24" fontSize="9">Both hands</text>
      <text x={75} y={96} fill="#fbbf24" fontSize="9">reach up</text>
      <text x={75} y={107} fill="#fbbf24" fontSize="9">fingers spread</text>
      <Label x={110} y={152} text="Watch ball into hands — W shape" />
    </PitchSVG>
  );
}

// Line passing — group in two lines
export function DiagLinePassing() {
  return (
    <PitchSVG width={260} height={160}>
      {[30, 60, 90, 120].map((y, i) => <Player key={i} x={60} y={y} color="#3b82f6" size={10} />)}
      {[30, 60, 90, 120].map((y, i) => <Player key={i} x={200} y={y} color="#ef4444" size={10} />)}
      <Sliotar x={95} y={30} r={5} />
      <Arrow x1={98} y1={30} x2={168} y2={30} color="#10b981" />
      <Arrow x1={200} y1={44} x2={74} y2={60} color="#10b981" dashed />
      <Label x={130} y={148} text="Pass & follow — move to back of opposite line" />
    </PitchSVG>
  );
}

// Map drill names → diagram components
export const DRILL_DIAGRAM_MAP = {
  // Warm-ups
  'Ball & Hurley Familiarisation': DiagBallFamiliarity,
  'Traffic Lights (Hurling)': DiagBallFamiliarity,
  'Sliotar Tag': DiagBallFamiliarity,
  'Compass Dribble': DiagSoloing,
  'Chase the Tail (Hurling)': DiagBallFamiliarity,
  'Relay Races (Hurling)': DiagRelay,
  'Numbers Game': DiagBallFamiliarity,
  'Solo Relay': DiagRelay,
  'Circle Puck': DiagHandPass,
  'Puck & Follow': DiagLinePassing,
  'Shooting Gallery Queue': DiagShooting,
  'Team Chase': DiagBallFamiliarity,
  'Partner Solo': DiagSoloing,
  // Stations
  'Grip & Hold': DiagGripSwing,
  'Ground Strike off Tee': DiagGripSwing,
  'Ground Strike (Rolling Ball)': DiagGroundStrike,
  'Jab Lift': DiagJabLift,
  'Overhead Catch': DiagOverheadCatch,
  'Two-Hand Catch (Low)': DiagCatching,
  'Two-Hand Catch (High Ball)': DiagCatching,
  'Hand-Pass Pairs': DiagHandPass,
  'Hand-Pass Gates': DiagHandPass,
  'Solo Lane': DiagSoloing,
  'Solo Slalom': DiagSoloing,
  'Overhead Strike': DiagOverheadStrike,
  'Strike from Hand': DiagOverheadStrike,
  'Line Passing': DiagLinePassing,
  'Triangle Pucking': DiagLinePassing,
  'Blocking Basics': DiagBlocking,
  'Hooking Intro': DiagBlocking,
  'First Touch Control': DiagFirstTouch,
  'Receive & Solo': DiagFirstTouch,
  'Shooting Circuit': DiagShooting,
  'Shooting (Multi-Angle)': DiagShooting,
  'Puck Wall Targets': DiagPuckWall,
  'Score from Hand': DiagShooting,
  'Ground Stroke Relay': DiagRelay,
  'Combination Drill': DiagLinePassing,
  'Aerial Catch & Strike': DiagOverheadCatch,
  'Catch & Pass': DiagCatching,
  'Solo & Shoot': DiagSoloing,
  'Backs & Forwards': DiagSmallGame,
  '1v1 to Goal': DiagShooting,
  'Free Puck Practice': DiagShooting,
  'Sideline Cut': DiagGroundStrike,
  '65m Puck': DiagGroundStrike,
};
