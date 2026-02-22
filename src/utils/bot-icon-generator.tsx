/**
 * Generates custom SVG icons for bots based on their names
 * Theme: Ghost Rider & Iron Man inspired designs with animations
 */
export const getBotIcon = (botName: string): JSX.Element => {
    const name = botName.toLowerCase();

    // CFX Even/Odd Bot - Ghost Rider Skull with Flames
    if (name.includes('cfx') || name.includes('even') || name.includes('odd')) {
        return (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" fill="url(#cfxBg)" />
                <path className="flame-primary" d="M32 8 Q28 15 30 22 Q26 18 24 24 Q22 30 26 34 Q24 28 28 32 Q30 38 32 42 Q34 38 36 32 Q40 28 38 34 Q42 30 40 24 Q38 18 34 22 Q36 15 32 8Z" fill="url(#flame1)" opacity="0.8" />
                <path className="flame-secondary" d="M32 8 Q36 15 34 22 Q38 18 40 24 Q42 30 38 34 Q40 28 36 32 Q34 38 32 42 Q30 38 28 32 Q24 28 26 34 Q22 30 24 24 Q26 18 30 22 Q28 15 32 8Z" fill="url(#flame2)" opacity="0.6" />
                <ellipse cx="32" cy="28" rx="12" ry="14" fill="#1a1a1a" stroke="#ff6600" strokeWidth="1.5" />
                <ellipse className="skull-eye" cx="27" cy="26" rx="3" ry="4" fill="#ff3300" />
                <ellipse className="skull-eye" cx="37" cy="26" rx="3" ry="4" fill="#ff3300" />
                <circle cx="27" cy="25" r="1.5" fill="#ffff00" />
                <circle cx="37" cy="25" r="1.5" fill="#ffff00" />
                <path d="M32 30 L30 34 L34 34 Z" fill="#000" />
                <path d="M24 36 Q32 40 40 36" stroke="#ff6600" strokeWidth="2" fill="none" />
                <line x1="28" y1="36" x2="28" y2="39" stroke="#ff3300" strokeWidth="1" />
                <line x1="32" y1="36" x2="32" y2="40" stroke="#ff3300" strokeWidth="1" />
                <line x1="36" y1="36" x2="36" y2="39" stroke="#ff3300" strokeWidth="1" />
                <circle className="chain-link" cx="18" cy="32" r="3" stroke="#888" strokeWidth="1.5" fill="none" />
                <circle className="chain-link" cx="46" cy="32" r="3" stroke="#888" strokeWidth="1.5" fill="none" />
                <defs>
                    <linearGradient id="cfxBg" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#1a1a1a" />
                        <stop offset="100%" stopColor="#2d2d2d" />
                    </linearGradient>
                    <linearGradient id="flame1" x1="32" y1="8" x2="32" y2="42">
                        <stop offset="0%" stopColor="#ff6600" />
                        <stop offset="50%" stopColor="#ff3300" />
                        <stop offset="100%" stopColor="#cc0000" />
                    </linearGradient>
                    <linearGradient id="flame2" x1="32" y1="8" x2="32" y2="42">
                        <stop offset="0%" stopColor="#ffaa00" />
                        <stop offset="50%" stopColor="#ff6600" />
                        <stop offset="100%" stopColor="#ff3300" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    // Zeus-related bots - Iron Man Arc Reactor
    if (name.includes('zeus')) {
        return (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" fill="url(#zeusBg)" />
                <circle className="arc-ring" cx="32" cy="32" r="20" stroke="url(#arcGlow)" strokeWidth="2" fill="none" opacity="0.6" />
                <circle className="arc-ring" cx="32" cy="32" r="16" stroke="url(#arcGlow)" strokeWidth="1.5" fill="none" opacity="0.8" style={{animationDelay: '0.5s'}} />
                <circle className="arc-core" cx="32" cy="32" r="12" fill="url(#arcCore)" />
                <line className="energy-ray" x1="32" y1="20" x2="32" y2="12" stroke="#00d9ff" strokeWidth="2" opacity="0.8" />
                <line className="energy-ray" x1="32" y1="44" x2="32" y2="52" stroke="#00d9ff" strokeWidth="2" opacity="0.8" style={{animationDelay: '0.2s'}} />
                <line className="energy-ray" x1="20" y1="32" x2="12" y2="32" stroke="#00d9ff" strokeWidth="2" opacity="0.8" style={{animationDelay: '0.4s'}} />
                <line className="energy-ray" x1="44" y1="32" x2="52" y2="32" stroke="#00d9ff" strokeWidth="2" opacity="0.8" style={{animationDelay: '0.6s'}} />
                <line className="energy-ray" x1="23" y1="23" x2="17" y2="17" stroke="#00d9ff" strokeWidth="1.5" opacity="0.6" style={{animationDelay: '0.1s'}} />
                <line className="energy-ray" x1="41" y1="41" x2="47" y2="47" stroke="#00d9ff" strokeWidth="1.5" opacity="0.6" style={{animationDelay: '0.3s'}} />
                <line className="energy-ray" x1="41" y1="23" x2="47" y2="17" stroke="#00d9ff" strokeWidth="1.5" opacity="0.6" style={{animationDelay: '0.5s'}} />
                <line className="energy-ray" x1="23" y1="41" x2="17" y2="47" stroke="#00d9ff" strokeWidth="1.5" opacity="0.6" style={{animationDelay: '0.7s'}} />
                <path d="M32 26 L38 32 L32 38 L26 32 Z" fill="none" stroke="#ffffff" strokeWidth="2" />
                <circle className="arc-core" cx="32" cy="32" r="4" fill="#ffffff" opacity="0.9" />
                <circle cx="32" cy="32" r="2" fill="#00d9ff" />
                <defs>
                    <linearGradient id="zeusBg" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#1a1a2e" />
                        <stop offset="100%" stopColor="#0f0f1e" />
                    </linearGradient>
                    <linearGradient id="arcGlow" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#00d9ff" />
                        <stop offset="50%" stopColor="#0099cc" />
                        <stop offset="100%" stopColor="#00d9ff" />
                    </linearGradient>
                    <linearGradient id="arcCore" x1="32" y1="20" x2="32" y2="44">
                        <stop offset="0%" stopColor="#00ffff" />
                        <stop offset="50%" stopColor="#00aaff" />
                        <stop offset="100%" stopColor="#0066cc" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    // States Digit Switcher - Iron Man Helmet
    if (name.includes('states') && name.includes('digit')) {
        return (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="56" height="56" rx="8" fill="url(#statesBg)" />
                <path d="M32 12 Q20 12 16 24 Q14 32 16 40 Q18 48 32 52 Q46 48 48 40 Q50 32 48 24 Q44 12 32 12 Z" fill="url(#helmetGold)" stroke="#ffd700" strokeWidth="1.5" />
                <rect x="24" y="24" width="16" height="16" rx="2" fill="#1a1a1a" />
                <rect className="helmet-eye" x="26" y="28" width="5" height="3" rx="1" fill="#00d9ff" />
                <rect className="helmet-eye" x="33" y="28" width="5" height="3" rx="1" fill="#00d9ff" style={{animationDelay: '0.2s'}} />
                <rect className="helmet-eye" x="28" y="36" width="8" height="2" rx="1" fill="#00d9ff" opacity="0.6" style={{animationDelay: '0.4s'}} />
                <path className="energy-particle" d="M20 20 L24 24" stroke="#ffd700" strokeWidth="1" />
                <path className="energy-particle" d="M44 20 L40 24" stroke="#ffd700" strokeWidth="1" style={{animationDelay: '0.3s'}} />
                <path className="energy-particle" d="M20 44 L24 40" stroke="#ffd700" strokeWidth="1" style={{animationDelay: '0.6s'}} />
                <path className="energy-particle" d="M44 44 L40 40" stroke="#ffd700" strokeWidth="1" style={{animationDelay: '0.9s'}} />
                <defs>
                    <linearGradient id="statesBg" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#1a1a2e" />
                        <stop offset="100%" stopColor="#0f0f1e" />
                    </linearGradient>
                    <linearGradient id="helmetGold" x1="32" y1="12" x2="32" y2="52">
                        <stop offset="0%" stopColor="#ffd700" />
                        <stop offset="50%" stopColor="#cc9900" />
                        <stop offset="100%" stopColor="#996600" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    // Over-related bots - Ghost Rider Flames Rising
    if (name.includes('over') && !name.includes('under')) {
        return (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" fill="url(#overBg)" />
                <path className="flame-up" d="M32 48 Q28 42 30 36 Q26 38 28 32 Q26 28 30 24 Q28 26 32 20 Q36 26 34 24 Q38 28 36 32 Q38 38 34 36 Q36 42 32 48 Z" fill="url(#flameUp1)" />
                <path className="flame-up" d="M24 52 Q22 48 24 44 Q22 44 24 40 Q26 36 28 38 Q26 42 24 52 Z" fill="url(#flameUp2)" opacity="0.8" style={{animationDelay: '0.3s'}} />
                <path className="flame-up" d="M40 52 Q42 48 40 44 Q42 44 40 40 Q38 36 36 38 Q38 42 40 52 Z" fill="url(#flameUp2)" opacity="0.8" style={{animationDelay: '0.6s'}} />
                <path d="M32 28 L32 44 M24 36 L32 28 L40 36" stroke="#ffff00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id="overBg" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#1a0a00" />
                        <stop offset="100%" stopColor="#2d1a0a" />
                    </linearGradient>
                    <linearGradient id="flameUp1" x1="32" y1="48" x2="32" y2="20">
                        <stop offset="0%" stopColor="#ff3300" />
                        <stop offset="50%" stopColor="#ff6600" />
                        <stop offset="100%" stopColor="#ffaa00" />
                    </linearGradient>
                    <linearGradient id="flameUp2" x1="0" y1="52" x2="0" y2="36">
                        <stop offset="0%" stopColor="#ff6600" />
                        <stop offset="100%" stopColor="#ffaa00" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    // Under-related bots - Ghost Rider Flames Falling
    if (name.includes('under')) {
        return (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" fill="url(#underBg)" />
                <path className="flame-down" d="M32 16 Q28 22 30 28 Q26 26 28 32 Q26 36 30 40 Q28 38 32 44 Q36 38 34 40 Q38 36 36 32 Q38 26 34 28 Q36 22 32 16 Z" fill="url(#flameDown1)" />
                <path className="flame-down" d="M24 12 Q22 16 24 20 Q22 20 24 24 Q26 28 28 26 Q26 22 24 12 Z" fill="url(#flameDown2)" opacity="0.8" style={{animationDelay: '0.3s'}} />
                <path className="flame-down" d="M40 12 Q42 16 40 20 Q42 20 40 24 Q38 28 36 26 Q38 22 40 12 Z" fill="url(#flameDown2)" opacity="0.8" style={{animationDelay: '0.6s'}} />
                <path d="M32 20 L32 36 M24 28 L32 36 L40 28" stroke="#ffff00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id="underBg" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#1a0a00" />
                        <stop offset="100%" stopColor="#2d1a0a" />
                    </linearGradient>
                    <linearGradient id="flameDown1" x1="32" y1="16" x2="32" y2="44">
                        <stop offset="0%" stopColor="#ffaa00" />
                        <stop offset="50%" stopColor="#ff6600" />
                        <stop offset="100%" stopColor="#ff3300" />
                    </linearGradient>
                    <linearGradient id="flameDown2" x1="0" y1="12" x2="0" y2="28">
                        <stop offset="0%" stopColor="#ffaa00" />
                        <stop offset="100%" stopColor="#ff6600" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    // PATEL bot - Iron Man Repulsor Blast
    if (name.includes('patel')) {
        return (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="56" height="56" rx="12" fill="url(#patelBg)" />
                <circle className="repulsor-core" cx="32" cy="32" r="10" fill="url(#repulsorCore)" />
                <circle className="arc-ring" cx="32" cy="32" r="14" stroke="#00d9ff" strokeWidth="2" fill="none" opacity="0.6" />
                <circle className="arc-ring" cx="32" cy="32" r="18" stroke="#00d9ff" strokeWidth="1" fill="none" opacity="0.3" style={{animationDelay: '0.5s'}} />
                <path className="repulsor-ray" d="M32 32 L32 8" stroke="#00ffff" strokeWidth="3" opacity="0.8" />
                <path className="repulsor-ray" d="M32 32 L32 56" stroke="#00ffff" strokeWidth="3" opacity="0.8" style={{animationDelay: '0.2s'}} />
                <path className="repulsor-ray" d="M32 32 L8 32" stroke="#00ffff" strokeWidth="3" opacity="0.8" style={{animationDelay: '0.4s'}} />
                <path className="repulsor-ray" d="M32 32 L56 32" stroke="#00ffff" strokeWidth="3" opacity="0.8" style={{animationDelay: '0.6s'}} />
                <path className="repulsor-ray" d="M32 32 L14 14" stroke="#00d9ff" strokeWidth="2" opacity="0.6" style={{animationDelay: '0.1s'}} />
                <path className="repulsor-ray" d="M32 32 L50 50" stroke="#00d9ff" strokeWidth="2" opacity="0.6" style={{animationDelay: '0.3s'}} />
                <path className="repulsor-ray" d="M32 32 L50 14" stroke="#00d9ff" strokeWidth="2" opacity="0.6" style={{animationDelay: '0.5s'}} />
                <path className="repulsor-ray" d="M32 32 L14 50" stroke="#00d9ff" strokeWidth="2" opacity="0.6" style={{animationDelay: '0.7s'}} />
                <circle cx="32" cy="32" r="5" fill="#ffffff" />
                <defs>
                    <linearGradient id="patelBg" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#1a1a2e" />
                        <stop offset="100%" stopColor="#0f0f1e" />
                    </linearGradient>
                    <radialGradient id="repulsorCore">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="40%" stopColor="#00ffff" />
                        <stop offset="100%" stopColor="#0099cc" />
                    </radialGradient>
                </defs>
            </svg>
        );
    }

    // Raziel Over Under - Ghost Rider Chain Whip
    if (name.includes('raziel')) {
        return (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" fill="url(#razielBg)" />
                <circle className="chain-link" cx="16" cy="20" r="4" stroke="#888" strokeWidth="2" fill="none" />
                <circle className="chain-link" cx="24" cy="26" r="4" stroke="#888" strokeWidth="2" fill="none" style={{animationDelay: '0.2s'}} />
                <circle className="chain-link" cx="32" cy="32" r="4" stroke="#888" strokeWidth="2" fill="none" style={{animationDelay: '0.4s'}} />
                <circle className="chain-link" cx="40" cy="38" r="4" stroke="#888" strokeWidth="2" fill="none" style={{animationDelay: '0.6s'}} />
                <circle className="chain-link" cx="48" cy="44" r="4" stroke="#888" strokeWidth="2" fill="none" style={{animationDelay: '0.8s'}} />
                <path className="chain-flame" d="M16 20 Q14 16 16 14 Q18 16 16 20" fill="#ff6600" opacity="0.8" />
                <path className="chain-flame" d="M24 26 Q22 22 24 20 Q26 22 24 26" fill="#ff6600" opacity="0.8" style={{animationDelay: '0.2s'}} />
                <path className="chain-flame" d="M32 32 Q30 28 32 26 Q34 28 32 32" fill="#ff6600" opacity="0.8" style={{animationDelay: '0.4s'}} />
                <path className="chain-flame" d="M40 38 Q38 34 40 32 Q42 34 40 38" fill="#ff6600" opacity="0.8" style={{animationDelay: '0.6s'}} />
                <path className="chain-flame" d="M48 44 Q46 40 48 38 Q50 40 48 44" fill="#ff6600" opacity="0.8" style={{animationDelay: '0.8s'}} />
                <circle cx="48" cy="44" r="6" fill="#1a1a1a" stroke="#ff3300" strokeWidth="1" />
                <circle className="skull-eye" cx="46" cy="43" r="1.5" fill="#ff3300" />
                <circle className="skull-eye" cx="50" cy="43" r="1.5" fill="#ff3300" style={{animationDelay: '0.3s'}} />
                <defs>
                    <linearGradient id="razielBg" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#1a0a00" />
                        <stop offset="100%" stopColor="#2d1a0a" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    // Speed Auto Bot - Iron Man Flight Thrusters
    if (name.includes('speed')) {
        return (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" fill="url(#speedBg)" />
                <ellipse className="thruster" cx="20" cy="40" rx="6" ry="12" fill="url(#thruster)" opacity="0.8" />
                <ellipse className="thruster" cx="32" cy="40" rx="6" ry="12" fill="url(#thruster)" opacity="0.8" style={{animationDelay: '0.2s'}} />
                <ellipse className="thruster" cx="44" cy="40" rx="6" ry="12" fill="url(#thruster)" opacity="0.8" style={{animationDelay: '0.4s'}} />
                <line className="speed-line" x1="10" y1="20" x2="20" y2="20" stroke="#00d9ff" strokeWidth="2" opacity="0.6" />
                <line className="speed-line" x1="12" y1="26" x2="24" y2="26" stroke="#00d9ff" strokeWidth="2" opacity="0.6" style={{animationDelay: '0.3s'}} />
                <line className="speed-line" x1="8" y1="32" x2="22" y2="32" stroke="#00d9ff" strokeWidth="2" opacity="0.6" style={{animationDelay: '0.6s'}} />
                <rect x="26" y="18" width="12" height="16" rx="2" fill="url(#bootGold)" stroke="#ffd700" strokeWidth="1" />
                <circle className="arc-core" cx="32" cy="26" r="3" fill="#00d9ff" />
                <defs>
                    <linearGradient id="speedBg" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#1a1a2e" />
                        <stop offset="100%" stopColor="#0f0f1e" />
                    </linearGradient>
                    <linearGradient id="thruster" x1="0" y1="28" x2="0" y2="52">
                        <stop offset="0%" stopColor="#00ffff" />
                        <stop offset="50%" stopColor="#00aaff" />
                        <stop offset="100%" stopColor="#0066cc" />
                    </linearGradient>
                    <linearGradient id="bootGold" x1="32" y1="18" x2="32" y2="34">
                        <stop offset="0%" stopColor="#ffd700" />
                        <stop offset="100%" stopColor="#cc9900" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    // Random LDP Differ - Ghost Rider Hell Portal
    if (name.includes('random') || name.includes('ldp')) {
        return (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="56" height="56" rx="8" fill="url(#randomBg)" />
                <circle className="portal-ring" cx="32" cy="32" r="22" stroke="#ff3300" strokeWidth="2" fill="none" opacity="0.8" />
                <circle className="portal-ring" cx="32" cy="32" r="18" stroke="#ff6600" strokeWidth="2" fill="none" opacity="0.6" style={{animationDelay: '0.3s'}} />
                <circle className="portal-ring" cx="32" cy="32" r="14" stroke="#ff9900" strokeWidth="2" fill="none" opacity="0.4" style={{animationDelay: '0.6s'}} />
                <circle className="portal-particle" cx="32" cy="14" r="2" fill="#ff6600" />
                <circle className="portal-particle" cx="50" cy="32" r="2" fill="#ff6600" style={{animationDelay: '0.25s'}} />
                <circle className="portal-particle" cx="32" cy="50" r="2" fill="#ff6600" style={{animationDelay: '0.5s'}} />
                <circle className="portal-particle" cx="14" cy="32" r="2" fill="#ff6600" style={{animationDelay: '0.75s'}} />
                <circle className="portal-particle" cx="22" cy="22" r="1.5" fill="#ff9900" style={{animationDelay: '0.1s'}} />
                <circle className="portal-particle" cx="42" cy="22" r="1.5" fill="#ff9900" style={{animationDelay: '0.3s'}} />
                <circle className="portal-particle" cx="22" cy="42" r="1.5" fill="#ff9900" style={{animationDelay: '0.5s'}} />
                <circle className="portal-particle" cx="42" cy="42" r="1.5" fill="#ff9900" style={{animationDelay: '0.7s'}} />
                <circle cx="32" cy="32" r="8" fill="#1a1a1a" />
                <circle className="skull-eye" cx="29" cy="30" r="2" fill="#ff3300" />
                <circle className="skull-eye" cx="35" cy="30" r="2" fill="#ff3300" style={{animationDelay: '0.3s'}} />
                <path d="M28 36 L32 34 L36 36" stroke="#ff3300" strokeWidth="1.5" fill="none" />
                <defs>
                    <linearGradient id="randomBg" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#1a0a00" />
                        <stop offset="100%" stopColor="#2d1a0a" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    // Delirium bot - Ghost Rider Hellfire Wave
    if (name.includes('delirium')) {
        return (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" fill="url(#deliriumBg)" />
                <path className="hellfire-wave" d="M8 32 Q16 24 24 32 T40 32 T56 32" stroke="#ff3300" strokeWidth="3" fill="none" opacity="0.8" />
                <path className="hellfire-wave" d="M8 38 Q16 30 24 38 T40 38 T56 38" stroke="#ff6600" strokeWidth="2.5" fill="none" opacity="0.6" style={{animationDelay: '0.3s'}} />
                <path className="hellfire-wave" d="M8 26 Q16 18 24 26 T40 26 T56 26" stroke="#ff9900" strokeWidth="2" fill="none" opacity="0.4" style={{animationDelay: '0.6s'}} />
                <path className="chain-flame" d="M16 32 Q14 28 16 26 Q18 28 16 32" fill="#ff6600" />
                <path className="chain-flame" d="M32 32 Q30 28 32 26 Q34 28 32 32" fill="#ff6600" style={{animationDelay: '0.3s'}} />
                <path className="chain-flame" d="M48 32 Q46 28 48 26 Q50 28 48 32" fill="#ff6600" style={{animationDelay: '0.6s'}} />
                <ellipse cx="32" cy="32" rx="8" ry="10" fill="#1a1a1a" opacity="0.6" />
                <circle className="skull-eye" cx="29" cy="30" r="2" fill="#ff3300" opacity="0.8" />
                <circle className="skull-eye" cx="35" cy="30" r="2" fill="#ff3300" opacity="0.8" style={{animationDelay: '0.3s'}} />
                <defs>
                    <linearGradient id="deliriumBg" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#1a0a00" />
                        <stop offset="100%" stopColor="#2d1a0a" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    // Matches Master - Iron Man Targeting System
    if (name.includes('matches')) {
        return (
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="56" height="56" rx="10" fill="url(#matchesBg)" />
                <circle className="targeting-reticle" cx="32" cy="32" r="18" stroke="#00d9ff" strokeWidth="2" fill="none" />
                <circle className="targeting-reticle" cx="32" cy="32" r="12" stroke="#00d9ff" strokeWidth="1.5" fill="none" style={{animationDelay: '0.5s'}} />
                <line className="energy-ray" x1="32" y1="14" x2="32" y2="22" stroke="#00ffff" strokeWidth="2" />
                <line className="energy-ray" x1="32" y1="42" x2="32" y2="50" stroke="#00ffff" strokeWidth="2" style={{animationDelay: '0.2s'}} />
                <line className="energy-ray" x1="14" y1="32" x2="22" y2="32" stroke="#00ffff" strokeWidth="2" style={{animationDelay: '0.4s'}} />
                <line className="energy-ray" x1="42" y1="32" x2="50" y2="32" stroke="#00ffff" strokeWidth="2" style={{animationDelay: '0.6s'}} />
                <path className="hud-bracket" d="M18 18 L18 24 M18 18 L24 18" stroke="#ffd700" strokeWidth="2" />
                <path className="hud-bracket" d="M46 18 L46 24 M46 18 L40 18" stroke="#ffd700" strokeWidth="2" style={{animationDelay: '0.25s'}} />
                <path className="hud-bracket" d="M18 46 L18 40 M18 46 L24 46" stroke="#ffd700" strokeWidth="2" style={{animationDelay: '0.5s'}} />
                <path className="hud-bracket" d="M46 46 L46 40 M46 46 L40 46" stroke="#ffd700" strokeWidth="2" style={{animationDelay: '0.75s'}} />
                <circle className="target-indicator" cx="32" cy="20" r="2" fill="#ff3300" />
                <circle className="target-indicator" cx="32" cy="44" r="2" fill="#10b981" style={{animationDelay: '0.5s'}} />
                <circle className="arc-core" cx="32" cy="32" r="3" fill="#00ffff" />
                <defs>
                    <linearGradient id="matchesBg" x1="0" y1="0" x2="64" y2="64">
                        <stop offset="0%" stopColor="#1a1a2e" />
                        <stop offset="100%" stopColor="#0f0f1e" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    // Default bot icon - Ghost Rider Flaming Skull
    return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="56" height="56" rx="12" fill="url(#defaultBg)" />
            <path className="flame-primary" d="M32 8 Q28 14 30 20 Q26 18 28 24 Q30 30 32 36 Q34 30 36 24 Q38 18 34 20 Q36 14 32 8" fill="url(#defaultFlame)" opacity="0.8" />
            <ellipse cx="32" cy="32" rx="12" ry="14" fill="#1a1a1a" stroke="#ff6600" strokeWidth="1.5" />
            <ellipse className="skull-eye" cx="27" cy="30" rx="3" ry="4" fill="#ff3300" />
            <ellipse className="skull-eye" cx="37" cy="30" rx="3" ry="4" fill="#ff3300" style={{animationDelay: '0.3s'}} />
            <circle cx="27" cy="29" r="1.5" fill="#ffff00" />
            <circle cx="37" cy="29" r="1.5" fill="#ffff00" />
            <path d="M32 34 L30 38 L34 38 Z" fill="#000" />
            <path d="M24 42 Q32 46 40 42" stroke="#ff6600" strokeWidth="2" fill="none" />
            <line x1="28" y1="42" x2="28" y2="45" stroke="#ff3300" strokeWidth="1" />
            <line x1="32" y1="42" x2="32" y2="46" stroke="#ff3300" strokeWidth="1" />
            <line x1="36" y1="42" x2="36" y2="45" stroke="#ff3300" strokeWidth="1" />
            <defs>
                <linearGradient id="defaultBg" x1="0" y1="0" x2="64" y2="64">
                    <stop offset="0%" stopColor="#1a0a00" />
                    <stop offset="100%" stopColor="#2d1a0a" />
                </linearGradient>
                <linearGradient id="defaultFlame" x1="32" y1="8" x2="32" y2="36">
                    <stop offset="0%" stopColor="#ffaa00" />
                    <stop offset="50%" stopColor="#ff6600" />
                    <stop offset="100%" stopColor="#ff3300" />
                </linearGradient>
            </defs>
        </svg>
    );
};
