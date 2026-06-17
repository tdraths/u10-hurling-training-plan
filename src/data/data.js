// data.js — U10 Hurling coaching plan data

export const ROTATION_COLOURS = {
  1: { bg: '#1c3a1c', accent: '#16a34a', light: '#dcfce7' },
  2: { bg: '#3a1c1c', accent: '#dc2626', light: '#fee2e2' },
};

export const DRILL_LIBRARY = {
  warmups: [
    { name: 'Ball & Hurley Familiarisation', minPlayers: 4, desc: "Every player has a sliotar and hurley. Free movement around a large grid — coach calls out actions: dribble, stop, balance on hurley, roll ball along ground. No wrong answers." },
    { name: 'Traffic Lights (Hurling)', minPlayers: 4, desc: "All solo or carry in grid. Red = stop, sliotar balanced on hurley. Yellow = walk slowly. Green = solo at speed. Orange = change direction. Scales to any number." },
    { name: 'Sliotar Tag', minPlayers: 10, desc: "3–4 taggers carry their hurley. All others dribble/carry a sliotar. Tagged players do 5 toe-taps on ball before rejoining. Large grid for 20 players." },
    { name: 'Chase the Tail (Hurling)', minPlayers: 10, desc: "Bibs as tails. Players try to grab others' while soloing or carrying their sliotar. If you drop the ball while grabbing, tail doesn't count. Brilliant for 20 players." },
    { name: 'Compass Dribble', minPlayers: 6, desc: "Coach calls North/South/East/West — players dribble or solo to that end of grid. Add 'turn!' for a full 180 change of direction. Works with any squad size." },
    { name: 'Relay Races (Hurling)', minPlayers: 12, desc: "4 teams of 4–6. Dribble to cone and back with sliotar. Vary: solo, hand-carry, ground stroke. Run 4 simultaneous lanes. Fast, competitive warm-up." },
    { name: 'Numbers Game', minPlayers: 14, desc: "Every player gets a number. Coach calls two numbers — those players race to a target cone while others keep dribbling or soloing in the grid. Keeps everyone active." },
    { name: 'Solo Relay', minPlayers: 12, desc: "Teams of 4–6. Must solo (bounce off hurley) at least twice before reaching the cone. Return with a ground carry. All lanes running simultaneously." },
    { name: 'Circle Puck', minPlayers: 10, desc: "Groups of 6–8 in circles. Puck sliotar around the circle — any method (hand-pass, ground strike, lob). Must call name before sending. Run 2–3 simultaneous circles." },
    { name: 'Puck & Follow', minPlayers: 12, desc: "All players in pairs spread across pitch. Strike to partner and follow your pass to take their spot. Both walking pace and then at trot. No stopping, no queuing." },
    { name: 'Shooting Gallery Queue', minPlayers: 10, desc: "Two goals side by side, players in two queues. Each takes a ground strike at goal, joins back of queue. GKs rotate every 2 min. Keeps big numbers moving." },
    { name: 'Team Chase', minPlayers: 14, desc: "3 teams with different bib colours. Each team tries to collect only their colour tails. Players must keep control of their sliotar while chasing. Great for 18–24 players." },
    { name: 'Partner Solo', minPlayers: 10, desc: "All pairs spread across pitch. One solos toward partner, partner solos back. Continuous movement — no stopping. Coach sets challenges: left hand only, faster, eyes up." },
  ],
  stations: [
    // First touch & catching (priority 1)
    { name: 'Two-Hand Catch (Low)', minPlayers: 2, type: 'catching', desc: "Pairs 5m apart. One rolls or bounces sliotar underarm, partner catches with two hands at waist height. W-shape hand position — fingers spread and pointing down. 8–12 pairs simultaneously." },
    { name: 'Two-Hand Catch (High Ball)', minPlayers: 2, type: 'catching', desc: "One lobs ball overhead, partner catches at chest/face height — both hands up, eyes on ball all the way in. Absorb into chest. Run all pairs simultaneously." },
    { name: 'Overhead Catch', minPlayers: 2, type: 'catching', desc: "One player throws high. Partner jumps to catch with hurley-side arm leading — fingers spread, watch ball into hands. Progress to running onto the ball." },
    { name: 'First Touch Control', minPlayers: 4, type: 'first touch', desc: "Coach rolls ball at different speeds and angles. Player traps with hurley, immediately lifts onto hurley and solos away. Two queues from two coaches — maximum reps." },
    { name: 'Receive & Solo', minPlayers: 2, type: 'first touch', desc: "Pairs 8m apart. One strikes, other receives on hurley (ground) and immediately solos one length before returning. Emphasis: control before speed." },
    { name: 'Catch & Pass', minPlayers: 3, type: 'catching', desc: "Triangle of 3 players, 6m per side. One lobs, middle catches, immediately hand-passes to third. Rotate positions. Run 5–7 triangles simultaneously with 20 players." },
    // Striking (priority 2)
    { name: 'Grip & Hold', minPlayers: 1, type: 'striking', desc: "Every player works at their own cone. Coach demonstrates: dominant hand top, non-dominant below. Swing through slow motion. Paired check: player checks partner's grip." },
    { name: 'Ground Strike off Tee', minPlayers: 2, type: 'striking', desc: "Ball on cone tee. Player strikes on the ground using laces of hurley — left and right sides. Run 8–10 simultaneous stations with a tee each. Focus on follow-through." },
    { name: 'Ground Strike (Rolling Ball)', minPlayers: 2, type: 'striking', desc: "Coach rolls ball, player strikes on the ground into a goal or target. Builds timing. Two queues from two coaches for large groups." },
    { name: 'Strike from Hand', minPlayers: 2, type: 'striking', desc: "Player holds ball in non-dominant hand at waist height, drops and strikes. Overhead strike technique: toss slightly, strike through. Both dominant and non-dominant side." },
    { name: 'Overhead Strike', minPlayers: 2, type: 'striking', desc: "Toss ball above head height and strike overhead — the classic hurling puck. Head still, eyes on ball, swing through. Use a target or goal. Both sides." },
    { name: 'Shooting Circuit', minPlayers: 14, type: 'striking', desc: "3 shooting stations around one goal: left, centre, right. Players rotate through. GK in goal and rotates. 3 strikes per player per station. Keeps 14–24 busy without queuing." },
    { name: 'Shooting (Multi-Angle)', minPlayers: 10, type: 'striking', desc: "Two goals, multiple cones at different angles and distances. Players strike from each cone position. Both ground and overhead strikes. Two queues to maximise reps." },
    { name: 'Puck Wall Targets', minPlayers: 4, type: 'striking', desc: "Targets (cones/bibs) on a wall or fence. Players strike at targets from 10m. Count hits. Both sides. With 20 players: 4–5 simultaneous striking walls across the pitch." },
    { name: 'Score from Hand', minPlayers: 4, type: 'striking', desc: "Strike from hand into goal from 15–20m. Alternate: left post, right post, over the bar. GK in. Two queues, two goals to keep 20 players moving." },
    // Soloing & carrying (priority 3)
    { name: 'Jab Lift', minPlayers: 1, type: 'soloing', desc: "Every player at their own ball. Jab the hurley under the ball and flick it up to hand — the fundamental hurling lift. Master slow first, then speed up. No stooping." },
    { name: 'Solo Lane', minPlayers: 4, type: 'soloing', desc: "Set up 5–6 parallel lanes, 15m long. Players solo down and back — drop ball onto hurley, strike to hand, repeat. Count consecutive solos. All lanes simultaneously." },
    { name: 'Solo Slalom', minPlayers: 4, type: 'soloing', desc: "5 cones per lane, 1m apart. Solo in and out — must keep ball on hurley or in hand between touches. 5–6 lanes running simultaneously for large groups." },
    { name: 'Backs & Forwards', minPlayers: 8, type: 'soloing', desc: "Pairs. Forward solos toward defender, tries to get past or hand-pass around. Defender tries to block/hook or intercept. Rotate roles every 3 turns." },
    { name: 'Solo & Shoot', minPlayers: 6, type: 'soloing', desc: "Players solo from halfway to goal and shoot. Two simultaneous lanes each side of goal. Builds game-relevant combination. GK in goal." },
    // Teamwork (priority 4)
    { name: 'Hand-Pass Pairs', minPlayers: 2, type: 'teamwork', desc: "Pairs 5m apart. Hand-pass only — fist or open palm. Move further apart as confidence grows. 8–10 simultaneous pairs. Focus: ball must travel cleanly to partner's hands." },
    { name: 'Hand-Pass Gates', minPlayers: 6, type: 'teamwork', desc: "10–12 small gates in a 20x20 grid. Pairs hand-pass through as many gates as possible in 2 min. All pairs work simultaneously. Count gates." },
    { name: 'Line Passing', minPlayers: 8, type: 'teamwork', desc: "Two lines 8m apart. Player strikes to opposite line player and follows to back of their line. Puck or hand-pass. 4 simultaneous lanes for 20 players." },
    { name: 'Triangle Pucking', minPlayers: 9, type: 'teamwork', desc: "3 players, 8–10m per side. Puck or hand-pass around triangle, change direction on whistle. Run 5–7 simultaneous triangles for 20 players." },
    { name: 'Combination Drill', minPlayers: 6, type: 'teamwork', desc: "3-player combination: A strikes to B, B catches and hand-passes to C, C solos and shoots. Run 3–4 simultaneous channels. Combines all key skills." },
    { name: 'Aerial Catch & Strike', minPlayers: 3, type: 'teamwork', desc: "One player lobs high, second contests and catches, immediately solos and strikes to a target. Groups of 3 working simultaneously across the pitch." },
    // Blocking & hooking (priority 5)
    { name: 'Blocking Basics', minPlayers: 2, type: 'blocking', desc: "Pairs facing each other 3m apart. One strikes slowly at ground level, partner presents hurley flat to block. No stick contact — body blocking only. Swap roles." },
    { name: 'Hooking Intro', minPlayers: 2, type: 'blocking', desc: "Defender approaches from behind striker's hurley arm. Reach around to hook the swing — catch the hurley, don't whack it. Passive at first, then light pressure." },
    { name: '1v1 to Goal', minPlayers: 2, type: 'blocking', desc: "Attacker gets a solo start, tries to score. Defender tries to hook, block, or force wide. 8 simultaneous 1v1 channels. GK in goal rotates every 3 min." },
    // Set pieces
    { name: 'Free Puck Practice', minPlayers: 4, type: 'set piece', desc: "Players take free pucks from different positions outside the D. Left and right sides, central. Over the bar and into goal. Two goals, two queues to keep it moving." },
    { name: 'Sideline Cut', minPlayers: 4, type: 'set piece', desc: "Ball placed on sideline. Player practises the sideline cut — strike from the ground along the sideline. Both sides. Emphasise low trajectory along ground." },
    { name: '65m Puck', minPlayers: 4, type: 'set piece', desc: "GK takes the 65. Teach: ball off ground, lofted strike for distance. Outfield players take turns trying to clear the 65 metre line. Fun distance challenge." },
    { name: 'Ground Stroke Relay', minPlayers: 8, type: 'combination', desc: "Teams relay race using only ground strokes. Strike to cone, ground stroke back. 4 simultaneous teams of 4–5. Reinforces ground game." },
  ],
  smallSided: [
    { name: 'Two Games Simultaneously (4v4)', minPlayers: 14, format: '4v4 × 2', desc: "Split into two simultaneous 4v4 games on parallel half-pitches with hurling goals. Maximises touches and game time. Ideal for 14–20 players." },
    { name: 'Two Games Simultaneously (5v5)', minPlayers: 18, format: '5v5 × 2', desc: "Two simultaneous 5v5 games. With 20–24 players this keeps everyone playing. Rotate a sub every 3 min per pitch. Full hurling rules." },
    { name: 'World Cup (Round Robin)', minPlayers: 14, format: '4-team', desc: "4 teams. Two games simultaneously on half-pitches. Losers swap pitches, winners stay. First to 5 scores wins all. High energy, everyone active." },
    { name: 'Hand-Pass Only Game', minPlayers: 14, format: '4v4 × 2', desc: "Two simultaneous games — hand-passing only, no striking. Develops carrying, hand-passing and catching under pressure. Great for early sessions." },
    { name: 'Touch Count Game', minPlayers: 14, format: '4v4 × 2', desc: "Two simultaneous 4v4 games. Player can carry/solo for max 4 steps before they must pass or strike. Rewards quick ball movement." },
    { name: 'Score Variety Game', minPlayers: 14, format: '4v4 × 2', desc: "Two games. Goal from ground stroke = 3 pts, point from hand = 1 pt, point from strike = 2 pts. Rewards different skills and decisions." },
    { name: 'Attack vs Defence (Waves)', minPlayers: 14, format: 'Waves', desc: "Waves of 3 attackers vs 2 defenders attacking goal. Score or defend, rotate immediately. Coaches manage waves. Great for 14–24 players." },
    { name: 'Possession Game (4v4 + neutrals)', minPlayers: 14, format: '4v4+2N', desc: "4v4 with 2 neutral players always on team in possession. Makes it 6v4. Rewards retention and support play." },
    { name: 'Tournament (3v3, 4 teams)', minPlayers: 16, format: '3v3 × 2', desc: "4 teams of 4. Two simultaneous 3v3 games (one sub). 4-min games, rotate. League table on a whiteboard." },
    { name: 'Backs & Forwards (6v6)', minPlayers: 16, format: '6v6', desc: "6 forwards vs 6 backs with GK. Forwards try to score, backs clear. Rotate every 4 min. Teaches positional roles in a fun setting." },
    { name: 'Transition Blitz', minPlayers: 16, format: '6v6', desc: "6v6 on a big pitch. When a team scores they immediately become defenders. Score within 5 sec of winning possession = golden score (3 pts)." },
    { name: 'Players vs Coaches', minPlayers: 14, format: 'Any', desc: "All players vs all available coaches. Coaches use non-dominant hand only. Players win by default if they score 5. Classic end-of-session crowd-pleaser." },
    { name: '5v5 + GKs (rotating subs)', minPlayers: 14, format: '5v5', desc: "5v5 with GKs plus subs rotating every 3 minutes. Full hurling rules. With 14–16 players you have 2–4 subs per team." },
    { name: 'Skills Challenge Game', minPlayers: 14, format: '4v4 × 2', desc: "Two simultaneous games. Score from a catch = 3 pts, score after a solo = 2 pts, regular score = 1 pt. Rewards skill execution." },
  ],
};

export const BASE_WEEKS = [
  // ── ROTATION 1 ──────────────────────────────────────────────────────
  { week:1, rotation:1, theme:"Hurley & Sliotar — Getting Comfortable", colour:"#16a34a",
    warmup:{ name:"Ball & Hurley Familiarisation", duration:"8 min", desc:"Every player has a sliotar and hurley. Free movement in a large grid — coach calls out simple actions: dribble the ball, balance on hurley, stop, change direction. No wrong answers. Just get comfortable." },
    stations:[
      { name:"Grip & Hold", duration:"8 min", desc:"Every player at their own cone. Coach demonstrates the correct grip: dominant hand on top, non-dominant below. Slow-motion swing. Players check each other's grip in pairs. No ball yet — just the movement." },
      { name:"Jab Lift", duration:"8 min", desc:"Every player works at their own sliotar. Jab hurley under ball on the ground and flick up to hand. This is the fundamental lift. Slow first — no rushing. Run simultaneously across the full group." },
      { name:"Ground Strike off Tee", duration:"8 min", desc:"Ball on cone tee. Each player strikes on the ground using the bas of the hurley. 8–10 simultaneous tees set up across the pitch. Focus on the follow-through, not power." }],
    smallSided:{ format:"Hand-Pass Only Game", duration:"15 min", rules:"Two simultaneous 4v4 games — hand-passing only. No striking yet. Keeps the ball in hand so players can focus on movement, space, and communication." }},

  { week:2, rotation:1, theme:"Two-Hand Catch — The Foundation", colour:"#059669",
    warmup:{ name:"Traffic Lights (Hurling)", duration:"8 min", desc:"All players carry or dribble in a large grid. Red = stop, sliotar balanced on hurley. Yellow = walk. Green = move at pace. Orange = change direction. Scale the grid for 20 players." },
    stations:[
      { name:"Two-Hand Catch (Low)", duration:"8 min", desc:"Pairs 5m apart. One rolls or bounces underarm, partner catches at waist height with two hands — W-shape, fingers spread pointing down. 8–10 simultaneous pairs across the pitch." },
      { name:"Two-Hand Catch (High Ball)", duration:"8 min", desc:"One player lobs overhead, partner catches at chest/face height — both hands up, eyes on ball all the way in. Absorb into chest. All pairs working simultaneously." },
      { name:"Catch & Pass", duration:"8 min", desc:"Triangle of 3 players, 6m per side. One lobs, middle catches, immediately hand-passes to third. Rotate positions. Run 5–7 simultaneous triangles with 20 players." }],
    smallSided:{ format:"Hand-Pass Only Game", duration:"15 min", rules:"Two simultaneous 4v4 games — hand-pass only. Caught ball = 1 bonus point per team regardless of score. Rewards clean catching." }},

  { week:3, rotation:1, theme:"First Touch — Receiving the Ball", colour:"#0891b2",
    warmup:{ name:"Puck & Follow", duration:"8 min", desc:"All players in pairs spread across pitch. Strike to partner and follow your pass to take their spot. Both walking pace then trot. No stopping, no queuing." },
    stations:[
      { name:"First Touch Control", duration:"8 min", desc:"Coach rolls ball at different speeds and angles. Player traps with hurley, immediately lifts onto hurley and solos away. Two queues from two coaches — maximum reps across 20 players." },
      { name:"Receive & Solo", duration:"8 min", desc:"Pairs 8m apart. One strikes gently, other receives on hurley (ground) and immediately solos one length before returning. Emphasis: control before speed." },
      { name:"Two-Hand Catch (Low)", duration:"8 min", desc:"Pairs but now with movement: receiver moves to a different cone before ball arrives. Develop footwork and reading the flight. 8–10 pairs simultaneously." }],
    smallSided:{ format:"Touch Count Game", duration:"15 min", rules:"Two simultaneous 4v4 games. Max 4 steps/solos before pass or strike. Rewards quick ball movement and first touch under pressure." }},

  { week:4, rotation:1, theme:"Ground Striking — Power & Direction", colour:"#dc2626",
    warmup:{ name:"Shooting Gallery Queue", duration:"8 min", desc:"Two goals side by side, players in two queues. Each takes a ground strike, joins back of queue. GKs rotate every 2 min. Just reps — no instruction yet." },
    stations:[
      { name:"Ground Strike off Tee", duration:"8 min", desc:"Ball on tee. Strike on the ground — left and right sides. 8–10 simultaneous tee stations. Focus: dominant hand pulls through, non-dominant guides. Both sides." },
      { name:"Ground Strike (Rolling Ball)", duration:"8 min", desc:"Coach rolls ball, player strikes on the ground into a goal or target. Builds timing. Two queues from two coaches for 20 players. Vary pace of roll." },
      { name:"Puck Wall Targets", duration:"8 min", desc:"Targets (cones/bibs) on a wall or fence. Players strike at targets from 10m. Count hits. 4–5 simultaneous striking areas across the pitch." }],
    smallSided:{ format:"Two Games Simultaneously (4v4)", duration:"15 min", rules:"Ground strokes to score only — no overhead or hand-pass goals. Rewards controlled ground game." }},

  { week:5, rotation:1, theme:"Soloing & Carrying — Moving with the Ball", colour:"#7c3aed",
    warmup:{ name:"Compass Dribble", duration:"8 min", desc:"Coach calls North/South/East/West — players carry or solo to that end of a large grid. Add 'turn!' for a full 180. Works for any squad size." },
    stations:[
      { name:"Solo Lane", duration:"8 min", desc:"5–6 parallel lanes, 15m long. Players solo down and back — drop ball onto hurley, strike to hand, repeat. Count consecutive solos. All lanes simultaneously." },
      { name:"Solo Slalom", duration:"8 min", desc:"5 cones per lane, 1m apart. Solo in and out — keep ball on hurley or in hand between touches. 5–6 lanes running simultaneously. Progress: timed runs." },
      { name:"Jab Lift", duration:"8 min", desc:"All players simultaneously at their own ball. Jab lift → immediately solo 3 steps → set ball down → repeat. No stopping. Coach walks between players coaching technique." }],
    smallSided:{ format:"Two Games Simultaneously (4v4)", duration:"15 min", rules:"A solo of 3+ consecutive touches before scoring = goal counts double. Rewards controlled solo." }},

  { week:6, rotation:1, theme:"Hand-Passing — Moving the Ball Fast", colour:"#b45309",
    warmup:{ name:"Circle Puck", duration:"8 min", desc:"Groups of 6–8 in circles. Hand-pass around the circle. Must call name before sending. Run 2–3 simultaneous circles. Progress: move the circle while passing." },
    stations:[
      { name:"Hand-Pass Pairs", duration:"8 min", desc:"Pairs 5m apart — hand-pass only. Fist or open palm. Progress: 8m, then 10m. 8–10 simultaneous pairs. Focus: ball must fly cleanly to partner's hands." },
      { name:"Hand-Pass Gates", duration:"8 min", desc:"10–12 small gates in a 20x20 grid. Pairs hand-pass through as many gates as possible in 2 min. All pairs simultaneously. Count gates — try to beat your own score." },
      { name:"Line Passing", duration:"8 min", desc:"Two lines 8m apart. Strike or hand-pass to opposite player and follow to back of their line. 4 simultaneous lanes for 20 players. Continuous flow." }],
    smallSided:{ format:"Hand-Pass Only Game", duration:"15 min", rules:"Hand-pass only. A sequence of 4+ hand-passes before a score = goal counts double. Rewards fast ball movement." }},

  { week:7, rotation:1, theme:"Strike from Hand — Scoring Skills", colour:"#dc2626",
    warmup:{ name:"Puck & Follow", duration:"8 min", desc:"All pairs spread across pitch. Strike from hand to partner and follow your pass. Progress to both doing overhead strikes in the exchange." },
    stations:[
      { name:"Strike from Hand", duration:"8 min", desc:"Player holds ball at waist height in non-dominant hand, drops and strikes. Focus on the drop — let it fall to correct height, don't throw it. Both sides. All players simultaneously with their own target." },
      { name:"Overhead Strike", duration:"8 min", desc:"Toss ball above head and strike overhead. Toss only slightly in front, swing through. Two queues into each goal. Both left and right hand dominance practised." },
      { name:"Score from Hand", duration:"8 min", desc:"Strike from hand into goal from 15–20m — over the bar and into goal. Alternate sides. Two goals, two queues. GKs rotate." }],
    smallSided:{ format:"Score Variety Game", duration:"15 min", rules:"Two simultaneous 4v4 games. Ground stroke = 3 pts, overhead strike = 2 pts, hand-pass score = 1 pt. Rewards skill variety." }},

  { week:8, rotation:1, theme:"Teamwork — Moving Together", colour:"#0891b2",
    warmup:{ name:"Numbers Game", duration:"8 min", desc:"Every player gets a number. Coach calls two numbers — those players puck to each other while others keep soloing in the grid. Forces quick reaction and awareness." },
    stations:[
      { name:"Triangle Pucking", duration:"8 min", desc:"3 players, 8–10m per side. Puck or hand-pass around triangle, change direction on whistle. Progress: add a middle defender. Run 5–7 simultaneous triangles." },
      { name:"Combination Drill", duration:"8 min", desc:"3-player combination: A strikes to B, B catches and hand-passes to C, C solos and shoots. Run 3–4 simultaneous channels. Combines all skills learned so far." },
      { name:"Line Passing", duration:"8 min", desc:"4 teams in relay format. Pass and move — all 4 teams running simultaneously. With 20 players, 4 teams of 5. Introduce: shout player's name before passing." }],
    smallSided:{ format:"World Cup (Round Robin)", duration:"15 min", rules:"4 teams, two simultaneous games. Play full hurling. First to 5 scores wins the pitch. Losers swap pitches, winners stay." }},

  { week:9, rotation:1, theme:"Overhead Catch — Winning the High Ball", colour:"#7c3aed",
    warmup:{ name:"Partner Solo", duration:"8 min", desc:"All pairs spread across pitch. One solos toward partner, partner solos back. Continuous movement. Coach sets challenges: both hands only, faster, head up at all times." },
    stations:[
      { name:"Overhead Catch", duration:"8 min", desc:"One player throws high. Partner jumps to catch with hurley-side arm leading — fingers spread, watch ball into hands. Absorb on contact. Progress: running onto a dropping ball." },
      { name:"Two-Hand Catch (High Ball)", duration:"8 min", desc:"Higher, longer lobs. Receiver must move to position under the ball — read the flight. Both hands high, eyes never leave the ball. 8–10 simultaneous pairs." },
      { name:"Aerial Catch & Strike", duration:"8 min", desc:"One player lobs high, second catches overhead, immediately solos and strikes to a target. Groups of 3 working simultaneously across the pitch." }],
    smallSided:{ format:"Skills Challenge Game", duration:"15 min", rules:"Two simultaneous 4v4 games. Score from a catch = 3 pts, score after a solo = 2 pts, regular score = 1 pt. Rewards the skills of the week." }},

  { week:10, rotation:1, theme:"Blocking & Hooking — Basic Defence", colour:"#475569",
    warmup:{ name:"Chase the Tail (Hurling)", duration:"8 min", desc:"Bibs as tails. Players try to grab others' while soloing or carrying their sliotar. If you drop the ball while grabbing, the tail doesn't count." },
    stations:[
      { name:"Blocking Basics", duration:"8 min", desc:"Pairs 3m apart. One strikes slowly along ground, partner presents hurley flat to block. No stick contact — lead with the body, hurley as extension. Swap roles every 60 sec." },
      { name:"Hooking Intro", duration:"8 min", desc:"Defender approaches from behind striker's hurley arm. Reach around to hook the swing — hook the hurley, don't strike it. Passive pressure first. Run 8–10 simultaneous pairs." },
      { name:"1v1 to Goal", duration:"8 min", desc:"Attacker gets a solo start, tries to score. Defender tries to hook, block, or force wide. 8 simultaneous 1v1 channels across the pitch. GK in goal rotates every 3 min." }],
    smallSided:{ format:"Two Games Simultaneously (4v4)", duration:"15 min", rules:"Normal hurling. Praise any clean block or hook out loud across both pitches. Defenders earn a point for their team for a successful block or hook." }},

  { week:11, rotation:1, theme:"Shooting — Scoring from All Angles", colour:"#dc2626",
    warmup:{ name:"Shooting Gallery Queue", duration:"8 min", desc:"Two goals, two queues. Players cycle through strikes. GK in each goal. Vary: from the left, from the right, central. Just reps — feel of shooting." },
    stations:[
      { name:"Shooting Circuit", duration:"8 min", desc:"3 shooting stations around one goal: left, centre, right. Players rotate. GK in goal and rotates. 3 strikes per player per station — both ground and overhead." },
      { name:"Shooting (Multi-Angle)", duration:"8 min", desc:"Cones at different angles and distances. Players strike from each. Mix ground strokes and strikes from hand. Two goals, two queues. GKs rotate every 3 min." },
      { name:"Score from Hand", duration:"8 min", desc:"Strike from hand into goal from 15–20m — over the bar and into goal. Alternate left and right approach. Two goals, two queues. Count scores per player." }],
    smallSided:{ format:"Attack vs Defence (Waves)", duration:"15 min", rules:"Waves of 3 attackers vs 2 defenders attacking goal. Score or defend, rotate immediately. Coaches manage waves." }},

  { week:12, rotation:1, theme:"Decision Making — When to Solo, Pass, or Strike", colour:"#b45309",
    warmup:{ name:"Numbers Game", duration:"8 min", desc:"Players solo in grid. Coach calls a number — that player must immediately hand-pass to the nearest teammate and sprint to a cone. Others keep soloing." },
    stations:[
      { name:"Solo & Shoot", duration:"8 min", desc:"Players solo from 25m and shoot. Two simultaneous lanes each side of goal. Emphasis: when do you stop and shoot vs. get closer? Coach asks after each go." },
      { name:"Combination Drill", duration:"8 min", desc:"3-player combination: A solos forward, reads: pass to B if defender covers, or solo and shoot if clear. Live defender added after 4 reps. Decision-making under pressure." },
      { name:"1v1 to Goal", duration:"8 min", desc:"Attacker receives ball 20m from goal. Must decide: solo closer to score, hand-pass to support player, or strike first time. Defender half-pace. 8 simultaneous channels." }],
    smallSided:{ format:"World Cup (Round Robin)", duration:"15 min", rules:"After each score, ask the scorer: 'What did you see before you scored?' Normalise thinking about the game. Normal hurling rules." }},

  { week:13, rotation:1, theme:"Goalkeeper Basics", colour:"#7c3aed",
    warmup:{ name:"Shooting Gallery Queue", duration:"8 min", desc:"Two goals, two queues. Everyone gets 3 ground strikes at goal. GK in each. Focus today: all players experience being in goal. Rotate GKs every 90 sec." },
    stations:[
      { name:"Ground Strike (Rolling Ball)", duration:"8 min", desc:"Teach GK ready stance at both goals simultaneously. All players rotate into goal: feet wide, weight forward, hurley ready. Roll shots — GK scoops with hurley." },
      { name:"Overhead Catch", duration:"8 min", desc:"GK catches high balls and distributes by hand-pass or ground strike. Outfield players throw in from different angles. All players rotate into goal. Catch and clear." },
      { name:"Score from Hand", duration:"8 min", desc:"GK puck-out practice. Teach: ball off ground, lofted strike for distance. All players take turns as GK doing puck-outs. Count distance achieved." }],
    smallSided:{ format:"Two Games Simultaneously (4v4)", duration:"15 min", rules:"Rotate GKs every 3 minutes across both pitches so all experience the position." }},

  { week:14, rotation:1, theme:"Communication & Support Play", colour:"#0891b2",
    warmup:{ name:"Circle Puck", duration:"8 min", desc:"3 circles of 6–7 running simultaneously. Must call player's name before passing. Add: defender in middle after 3 min. Circle must keep calling." },
    stations:[
      { name:"Triangle Pucking", duration:"8 min", desc:"5–7 triangles simultaneously. Receiver must call 'mine!' before ball arrives. Third player calls their own name to ask for the pass. Loud communication required." },
      { name:"Combination Drill", duration:"8 min", desc:"3-player combination — but player A must shout B's name before passing. B shouts 'turn!' or 'man on!' to help A. C calls their own name to offer a target." },
      { name:"Backs & Forwards", duration:"8 min", desc:"Defender must call 'I've got him!' to claim responsibility for marking. Attacker shouts for the ball. 8 simultaneous pairs — noise is the point." }],
    smallSided:{ format:"Possession Game (4v4 + neutrals)", duration:"15 min", rules:"4v4 with 2 neutral players on team in possession. Award a team point every time a player communicates something clearly useful. Loud teams win points." }},

  { week:15, rotation:1, theme:"Set Pieces — Frees, Sidelines & 65s", colour:"#b45309",
    warmup:{ name:"Shooting Gallery Queue", duration:"8 min", desc:"Each player gets 3 free pucks from different positions outside the D. Two goals, two queues. GK in each. Just the feel of a set piece." },
    stations:[
      { name:"Free Puck Practice", duration:"8 min", desc:"Players take free pucks from marked positions outside the D — left, right, centre. Over the bar and into goal. Both ground and strike from hand. Two goals, two queues." },
      { name:"Sideline Cut", duration:"8 min", desc:"Ball on sideline. Player practises the sideline cut — strike from the ground along the sideline. Both sides. Low trajectory. Set up 4 simultaneous sideline stations." },
      { name:"65m Puck", duration:"8 min", desc:"GK takes the 65. Teach: ball off ground, lofted strike for distance. All players take turns — who can reach the 65m line? Fun distance challenge." }],
    smallSided:{ format:"Tournament (3v3, 4 teams)", duration:"15 min", rules:"When fouls or ball out of play occur naturally, set the restart up properly as a learning moment. Praise correct positioning and execution." }},

  { week:16, rotation:1, theme:"Festival Week — Play, Review & Celebrate", colour:"#16a34a",
    warmup:{ name:"Numbers Game", duration:"8 min", desc:"Players vote on their favourite warm-up from the past 15 weeks — then run it themselves with minimal coach input as a squad." },
    stations:[
      { name:"Jab Lift", duration:"8 min", desc:"Each player picks one skill from the programme to demonstrate to the group. Celebrate confidence, not perfection. Everyone gets a moment." },
      { name:"Solo Slalom", duration:"8 min", desc:"Group votes on their favourite drill. Run it again — players lead it. Coach steps back. See what's resonated most." },
      { name:"Shooting Circuit", duration:"8 min", desc:"Coach(es) vs players in a scoring challenge — coaches use non-dominant hand only. Kids love the reversal. Classic session closer." }],
    smallSided:{ format:"Players vs Coaches", duration:"15 min", rules:"All players vs coaches. Coaches non-dominant hand only. Players win by default at 5 scores. End with team huddle and shout." }},

  // ── ROTATION 2 ──────────────────────────────────────────────────────
  { week:1, rotation:2, theme:"Ball Mastery — More Control, More Confidence", colour:"#16a34a",
    warmup:{ name:"Partner Solo", duration:"8 min", desc:"Two circles. Players take turns in centre demonstrating any skill — solo, trick, catch. Others cheer. Sets the tone: experimental, positive." },
    stations:[
      { name:"Jab Lift", duration:"8 min", desc:"Every player simultaneously. Now challenge: jab lift → solo 5 steps → set down → jab lift again without stopping. Build a continuous rhythm." },
      { name:"Solo Lane", duration:"8 min", desc:"6 lanes. Lane 1: dominant hand. Lane 2: non-dominant. Lane 3: alternate hands. Players rotate. Count consecutive solos per lane." },
      { name:"Solo Slalom", duration:"8 min", desc:"5–6 lanes. Introduce the side step while soloing — dodge a cone as if dodging a defender. Finish each run with a ground strike at a target." }],
    smallSided:{ format:"Skills Challenge Game", duration:"15 min", rules:"Two simultaneous 4v4 games. Score from a catch = 3 pts, score after a solo = 2 pts, regular score = 1 pt." }},

  { week:2, rotation:2, theme:"Catching Under Pressure", colour:"#059669",
    warmup:{ name:"Chase the Tail (Hurling)", duration:"8 min", desc:"Team chase — 3 teams with different bib colours. Collect only your team's tails. Must keep control of sliotar while chasing. Great for 18–24 players." },
    stations:[
      { name:"Overhead Catch", duration:"8 min", desc:"Contested catching: two players go for the same lob from a feeder. Shoulder-to-shoulder contest — safe, controlled. Catch with two hands, protect the ball." },
      { name:"Two-Hand Catch (High Ball)", duration:"8 min", desc:"Longer, faster deliveries now. Receiver under pressure from a 'shadow' defender — not fully contesting, just close. Read the ball under pressure." },
      { name:"Aerial Catch & Strike", duration:"8 min", desc:"Increase the competition: 2v1 for the high ball. Feeder sends in, 2 players contest, winner immediately solos and strikes. Loser becomes defender next round." }],
    smallSided:{ format:"World Cup (Round Robin)", duration:"15 min", rules:"A caught ball before scoring = 3 pts. Scored from ground = 1 pt. Rewards catching under pressure." }},

  { week:3, rotation:2, theme:"Striking — Speed & Accuracy", colour:"#dc2626",
    warmup:{ name:"Shooting Gallery Queue", duration:"8 min", desc:"Two goals, players in two queues cycling through strikes — left, right, central. GKs rotate every 90 sec. Building up the feel." },
    stations:[
      { name:"Puck Wall Targets", duration:"8 min", desc:"Numbered targets on a wall. Coach calls a number — player must hit it. Both ground and overhead strikes. 4–5 simultaneous walls across the pitch." },
      { name:"Shooting (Multi-Angle)", duration:"8 min", desc:"Strike from cones at different angles: 30m out left, 20m right, 15m central. Mix ground and overhead. Two goals, two queues. Fastest time to hit all 6 cones wins." },
      { name:"Score from Hand", duration:"8 min", desc:"Strike from hand at pace — player receives ball at a run and strikes without stopping. Simulates game scenario. 1v0 first, then light shadow defender." }],
    smallSided:{ format:"Score Variety Game", duration:"15 min", rules:"Two simultaneous 4v4 games. Ground stroke = 3 pts, overhead strike = 2 pts, hand-pass score = 1 pt. Rewards all striking techniques." }},

  { week:4, rotation:2, theme:"Solo & Pass Combinations", colour:"#b45309",
    warmup:{ name:"Puck & Follow", duration:"8 min", desc:"All pairs. Strike to partner and follow your pass. Now add: receiver must solo 3 steps before returning the ball. Builds pass → receive → solo sequence." },
    stations:[
      { name:"Combination Drill", duration:"8 min", desc:"3-player combination at pace. A solos forward, hand-passes to B running a support line, B catches and strikes to goal. Run 4 simultaneous channels." },
      { name:"Backs & Forwards", duration:"8 min", desc:"Forward solos toward defender. Must solo at least twice before deciding: pass around or shoot. Defender at half-pace. 8 simultaneous 1v1 channels." },
      { name:"Solo & Shoot", duration:"8 min", desc:"Solo from 25m mark to 15m mark then shoot — both overhead and ground. Two simultaneous lanes each side of goal. GK in goal." }],
    smallSided:{ format:"Touch Count Game", duration:"15 min", rules:"Two simultaneous 4v4 games. Max 4 steps before pass or strike. Rewards solo under control and quick release." }},

  { week:5, rotation:2, theme:"Width & Teamwork — Using the Pitch", colour:"#0891b2",
    warmup:{ name:"Numbers Game", duration:"8 min", desc:"Every player gets a number. Coach calls a number — that player must dribble to a wide channel. Others keep soloing centrally. Instinct to go wide." },
    stations:[
      { name:"Line Passing", duration:"8 min", desc:"4 teams across the full width of the pitch. Pass and move — every player must use the wide channels at some point. Switch from left to right through a chain of passes." },
      { name:"Triangle Pucking", duration:"8 min", desc:"Wider triangles — 15m per side. One player wide on each side. Puck across the full triangle. Emphasise: hit the wide man early." },
      { name:"Combination Drill", duration:"8 min", desc:"4-player combination: A solos forward, hand-passes wide to B, B runs byline, hand-passes inside to C who strikes to goal. Both sides simultaneously." }],
    smallSided:{ format:"Backs & Forwards (6v6)", duration:"15 min", rules:"Wide pitch. Goals from wide deliveries count double. Encourages using the full width." }},

  { week:6, rotation:2, theme:"Defending — Pressure & Positioning", colour:"#475569",
    warmup:{ name:"Team Chase", duration:"8 min", desc:"3 teams with different bib colours. Collect only your team's tails. Players must keep control of sliotar while chasing. Sprinting, closing down." },
    stations:[
      { name:"Blocking Basics", duration:"8 min", desc:"More pressure now: attacker approaches at a jog, defender must time their block. Not passive — attacker tries to get the strike away. Teach: wait for the right moment." },
      { name:"Hooking Intro", duration:"8 min", desc:"Full hooking practice with movement: defender pursues attacker who is soloing, tries to hook when in range. 8 simultaneous channels. Rotate attacker/defender every 3 turns." },
      { name:"1v1 to Goal", duration:"8 min", desc:"Full 1v1. Attacker from 25m, defender must tackle or force wide. 8 simultaneous channels. Defender wins if they force a wide or get a hook/block. Count both team's successes." }],
    smallSided:{ format:"Two Games Simultaneously (4v4)", duration:"15 min", rules:"Defending team earns a bonus point for winning the ball back within 3 seconds. Rewards immediate pressure." }},

  { week:7, rotation:2, theme:"Transition — Turning Defence into Attack", colour:"#16a34a",
    warmup:{ name:"Solo Relay", duration:"8 min", desc:"4 relay teams. Must solo at least twice during their run. When they reach the cone, the team switches from attacking to defending instantly. Fast tempo." },
    stations:[
      { name:"Combination Drill", duration:"8 min", desc:"Defender clears ball to attacker who immediately solos and counter-attacks. Emphasis: don't celebrate the clearance — go immediately." },
      { name:"Backs & Forwards", duration:"8 min", desc:"When the forward is stopped, they immediately become a defender for the next wave. When defender wins ball, they immediately attack the other goal." },
      { name:"Solo & Shoot", duration:"8 min", desc:"GK puck-out to a forward who must turn from receiving and attack immediately. Defender chasing from behind. Who can score within 5 seconds?" }],
    smallSided:{ format:"Transition Blitz", duration:"15 min", rules:"6v6. Score within 5 sec of winning possession = golden score (3 pts). Teaches immediate transition from defence to attack." }},

  { week:8, rotation:2, theme:"Reading the Game — What Do You See?", colour:"#0891b2",
    warmup:{ name:"Partner Solo", duration:"8 min", desc:"All pairs soloing across the pitch. Coach blows whistle — all freeze. Coach points to one player: 'Where would you pass right now?' Builds game-reading habit." },
    stations:[
      { name:"1v1 to Goal", duration:"8 min", desc:"Before each attempt, coach asks the attacker: 'What's your plan?' Must name it (solo and shoot / hand-pass to support / dummy). Then attempt it." },
      { name:"Triangle Pucking", duration:"8 min", desc:"5–7 triangles. Before each pass, player must say out loud: 'I see [name] open' or 'I'm going left.' Forces verbalising game reading." },
      { name:"Combination Drill", duration:"8 min", desc:"Show 3 different picture scenarios (draw on whiteboard). Ask group: 'What would you do in each?' 2 min discussion, then live reps of each scenario." }],
    smallSided:{ format:"World Cup (Round Robin)", duration:"15 min", rules:"After each score, ask the scorer: 'What did you see before you scored?' Normalise thinking about the game." }},

  { week:9, rotation:2, theme:"Shooting — Pressure & Timing", colour:"#dc2626",
    warmup:{ name:"Shooting Gallery Queue", duration:"8 min", desc:"Two goals, two queues. Faster pace — no waiting. GKs rotate every 90 sec. Both ground and overhead." },
    stations:[
      { name:"Shooting Circuit", duration:"8 min", desc:"3 stations around goal with a defender at each. Attacker must get a shot away despite pressure. Defender starts 3m away. Builds composure in shooting." },
      { name:"Score from Hand", duration:"8 min", desc:"Player receives a pass at the run and must shoot first touch. No setting up — direct from the hand or off the catch. Two queues, two goals." },
      { name:"Solo & Shoot", duration:"8 min", desc:"Solo from 30m. Must shoot before defender (who starts 10m away) gets within 2m. Count scores vs attempts. Both ground and hand strikes." }],
    smallSided:{ format:"Attack vs Defence (Waves)", duration:"15 min", rules:"3 attackers vs 2 defenders. Score from a first-time strike = 3 pts. Rewards taking the shot quickly." }},

  { week:10, rotation:2, theme:"All Skills Combined — Small Games", colour:"#16a34a",
    warmup:{ name:"Numbers Game", duration:"8 min", desc:"Players solo in grid. Coach calls two numbers — those players compete: first to solo to a cone and back, hand-pass to each other 5 times. Others keep going." },
    stations:[
      { name:"Combination Drill", duration:"8 min", desc:"Full 4-player combination: A solos, passes wide to B, B catches, hand-passes inside to C, C solos and shoots. All four in motion. Run 3–4 channels simultaneously." },
      { name:"Aerial Catch & Strike", duration:"8 min", desc:"2v2 for a high ball. One player from each pair tries to catch. Winner immediately attacks with their partner — 2v1. Loser pair becomes defenders." },
      { name:"1v1 to Goal", duration:"8 min", desc:"Combine it all: attacker can use any skill — solo, shoot, hand-pass to support. Defender can hook, block, or chase. Closest thing to match scenario." }],
    smallSided:{ format:"Tournament (3v3, 4 teams)", duration:"15 min", rules:"4 teams, two simultaneous games. League table. Full hurling rules — no restrictions. Let them play." }},

  { week:11, rotation:2, theme:"Set Pieces — Becoming Clinical", colour:"#b45309",
    warmup:{ name:"Shooting Gallery Queue", duration:"8 min", desc:"Each player gets 3 free pucks from positions outside the D. Two goals, two queues. Left, right, central." },
    stations:[
      { name:"Free Puck Practice", duration:"8 min", desc:"Players take free pucks from marked positions. Now add a GK. Over the bar and into goal. Count success rate — can you beat last session's score?" },
      { name:"Sideline Cut", duration:"8 min", desc:"Full sideline cut practice with a GK in position. Which player can be most consistent? Add light defensive pressure — one player 2m away." },
      { name:"65m Puck", duration:"8 min", desc:"GK puck-out competition: who clears the furthest? Measure in zones. Both full puck-out from hand and ball off ground. All players rotate into goal." }],
    smallSided:{ format:"Tournament (3v3, 4 teams)", duration:"15 min", rules:"When set pieces occur in the game, stop and execute them properly. Praise teams who set up quickly and accurately." }},

  { week:12, rotation:2, theme:"Creativity & Skill Expression", colour:"#7c3aed",
    warmup:{ name:"Partner Solo", duration:"8 min", desc:"Two large circles. Every 30 sec, coach says 'show me something!' — each player in the centre attempts any skill or trick. No critique, only encouragement." },
    stations:[
      { name:"Solo Slalom", duration:"8 min", desc:"6 lanes. Each lane asks for a different trick between cones: dummy solo, side-step, 360 spin (if they can!). Players pick their own challenge at station 3." },
      { name:"Score from Hand", duration:"8 min", desc:"Players invent their own approach: choose your angle, choose your method. No restrictions. Just get the ball over the bar or into the net. Celebrate invention." },
      { name:"Combination Drill", duration:"8 min", desc:"3 players design their own combination. Must include a catch, a solo, and a strike. Coach watches 4 channels. Debrief: which combo worked best and why?" }],
    smallSided:{ format:"Players vs Coaches", duration:"15 min", rules:"Players decide any extra rules. Coach awards a 'skill point' out loud whenever something inventive and technical happens." }},

  { week:13, rotation:2, theme:"Fitness Through Hurling — Speed & Agility", colour:"#059669",
    warmup:{ name:"Relay Races (Hurling)", duration:"8 min", desc:"4 teams of 4–6. Run 4 relay lanes simultaneously. Solo to cone and back, tag next player. Vary: ground carry, solo, hand-carry. Fast-paced, competitive." },
    stations:[
      { name:"Solo Lane", duration:"8 min", desc:"6 lanes with speed ladders or painted lines at start. High knees, quick feet through ladder, then solo the full lane. Fitness + technique combined." },
      { name:"1v1 to Goal", duration:"8 min", desc:"Sprint start — attacker and defender both sprint 5m before the ball is released. First to control it is the attacker. Fast, intense, develops reactive agility." },
      { name:"Ground Stroke Relay", duration:"8 min", desc:"4 simultaneous relay teams. Must strike ball along ground to cone target, run to collect, strike back. Pure athletic relay with a skill focus." }],
    smallSided:{ format:"Transition Blitz", duration:"15 min", rules:"6v6 on a big pitch. Sub rotation every 3 min. Normal rules. The larger pitch emphasises fitness." }},

  { week:14, rotation:2, theme:"Team Identity — Our Style of Play", colour:"#16a34a",
    warmup:{ name:"Team Chase", duration:"8 min", desc:"Players design their own warm-up as a group. Coach facilitates — kids lead. 2 min to agree, 6 to run it. Builds ownership and confidence." },
    stations:[
      { name:"Combination Drill", duration:"8 min", desc:"The team designs their own puck-out plan. Where does the GK aim? Who runs where? Who's the target? Practise until the movement is automatic." },
      { name:"Free Puck Practice", duration:"8 min", desc:"Revisit free pucks. Now the team designs set-up positions — who stands where, who's the target for short frees. Practise 5 reps of each scenario." },
      { name:"Triangle Pucking", duration:"8 min", desc:"Seated circle: 'What are we good at? What do we want to improve?' Coach listens and facilitates. Builds team identity. Short — 5 min max." }],
    smallSided:{ format:"Backs & Forwards (6v6)", duration:"15 min", rules:"Use the puck-out plan they designed. Backs and forwards play their designated roles. Coach steps back." }},

  { week:15, rotation:2, theme:"Match Preparation — Putting It All Together", colour:"#dc2626",
    warmup:{ name:"Puck & Follow", duration:"8 min", desc:"All pairs. Strike at match pace — no warm-up pace. Follow your pass. Catch and return. 8 min of live, sharp ball movement." },
    stations:[
      { name:"Shooting Circuit", duration:"8 min", desc:"Match simulation shooting: player receives a pass from a teammate and shoots first time. GK in goal. No setting up — simulates a real scoring chance." },
      { name:"1v1 to Goal", duration:"8 min", desc:"Full 1v1 at match intensity. Both attacker and defender going 100%. 8 channels. Match scenario: ball comes in from puck-out, 1v1 decides possession." },
      { name:"Combination Drill", duration:"8 min", desc:"5-player match scenario: puck-out from GK, forward wins it, hand-passes to support, shot at goal — all at match tempo. Reset and go again. 4 channels." }],
    smallSided:{ format:"Tournament (3v3, 4 teams)", duration:"15 min", rules:"Full hurling — no rule restrictions. Closest to match conditions. Rotate teams to expose players to different opponents." }},

  { week:16, rotation:2, theme:"End of Programme — Celebration & Looking Forward", colour:"#16a34a",
    warmup:{ name:"Numbers Game", duration:"8 min", desc:"Coach calls drills from across the year at random — 45 sec each. Traffic Lights, Chase the Tail, Circle Puck… Greatest hits of 32 weeks." },
    stations:[
      { name:"Jab Lift", duration:"8 min", desc:"Call players over in small groups for a 30-sec personal shout-out: one thing improved most this year. Genuine and specific. Others keep drilling." },
      { name:"Shooting Circuit", duration:"8 min", desc:"Each player picks their 'dream score' scenario: choose angle, choose method, tell coach how it arrives. Celebrate every attempt regardless of outcome." },
      { name:"Score from Hand", duration:"8 min", desc:"Free puck competition. Everyone takes 3 frees. GKs rotate. Final one of the year — make it dramatic. Count total team scores." }],
    smallSided:{ format:"Players vs Coaches", duration:"15 min", rules:"All players vs coaches. Coaches non-dominant hand only. Players win by default at 5 scores. Team photo, huddle, and celebration to close the season." }},
];
