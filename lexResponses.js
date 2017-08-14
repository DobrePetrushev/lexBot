'use strict';

module.exports.delegate = function(sessionAttributes, slots) {
    return {
        sessionAttributes: 'session_attributes', //session attrubutes
        dialogAction: {
            type: 'Delegate',
            slots,
        },
    };
};


module.exports.elicitSlot = function(session_attributes, intentName, slots, slotToElicit, message, responseCard) {
   return {
        sessionAttributes: 'session_attributes', //session attrubutes
        dialogAction: {
            type: 'ElicitSlot',
            intentName,
            slots,
            slotToElicit,
            message,
            responseCard,
        },
    };
};




module.exports.close = function(session_attributes, fulfillmentState, message) {
   return {
        sessionAttributes: 'session_attributes', //session attrubutes
        dialogAction: {
            type: 'Close',
            fulfillmentState,
            message
        },
    };
};

module.exports.confirmIntent = function(session_attributes, intentName, slots, message) {
   return {
        sessionAttributes: 'session_attributes', //session attrubutes
        dialogAction: {
            type: 'ConfirmIntent',
            intentName,
            slots,
            message
        },
    };
};



// Build a responseCard with a title, subtitle, and an optional set of options which should be displayed as buttons.
module.exports.buildResponseCard = function(title, subTitle, options) {
    let buttons = null;
    if (options != null) {
        buttons = [];
        for (let i = 0; i < options.length; i++) {
            buttons.push(options[i]);
        }
    }
    return {
        contentType: 'application/vnd.amazonaws.card.generic',
        version: 1,
        genericAttachments: [{
            title,
            subTitle,
            buttons,
        }],
    };
}
