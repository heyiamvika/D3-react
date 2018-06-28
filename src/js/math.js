import { data } from '../data/data';

export const math = () => {
    // const out = () => {
    //     let args = Array.prototype.slice.call(arguments, 0);
    //     document.getElementById('output').innerHTML += args.join(" ") + "\n";
    // }

    const toDegrees = (angle) => {
        return angle * (180 / Math.PI);
    }

    const toRadians = (angle) => {
        return angle * (Math.PI / 180);
    }

    // Environment
    let airDensity = 1.2234 // kg/m^3
    let frictionFactor = 0.004 // -
    let dragCoefficient = 0.7 // -
    let gravityFactor = 9.81 // m/s^2
    let windDirection = 310.0 // -
    let windVelocity = 2.94 // m/s
    let rollingResistanceCoefficient = 0.0032

    // Bike and rider
    let bikeMass = 10 // kg
    let riderMass = 80 // kg
    let dragValues = [{
        "yawAngle": 5,
        "dragArea": 0.258
    },
    {
        "yawAngle": 10,
        "dragArea": 0.257
    }
    ]

    let wheelAerodynamicFactor = 0.0044 //-
    let distanceCovered = 471.8 // m
    let initialVelocity = 8.27 // m/s
    let finalVelocity = 8.45 // m/s
    let rideDirection = 340.0 // -
    let grade = 0.003 // -
    let timeToCoverDistance = 56.42 // s
    let momentOfInertiaOfWheels = 0.14 // kg/m^2
    let outerTireRadius = 0.557 // m
    let chainEfficiencyFactor = 0.976 // -
    let groundVelocity = distanceCovered / timeToCoverDistance // m/s

    // Air velocity (V_air)
    let tangentWindVelocity = windVelocity * Math.cos(toRadians(rideDirection) - toRadians(windDirection)) // m/s
    let airVelocity = groundVelocity + tangentWindVelocity
    // out("V_air:", airVelocity)

    // Yaw angle
    let normalWindVelocity = windVelocity * Math.sin(toRadians(rideDirection) - toRadians(windDirection)) // m/s
    let yawAngle = toDegrees(Math.atan((normalWindVelocity / airVelocity)))

    //out("Yaw angle:", yawAngle)

    // Aerodynamic power (P_ad)
    let cda = ((dragValues[1].dragArea - dragValues[0].dragArea) / (dragValues[1].yawAngle - dragValues[0].yawAngle)) * (yawAngle - dragValues[0].yawAngle) + dragValues[1].dragArea
    let aerodynamicPower = Math.pow(airVelocity, 2) * groundVelocity * airDensity * 0.5 * (cda + wheelAerodynamicFactor)

    // out("P_ad:", aerodynamicPower)

    // Rolling resistance power (P_rr)
    let rollingResistancePower = groundVelocity * Math.cos(Math.atan(grade)) * rollingResistanceCoefficient * (bikeMass + riderMass) * gravityFactor

    // out("P_rr:", rollingResistancePower)

    // Wheel bearing friction power (P_bfl)
    let wheelBearingFrictionPower = groundVelocity * (91.0 + 8.7 * groundVelocity) * Math.pow(10, -3)

    //out("P_bfl", wheelBearingFrictionPower)

    //Power related to changes in potential energy (P_pe)
    let potentialEnergyPower = groundVelocity * (bikeMass + riderMass) * gravityFactor * Math.sin(Math.atan(grade))

    //out("P_pe", potentialEnergyPower)

    //Power related tochanges in kineticenergy (P_ke)
    let kineticEnergyPower = 0.5 * (bikeMass + riderMass + momentOfInertiaOfWheels / Math.pow(outerTireRadius, 2)) * (Math.pow(finalVelocity, 2) - Math.pow(initialVelocity, 2)) / timeToCoverDistance

    //out("P_ke", kineticEnergyPower)

    // Total power (P_total)

    let totalPower = (aerodynamicPower + rollingResistancePower + wheelBearingFrictionPower + potentialEnergyPower + kineticEnergyPower) * chainEfficiencyFactor;

    // out("P_total", totalPower)

    const finalData = [
        { "name": "aerodynamicPower", "value": aerodynamicPower },
        { "name": 'rollingResistancePower', "value": rollingResistancePower },
        { "name": "wheelBearingFrictionPower", "value": wheelBearingFrictionPower },
        { "name": "potentialEnergyPower", "value": potentialEnergyPower },
        { "name": "kineticEnergyPower", "value": kineticEnergyPower },
        { "name": "chainEfficiencyFactor", "value": chainEfficiencyFactor },
        { "name": "totalPower", "value": totalPower }
    ];

    return finalData;
}
