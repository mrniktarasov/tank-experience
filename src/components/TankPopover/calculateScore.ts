export type IComplectation = 'standard' | 'elite' | 'premium';

export function calcultaScore(complectation: IComplectation, fights: number): number {
    if (complectation === 'elite') {
        return Math.round(fights * 3 * 1.1);
    }
    if (complectation === 'premium') {
        return Math.round(fights * 3 * 1.2);
    }

    return Math.round(fights * 3);
}