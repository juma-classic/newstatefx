import React from 'react';
import { StateFXAnalysisTool } from '@/components/state-fx-analysis/StateFXAnalysisTool';
import { usePasswordProtection } from '@/hooks/usePasswordProtection';
import { PasswordProtection } from './PasswordProtection';

interface ProtectedZeusAnalysisProps {
    onNavigateToFreeBots: () => void;
}

export const ProtectedZeusAnalysis: React.FC<ProtectedZeusAnalysisProps> = ({ onNavigateToFreeBots }) => {
    const { isAuthenticated, authenticate } = usePasswordProtection();

    if (!isAuthenticated) {
        return (
            <PasswordProtection
                onAuthenticate={authenticate}
                title='Zeus Analysis Access'
                subtitle='Enter password to access Zeus AI Analysis Tool'
            />
        );
    }

    return <StateFXAnalysisTool onNavigateToFreeBots={onNavigateToFreeBots} />;
};
