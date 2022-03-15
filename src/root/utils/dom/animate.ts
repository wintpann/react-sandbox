type Point = { x: number; y: number };

export type BezierTiming = [number, number, number, number];

export type Animate = (
    onChange: (progress: number) => void,
    values: [number, number],
    duration?: number,
    timing?: BezierTiming,
) => void;

const FIRST_POINT: Point = { x: 0, y: 0 };
const FOURTH_POINT: Point = { x: 1, y: 1 };

const bezierCurveEquation = (
    [p1, p2, p3, p4]: [Point, Point, Point, Point],
    side: keyof Point,
    t: number,
) =>
    (1 - t) ** 3 * p1[side] +
    3 * (1 - t) ** 2 * t * p2[side] +
    3 * (1 - t) * t ** 2 * p3[side] +
    t ** 3 * p4[side];

const getYByFraction =
    ([secondPoint, thirdPoint]: [Point, Point]) =>
    (t: number) => {
        const x = bezierCurveEquation([FIRST_POINT, secondPoint, thirdPoint, FOURTH_POINT], 'x', t);
        const y = bezierCurveEquation([FIRST_POINT, secondPoint, thirdPoint, FOURTH_POINT], 'y', x);
        return y;
    };

const Timing: Record<string, BezierTiming> = {
    // equal to css `transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1)`
    Ease: [0.25, 0.1, 0.25, 1],
};

const getPoints = (timing: BezierTiming): [Point, Point] => [
    { x: timing[0], y: timing[1] },
    { x: timing[2], y: timing[3] },
];

const clampMax = (max: number) => (value: number) => value > max ? max : value;

const clampFraction = clampMax(1);

export const animate: Animate = (onChange, [from, to], duration = 300, timing = Timing.Ease) => {
    const timeStart = performance.now();
    const timingFn = getYByFraction(getPoints(timing));
    const diff = to - from;
    const animation = (timePassed: number) => {
        const fraction = clampFraction((timePassed - timeStart) / duration);

        const progress = timingFn(fraction);
        const offset = diff * progress;
        const value = from + offset;
        onChange(value);

        if (fraction < 1) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
};
