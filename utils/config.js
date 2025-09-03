import { Vector2 } from "../PhysicsJS2D/src/vector2.js";

export const Config = (function () {
    let origin = location.href;

    if (origin.split('/').at(-1) === 'index.html') {
        origin = origin.substring(0, origin.length - 10);
    }

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return {
        ORIGIN: origin,
        SPRITE_SIZE: new Vector2(8, 8),
        DEBUG_MODE: false,
        MOBILE_ENVIRONMENT: isMobile,
    }
})();