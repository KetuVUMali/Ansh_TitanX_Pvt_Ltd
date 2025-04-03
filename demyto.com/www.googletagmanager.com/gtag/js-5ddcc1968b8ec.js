// Copyright 2012 Google Inc. All rights reserved.

(function() {

    var data = {
        "resource": {
            "version": "2",

            "macros": [{
                "function": "__e"
            }],
            "tags": [{
                "function": "__ogt_ads_datatos",
                "priority": 16,
                "vtp_instanceDestinationId": "AW-959136034",
                "tag_id": 13
            }, {
                "function": "__ogt_1p_data_v2",
                "priority": 6,
                "vtp_isAutoEnabled": true,
                "vtp_isManualEnabled": false,
                "vtp_autoPhoneEnabled": false,
                "vtp_autoCollectExclusionSelectors": ["list", ["map", "exclusionSelector", ""]],
                "vtp_isEnabled": true,
                "vtp_autoAddressEnabled": false,
                "vtp_autoEmailEnabled": true,
                "vtp_manualEmailEnabled": false,
                "vtp_cityValue": "",
                "vtp_postalCodeValue": "",
                "vtp_lastNameValue": "",
                "vtp_phoneValue": "",
                "vtp_emailValue": "",
                "vtp_firstNameValue": "",
                "vtp_streetValue": "",
                "vtp_regionValue": "",
                "vtp_countryValue": "",
                "vtp_isAutoCollectPiiEnabledFlag": true,
                "tag_id": 7
            }, {
                "function": "__ccd_ads_first",
                "priority": 5,
                "vtp_instanceDestinationId": "AW-959136034",
                "tag_id": 14
            }, {
                "function": "__ccd_pre_auto_pii",
                "priority": 3,
                "vtp_instanceDestinationId": "AW-959136034",
                "tag_id": 12
            }, {
                "function": "__ccd_em_form",
                "priority": 2,
                "vtp_includeParams": false,
                "vtp_instanceDestinationId": "AW-959136034",
                "tag_id": 11
            }, {
                "function": "__ccd_add_1p_data",
                "priority": 1,
                "vtp_acceptAutomatic": true,
                "vtp_acceptCode": true,
                "vtp_acceptManualSelector": true,
                "vtp_acceptUserData": true,
                "vtp_matchingRules": "{\"type\":1,\"args\":[{\"booleanExpressionValue\":{\"type\":5,\"args\":[{\"stringValue\":\"conversion\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"metadata\",\"hit_type\"]}}]}},{\"booleanExpressionValue\":{\"type\":5,\"args\":[{\"stringValue\":\"user_data_web\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"metadata\",\"hit_type\"]}}]}}]}",
                "vtp_instanceDestinationId": "AW-959136034",
                "tag_id": 10
            }, {
                "function": "__rep",
                "vtp_containerId": "AW-959136034",
                "vtp_remoteConfig": ["map", "enhanced_conversions", ["map", "ykhTCJTcq5YBEKKCrckD", ["map", "enhanced_conversions_mode", "off", "enhanced_conversions_automatic_settings", ["map"]], "Yd7NCPrz45kDEKKCrckD", ["map", "enhanced_conversions_mode", "off", "enhanced_conversions_automatic_settings", ["map"]], "oWQMCJbL15gBEKKCrckD", ["map", "enhanced_conversions_mode", "manual", "enhanced_conversions_automatic_settings", ["map"]], "2pHoCMb__pgBEKKCrckD", ["map", "enhanced_conversions_mode", "manual", "enhanced_conversions_automatic_settings", ["map"]], "G9_DCMekwJYBEKKCrckD", ["map", "enhanced_conversions_mode", "off", "enhanced_conversions_automatic_settings", ["map"]]]],
                "tag_id": 5
            }, {
                "function": "__ccd_ads_last",
                "priority": 0,
                "vtp_instanceDestinationId": "AW-959136034",
                "tag_id": 9
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 6]
                ],
                [
                    ["if", 1],
                    ["add", 1, 7, 5, 4, 3, 0, 2]
                ]
            ]
        },
        "runtime": [
            [50, "__ccd_add_1p_data", [46, "a"],
                [52, "b", "c"],
                [52, "c", "m"],
                [52, "d", "a"],
                [52, "e", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "f", [15, "__module_gtagMetadataSchema"]],
                [52, "g", ["require", "getContainerVersion"]],
                [52, "h", [30, [17, [15, "a"], "instanceDestinationId"],
                    [17, ["g"], "containerId"]
                ]],
                [52, "i", ["require", "internal.setProductSettingsParameter"]],
                ["i", [15, "h"], "ccd_add_1p_data", true],
                [22, [30, [30, [28, [17, [15, "a"], "matchingRules"]],
                            [28, [17, [15, "a"], "acceptUserData"]]
                        ],
                        [1, [1, [28, [17, [15, "a"], "acceptAutomatic"]],
                                [28, [17, [15, "a"], "acceptManualSelector"]]
                            ],
                            [28, [17, [15, "a"], "acceptCode"]]
                        ]
                    ],
                    [46, [53, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]]
                ],
                [52, "j", ["require", "internal.registerCcdCallback"]],
                [52, "k", ["require", "internal.evaluateBooleanExpression"]],
                [52, "l", [51, "", [7, "m"],
                    [22, [28, ["k", [17, [15, "a"], "matchingRules"],
                            [8, "preHit", [15, "m"]]
                        ]],
                        [46, [53, [36]]]
                    ],
                    [22, [2, [15, "m"], "getMetadata", [7, [17, [15, "f"], "IS_SGTM_PREHIT"]]],
                        [46, [53, [2, [15, "m"], "setMetadata", [7, [17, [15, "f"], "SEND_USER_DATA_HIT"], true]],
                            [36]
                        ]]
                    ],
                    [41, "n"],
                    [41, "o"],
                    [22, [17, [15, "a"], "acceptCode"],
                        [46, [53, [3, "o", [2, [15, "m"], "getMetadata", [7, [17, [15, "f"], "USER_DATA_FROM_CODE"]]]],
                            [22, [20, [15, "o"],
                                    [45]
                                ],
                                [46, [53, [36]]]
                            ],
                            [22, [1, [15, "o"],
                                    [16, [15, "o"], "_tag_mode"]
                                ],
                                [46, [53, [38, [16, [15, "o"], "_tag_mode"],
                                    [46, "AUTO", "MANUAL"],
                                    [46, [5, [46, [3, "n", [15, "d"]],
                                            [4]
                                        ]],
                                        [5, [46, [3, "n", [15, "c"]],
                                            [4]
                                        ]],
                                        [9, [46, [3, "n", [15, "b"]],
                                            [4]
                                        ]]
                                    ]
                                ]]],
                                [46, [53, [3, "n", [15, "b"]]]]
                            ]
                        ]]
                    ],
                    [22, [1, [28, [15, "o"]],
                            [17, [15, "a"], "acceptManualSelector"]
                        ],
                        [46, [53, [3, "o", [2, [15, "m"], "getMetadata", [7, [17, [15, "f"], "USER_DATA_FROM_MANUAL"]]]],
                            [3, "n", [15, "c"]]
                        ]]
                    ],
                    [22, [1, [28, [15, "o"]],
                            [17, [15, "a"], "acceptAutomatic"]
                        ],
                        [46, [53, [52, "p", [2, [15, "m"], "getMetadata", [7, [17, [15, "f"], "USER_DATA_FROM_AUTOMATIC_GETTER"]]]],
                            [22, [15, "p"],
                                [46, [53, [3, "o", ["p", [15, "m"]]],
                                    [3, "n", [15, "d"]]
                                ]]
                            ]
                        ]]
                    ],
                    [22, [15, "o"],
                        [46, [53, [2, [15, "m"], "setMetadata", [7, [17, [15, "f"], "USER_DATA"],
                                [15, "o"]
                            ]],
                            [2, [15, "m"], "setHitData", [7, [17, [15, "f"], "USER_DATA_MODE"],
                                [15, "n"]
                            ]]
                        ]]
                    ],
                    [2, [15, "m"], "setMetadata", [7, [17, [15, "f"], "SEND_USER_DATA_HIT"], true]]
                ]],
                ["j", [15, "h"],
                    [15, "l"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_ads_first", [46, "a"],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_ads_last", [46, "a"],
                [52, "b", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "c", ["require", "internal.registerCcdCallback"]],
                [52, "d", "hit_type"],
                [52, "e", "conversion_label"],
                [52, "f", "conversion"],
                [52, "g", [16, [15, "b"], "enableAdsConversionValidation"]],
                [22, [28, [15, "g"]],
                    [46, [53, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]]
                ],
                ["c", [17, [15, "a"], "instanceDestinationId"],
                    [51, "", [7, "h"],
                        [52, "i", [2, [15, "h"], "getMetadata", [7, [15, "d"]]]],
                        [22, [1, [20, [15, "i"],
                                    [15, "f"]
                                ],
                                [28, [2, [15, "h"], "getHitData", [7, [15, "e"]]]]
                            ],
                            [46, [53, [2, [15, "h"], "abort", [7]]]]
                        ]
                    ]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_em_form", [46, "a"],
                [50, "t", [46, "ba"],
                    [52, "bb", [30, [16, [15, "ba"],
                            [15, "l"]
                        ],
                        [8]
                    ]],
                    [43, [15, "bb"], "event_usage", [7, 8]],
                    [43, [15, "ba"],
                        [15, "l"],
                        [15, "bb"]
                    ]
                ],
                [50, "u", [46, "ba", "bb"],
                    [52, "bc", [30, [16, [15, "ba"],
                            [15, "l"]
                        ],
                        [8]
                    ]],
                    [43, [15, "bc"],
                        [15, "k"], true
                    ],
                    [43, [15, "bc"],
                        [15, "f"], true
                    ],
                    [22, [1, [15, "o"],
                            [16, [15, "bb"], "gtm.formCanceled"]
                        ],
                        [46, [53, [43, [15, "bc"],
                            [15, "m"], true
                        ]]]
                    ],
                    [43, [15, "ba"],
                        [15, "l"],
                        [15, "bc"]
                    ]
                ],
                [50, "v", [46, "ba", "bb", "bc"],
                    [52, "bd", [2, ["r"], "filter", [7, [51, "", [7, "bf"],
                        [36, [20, [2, [15, "bf"], "indexOf", [7, "AW-"]], 0]]
                    ]]]],
                    [22, [18, [17, [15, "bd"], "length"], 0],
                        [46, [53, ["s", [15, "bd"],
                            [15, "ba"],
                            [15, "bb"],
                            [15, "bc"]
                        ]]]
                    ],
                    [52, "be", [2, ["r"], "filter", [7, [51, "", [7, "bf"],
                        [36, [21, [2, [15, "bf"], "indexOf", [7, "AW-"]], 0]]
                    ]]]],
                    [22, [18, [17, [15, "be"], "length"], 0],
                        [46, [53, [22, [16, [15, "b"], "enableDeferAllEnhancedMeasurement"],
                                [46, [53, [43, [15, "bc"], "deferrable", true]]]
                            ],
                            ["s", [15, "be"],
                                [15, "ba"],
                                [15, "bb"],
                                [15, "bc"]
                            ]
                        ]]
                    ]
                ],
                [52, "b", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "c", ["require", "internal.getProductSettingsParameter"]],
                [52, "d", ["require", "templateStorage"]],
                [52, "e", [15, "__module_ccdEmFormActivity"]],
                [52, "f", "speculative"],
                [52, "g", "ae_block_form"],
                [52, "h", "form_submit"],
                [52, "i", "form_start"],
                [52, "j", "isRegistered"],
                [52, "k", "em_event"],
                [52, "l", "eventMetadata"],
                [52, "m", "form_event_canceled"],
                [52, "n", [17, [15, "a"], "instanceDestinationId"]],
                [52, "o", [28, [28, [16, [15, "b"], "enableFormSkipValidation"]]]],
                [22, ["c", [15, "n"],
                        [15, "g"]
                    ],
                    [46, [53, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]]
                ],
                [2, [15, "e"], "registerFormActivityCallback", [7, [17, [15, "a"], "instanceDestinationId"],
                    [17, [15, "a"], "skipValidation"],
                    [17, [15, "a"], "includeParams"]
                ]],
                [22, [2, [15, "d"], "getItem", [7, [15, "j"]]],
                    [46, [53, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]]
                ],
                [2, [15, "d"], "setItem", [7, [15, "j"], true]],
                [52, "p", ["require", "internal.addFormInteractionListener"]],
                [52, "q", ["require", "internal.addFormSubmitListener"]],
                [52, "r", ["require", "internal.getDestinationIds"]],
                [52, "s", ["require", "internal.sendGtagEvent"]],
                [52, "w", [8]],
                [52, "x", [51, "", [7, "ba", "bb"],
                    [22, [15, "bb"],
                        [46, ["bb"]]
                    ],
                    [52, "bc", [16, [15, "ba"], "gtm.elementId"]],
                    [22, [16, [15, "w"],
                            [15, "bc"]
                        ],
                        [46, [36]]
                    ],
                    [43, [15, "w"],
                        [15, "bc"], true
                    ],
                    [52, "bd", [8, "form_id", [15, "bc"], "form_name", [16, [15, "ba"], "gtm.interactedFormName"], "form_destination", [16, [15, "ba"], "gtm.elementUrl"], "form_length", [16, [15, "ba"], "gtm.interactedFormLength"], "first_field_id", [16, [15, "ba"], "gtm.interactedFormFieldId"], "first_field_name", [16, [15, "ba"], "gtm.interactedFormFieldName"], "first_field_type", [16, [15, "ba"], "gtm.interactedFormFieldType"], "first_field_position", [16, [15, "ba"], "gtm.interactedFormFieldPosition"]]],
                    [52, "be", [8, "eventId", [17, [15, "a"], "gtmEventId"]]],
                    ["t", [15, "be"]],
                    ["u", [15, "be"],
                        [15, "ba"]
                    ],
                    ["v", [15, "i"],
                        [15, "bd"],
                        [15, "be"]
                    ]
                ]],
                [52, "y", [16, [15, "b"], "useEnableAutoEventOnFormApis"]],
                [52, "z", [51, "", [7, "ba", "bb"],
                    ["x", [15, "ba"],
                        [44]
                    ],
                    [52, "bc", [8, "form_id", [16, [15, "ba"], "gtm.elementId"], "form_name", [16, [15, "ba"], "gtm.interactedFormName"], "form_destination", [16, [15, "ba"], "gtm.elementUrl"], "form_length", [16, [15, "ba"], "gtm.interactedFormLength"], "form_submit_text", [39, [15, "y"],
                        [16, [15, "ba"], "gtm.formSubmitElementText"],
                        [16, [15, "ba"], "gtm.formSubmitButtonText"]
                    ]]],
                    [43, [15, "bc"], "event_callback", [15, "bb"]],
                    [52, "bd", [8, "eventId", [17, [15, "a"], "gtmEventId"]]],
                    ["t", [15, "bd"]],
                    ["u", [15, "bd"],
                        [15, "ba"]
                    ],
                    ["v", [15, "h"],
                        [15, "bc"],
                        [15, "bd"]
                    ]
                ]],
                [22, [15, "y"],
                    [46, [53, [52, "ba", ["require", "internal.addDataLayerEventListener"]],
                        [52, "bb", ["require", "internal.enableAutoEventOnFormSubmit"]],
                        [52, "bc", ["require", "internal.enableAutoEventOnFormInteraction"]],
                        [52, "bd", ["bc"]],
                        [22, [28, [15, "bd"]],
                            [46, [53, [2, [15, "a"], "gtmOnFailure", [7]],
                                [36]
                            ]]
                        ],
                        ["ba", "gtm.formInteract", [15, "x"],
                            [15, "bd"]
                        ],
                        [52, "be", ["bb", [8, "checkValidation", [28, [15, "o"]], "waitForTags", false]]],
                        [22, [28, [15, "be"]],
                            [46, [53, [2, [15, "a"], "gtmOnFailure", [7]],
                                [36]
                            ]]
                        ],
                        ["ba", "gtm.formSubmit", [15, "z"],
                            [15, "be"]
                        ]
                    ]],
                    [46, [53, ["p", [15, "x"]],
                        ["q", [15, "z"],
                            [8, "waitForCallbacks", false, "checkValidation", [28, [15, "o"]]]
                        ]
                    ]]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_pre_auto_pii", [46, "a"],
                [50, "r", [46, "t"],
                    [52, "u", [16, [15, "t"], "userData"]],
                    [52, "v", [30, [18, [2, [15, "u"], "indexOf", [7, "@gmail."]],
                            [27, 1]
                        ],
                        [18, [2, [15, "u"], "indexOf", [7, "@googlemail."]],
                            [27, 1]
                        ]
                    ]],
                    [36, [0, [0, [0, [0, [0, [0, [16, [15, "t"], "tagName"], ":"],
                                [16, [15, "t"], "isVisible"]
                            ], ":"],
                            [17, [15, "u"], "length"]
                        ], ":"],
                        [15, "v"]
                    ]]
                ],
                [52, "b", ["require", "internal.isAutoPiiEligible"]],
                [52, "c", ["require", "internal.setProductSettingsParameter"]],
                [52, "d", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "e", [17, [15, "a"], "instanceDestinationId"]],
                ["c", [15, "e"], "hasPreAutoPiiCcdRule", true],
                [22, [28, ["b"]],
                    [46, [53, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]]
                ],
                [52, "f", ["require", "internal.registerCcdCallback"]],
                [52, "g", ["require", "getTimestampMillis"]],
                [52, "h", ["require", "isConsentGranted"]],
                [52, "i", ["require", "makeString"]],
                [52, "j", "conversion"],
                [52, "k", "hit_type"],
                [52, "l", "ad_storage"],
                [52, "m", "user_data_auto_multi"],
                [52, "n", "user_data_auto_selectors"],
                [52, "o", "user_data_auto_meta"],
                [52, "p", "user_data_auto_latency"],
                [52, "q", "user_data_auto_status"],
                [52, "s", [8, "email", "1", "phone_number", "2", "first_name", "3", "last_name", "4", "country", "5", "postal_code", "6", "street", "7", "city", "8", "region", "9"]],
                ["f", [15, "e"],
                    [51, "", [7, "t"],
                        [22, [21, [2, [15, "t"], "getMetadata", [7, [15, "k"]]],
                                [15, "j"]
                            ],
                            [46, [36]]
                        ],
                        [22, [28, ["h", [15, "l"]]],
                            [46, [36]]
                        ],
                        [52, "u", ["g"]],
                        [52, "v", ["require", "internal.detectUserProvidedData"]],
                        [41, "w"],
                        [22, [17, [15, "d"], "enableCatchPredetectPermissionFailure"],
                            [46, [53, [68, "", [53, [3, "w", ["v", [8, "includeSelector", true, "includeVisibility", true, "selectMultipleElements", true]]]],
                                [46]
                            ]]],
                            [46, [53, [52, "bb", ["require", "queryPermission"]],
                                [22, ["bb", "detect_user_provided_data", "auto"],
                                    [46, [53, [3, "w", ["v", [8, "includeSelector", true, "includeVisibility", true, "selectMultipleElements", true]]]]]
                                ]
                            ]]
                        ],
                        [22, [30, [30, [28, [15, "w"]],
                                    [28, [16, [15, "w"], "elements"]]
                                ],
                                [20, [17, [16, [15, "w"], "elements"], "length"], 0]
                            ],
                            [46, [53, [36]]]
                        ],
                        [52, "x", [16, [15, "w"], "elements"]],
                        [52, "y", [7]],
                        [65, "bb", [15, "x"],
                            [46, [53, [52, "bc", ["r", [15, "bb"]]],
                                [52, "bd", [30, [16, [15, "s"],
                                    [16, [15, "bb"], "type"]
                                ], ""]],
                                [2, [15, "y"], "push", [7, [0, [0, [0, [0, [16, [15, "bb"], "querySelector"], "*"],
                                        [15, "bc"]
                                    ], "*"],
                                    [15, "bd"]
                                ]]]
                            ]]
                        ],
                        [2, [15, "t"], "setHitData", [7, [15, "m"],
                            [2, [15, "y"], "join", [7, "~"]]
                        ]],
                        [52, "z", [16, [15, "w"], "preferredEmailElement"]],
                        [22, [15, "z"],
                            [46, [53, [2, [15, "t"], "setHitData", [7, [15, "n"],
                                    [16, [15, "z"], "querySelector"]
                                ]],
                                [2, [15, "t"], "setHitData", [7, [15, "o"],
                                    ["r", [15, "z"]]
                                ]]
                            ]]
                        ],
                        [52, "ba", ["g"]],
                        [2, [15, "t"], "setHitData", [7, [15, "p"],
                            ["i", [37, [15, "ba"],
                                [15, "u"]
                            ]]
                        ]],
                        [2, [15, "t"], "setHitData", [7, [15, "q"],
                            [16, [15, "w"], "status"]
                        ]]
                    ]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__e", [46, "a"],
                [36, [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getEventData"]],
                    ["$0", "event"]
                ]]
            ],
            [50, "__ogt_1p_data_v2", [46, "a"],
                [50, "o", [46, "t", "u"],
                    [52, "v", [7]],
                    [52, "w", [2, [15, "b"], "keys", [7, [15, "t"]]]],
                    [65, "x", [15, "w"],
                        [46, [53, [52, "y", [30, [16, [15, "t"],
                                    [15, "x"]
                                ],
                                [7]
                            ]],
                            [52, "z", [39, [18, [17, [15, "y"], "length"], 0], "1", "0"]],
                            [52, "ba", [39, ["p", [15, "u"],
                                [15, "x"]
                            ], "1", "0"]],
                            [2, [15, "v"], "push", [7, [0, [0, [0, [16, [15, "n"],
                                        [15, "x"]
                                    ], "-"],
                                    [15, "z"]
                                ],
                                [15, "ba"]
                            ]]]
                        ]]
                    ],
                    [36, [2, [15, "v"], "join", [7, "~"]]]
                ],
                [50, "p", [46, "t", "u"],
                    [22, [28, [15, "t"]],
                        [46, [53, [36, false]]]
                    ],
                    [38, [15, "u"],
                        [46, "email", "phone_number", "first_name", "last_name", "street", "city", "region", "postal_code", "country"],
                        [46, [5, [46, [36, [28, [28, [16, [15, "t"], "email"]]]]]],
                            [5, [46, [36, [28, [28, [16, [15, "t"], "phone_number"]]]]]],
                            [5, [46]],
                            [5, [46]],
                            [5, [46]],
                            [5, [46]],
                            [5, [46]],
                            [5, [46]],
                            [5, [46, [36, ["q", [15, "t"],
                                [15, "u"]
                            ]]]],
                            [9, [46, [36, false]]]
                        ]
                    ]
                ],
                [50, "q", [46, "t", "u"],
                    [36, [1, [28, [28, [16, [15, "t"], "address"]]],
                        [28, [28, [16, [16, [15, "t"], "address"],
                            [15, "u"]
                        ]]]
                    ]]
                ],
                [50, "r", [46, "t", "u", "v"],
                    [22, [20, [16, [15, "u"], "type"],
                            [15, "v"]
                        ],
                        [46, [53, [22, [28, [15, "t"]],
                                [46, [53, [3, "t", [8]]]]
                            ],
                            [22, [28, [16, [15, "t"],
                                    [15, "v"]
                                ]],
                                [46, [53, [43, [15, "t"],
                                    [15, "v"],
                                    [16, [15, "u"], "userData"]
                                ]]]
                            ]
                        ]]
                    ],
                    [36, [15, "t"]]
                ],
                [50, "s", [46, "t", "u", "v"],
                    [22, [28, [16, [15, "a"],
                            [15, "v"]
                        ]],
                        [46, [36]]
                    ],
                    [43, [15, "t"],
                        [15, "u"],
                        [8, "value", [16, [15, "a"],
                            [15, "v"]
                        ]]
                    ]
                ],
                [22, [28, [17, [15, "a"], "isEnabled"]],
                    [46, [53, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]]
                ],
                [52, "b", ["require", "Object"]],
                [52, "c", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "d", ["require", "internal.getDestinationIds"]],
                [52, "e", ["require", "internal.getProductSettingsParameter"]],
                [52, "f", ["require", "internal.detectUserProvidedData"]],
                [52, "g", ["require", "queryPermission"]],
                [52, "h", ["require", "internal.setRemoteConfigParameter"]],
                [52, "i", ["require", "internal.registerCcdCallback"]],
                [52, "j", [15, "__module_gtagMetadataSchema"]],
                [52, "k", "_z"],
                [52, "l", [30, ["d"],
                    [7]
                ]],
                [52, "m", [8, "enable_code", true]],
                [52, "n", [8, "email", "1", "phone_number", "2", "first_name", "3", "last_name", "4", "country", "5", "postal_code", "6", "street", "7", "city", "8", "region", "9"]],
                [22, [17, [15, "a"], "isAutoEnabled"],
                    [46, [53, [52, "t", [7]],
                        [22, [1, [17, [15, "a"], "autoCollectExclusionSelectors"],
                                [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]
                            ],
                            [46, [53, [53, [41, "w"],
                                [3, "w", 0],
                                [63, [7, "w"],
                                    [23, [15, "w"],
                                        [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]
                                    ],
                                    [33, [15, "w"],
                                        [3, "w", [0, [15, "w"], 1]]
                                    ],
                                    [46, [53, [52, "x", [17, [16, [17, [15, "a"], "autoCollectExclusionSelectors"],
                                            [15, "w"]
                                        ], "exclusionSelector"]],
                                        [22, [15, "x"],
                                            [46, [53, [2, [15, "t"], "push", [7, [15, "x"]]]]]
                                        ]
                                    ]]
                                ]
                            ]]]
                        ],
                        [52, "u", [30, [16, [15, "c"], "enableAutoPhoneAndAddressDetection"],
                            [17, [15, "a"], "isAutoCollectPiiEnabledFlag"]
                        ]],
                        [52, "v", [39, [17, [15, "a"], "isAutoCollectPiiEnabledFlag"],
                            [17, [15, "a"], "autoEmailEnabled"], true
                        ]],
                        [43, [15, "m"], "auto_detect", [8, "email", [15, "v"], "phone", [1, [15, "u"],
                            [17, [15, "a"], "autoPhoneEnabled"]
                        ], "address", [1, [15, "u"],
                            [17, [15, "a"], "autoAddressEnabled"]
                        ], "exclude_element_selectors", [15, "t"]]]
                    ]]
                ],
                [22, [17, [15, "a"], "isManualEnabled"],
                    [46, [53, [52, "t", [8]],
                        [22, [17, [15, "a"], "manualEmailEnabled"],
                            [46, [53, ["s", [15, "t"], "email", "emailValue"]]]
                        ],
                        [22, [17, [15, "a"], "manualPhoneEnabled"],
                            [46, [53, ["s", [15, "t"], "phone", "phoneValue"]]]
                        ],
                        [22, [17, [15, "a"], "manualAddressEnabled"],
                            [46, [53, [52, "u", [8]],
                                ["s", [15, "u"], "first_name", "firstNameValue"],
                                ["s", [15, "u"], "last_name", "lastNameValue"],
                                ["s", [15, "u"], "street", "streetValue"],
                                ["s", [15, "u"], "city", "cityValue"],
                                ["s", [15, "u"], "region", "regionValue"],
                                ["s", [15, "u"], "country", "countryValue"],
                                ["s", [15, "u"], "postal_code", "postalCodeValue"],
                                [43, [15, "t"], "name_and_address", [7, [15, "u"]]]
                            ]]
                        ],
                        [43, [15, "m"], "selectors", [15, "t"]]
                    ]]
                ],
                [65, "t", [15, "l"],
                    [46, [53, ["h", [15, "t"], "user_data_settings", [15, "m"]],
                        [52, "u", [16, [15, "m"], "auto_detect"]],
                        [22, [28, [15, "u"]],
                            [46, [53, [6]]]
                        ],
                        [52, "v", [51, "", [7, "w"],
                            [52, "x", [2, [15, "w"], "getMetadata", [7, [17, [15, "j"], "USER_DATA_FROM_AUTOMATIC"]]]],
                            [22, [15, "x"],
                                [46, [53, [36, [15, "x"]]]]
                            ],
                            [52, "y", [1, [16, [15, "c"], "enableDataLayerSearchExperiment"],
                                [20, [2, [15, "t"], "indexOf", [7, "G-"]], 0]
                            ]],
                            [41, "z"],
                            [22, ["g", "detect_user_provided_data", "auto"],
                                [46, [53, [3, "z", ["f", [8, "excludeElementSelectors", [16, [15, "u"], "exclude_element_selectors"], "fieldFilters", [8, "email", [16, [15, "u"], "email"], "phone", [16, [15, "u"], "phone"], "address", [16, [15, "u"], "address"]], "performDataLayerSearch", [15, "y"]]]]]]
                            ],
                            [52, "ba", [1, [15, "z"],
                                [16, [15, "z"], "elements"]
                            ]],
                            [52, "bb", [8]],
                            [22, [1, [15, "ba"],
                                    [18, [17, [15, "ba"], "length"], 0]
                                ],
                                [46, [53, [41, "bc"],
                                    [53, [41, "bd"],
                                        [3, "bd", 0],
                                        [63, [7, "bd"],
                                            [23, [15, "bd"],
                                                [17, [15, "ba"], "length"]
                                            ],
                                            [33, [15, "bd"],
                                                [3, "bd", [0, [15, "bd"], 1]]
                                            ],
                                            [46, [53, [52, "be", [16, [15, "ba"],
                                                    [15, "bd"]
                                                ]],
                                                ["r", [15, "bb"],
                                                    [15, "be"], "email"
                                                ],
                                                [22, [16, [15, "c"], "enableAutoPiiOnPhoneAndAddress"],
                                                    [46, [53, ["r", [15, "bb"],
                                                            [15, "be"], "phone_number"
                                                        ],
                                                        [3, "bc", ["r", [15, "bc"],
                                                            [15, "be"], "first_name"
                                                        ]],
                                                        [3, "bc", ["r", [15, "bc"],
                                                            [15, "be"], "last_name"
                                                        ]],
                                                        [3, "bc", ["r", [15, "bc"],
                                                            [15, "be"], "country"
                                                        ]],
                                                        [3, "bc", ["r", [15, "bc"],
                                                            [15, "be"], "postal_code"
                                                        ]]
                                                    ]]
                                                ]
                                            ]]
                                        ]
                                    ],
                                    [22, [1, [15, "bc"],
                                            [28, [16, [15, "bb"], "address"]]
                                        ],
                                        [46, [53, [43, [15, "bb"], "address", [15, "bc"]]]]
                                    ]
                                ]]
                            ],
                            [22, [15, "y"],
                                [46, [53, [52, "bc", [1, [15, "z"],
                                        [16, [15, "z"], "dataLayerSearchResults"]
                                    ]],
                                    [22, [15, "bc"],
                                        [46, [53, [52, "bd", ["o", [15, "bc"],
                                                [15, "bb"]
                                            ]],
                                            [22, [15, "bd"],
                                                [46, [53, [2, [15, "w"], "setHitData", [7, [15, "k"],
                                                    [15, "bd"]
                                                ]]]]
                                            ]
                                        ]]
                                    ]
                                ]]
                            ],
                            [2, [15, "w"], "setMetadata", [7, [17, [15, "j"], "USER_DATA_FROM_AUTOMATIC"],
                                [15, "bb"]
                            ]],
                            [36, [15, "bb"]]
                        ]],
                        ["i", [15, "t"],
                            [51, "", [7, "w"],
                                [2, [15, "w"], "setMetadata", [7, [17, [15, "j"], "USER_DATA_FROM_AUTOMATIC_GETTER"],
                                    [15, "v"]
                                ]]
                            ]
                        ]
                    ]]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ogt_ads_datatos", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", [17, [15, "a"], "instanceDestinationId"]],
                ["b", [15, "c"], "ads_customer_data_terms", true],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [52, "__module_gtagMetadataSchema", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [52, "b", "add_tag_timing"],
                        [52, "c", "allow_ad_personalization"],
                        [52, "d", "batch_on_navigation"],
                        [52, "e", "client_id_source"],
                        [52, "f", "consent_event_id"],
                        [52, "g", "consent_priority_id"],
                        [52, "h", "consent_state"],
                        [52, "i", "consent_updated"],
                        [52, "j", "conversion_linker_enabled"],
                        [52, "k", "cookie_options"],
                        [52, "l", "create_dc_join"],
                        [52, "m", "create_fpm_join"],
                        [52, "n", "create_google_join"],
                        [52, "o", "em_event"],
                        [52, "p", "endpoint_for_debug"],
                        [52, "q", "enhanced_client_id_source"],
                        [52, "r", "enhanced_match_result"],
                        [52, "s", "euid_mode_enabled"],
                        [52, "t", "event_start_timestamp_ms"],
                        [52, "u", "event_usage"],
                        [52, "v", "extra_tag_experiment_ids"],
                        [52, "w", "add_parameter"],
                        [52, "x", "attribution_reporting_experiment"],
                        [52, "y", "counting_method"],
                        [52, "z", "send_as_iframe"],
                        [52, "ba", "parameter_order"],
                        [52, "bb", "parsed_target"],
                        [52, "bc", "ga4_collection_subdomain"],
                        [52, "bd", "gbraid_cookie_marked"],
                        [52, "be", "hit_type"],
                        [52, "bf", "hit_type_override"],
                        [52, "bg", "is_config_command"],
                        [52, "bh", "is_consent_update"],
                        [52, "bi", "is_conversion"],
                        [52, "bj", "is_ecommerce"],
                        [52, "bk", "is_external_event"],
                        [52, "bl", "is_fallback_aw_conversion_ping_allowed"],
                        [52, "bm", "is_first_visit"],
                        [52, "bn", "is_first_visit_conversion"],
                        [52, "bo", "is_fl_fallback_conversion_flow_allowed"],
                        [52, "bp", "is_fpm_encryption"],
                        [52, "bq", "is_fpm_split"],
                        [52, "br", "is_gcp_conversion"],
                        [52, "bs", "is_google_signals_allowed"],
                        [52, "bt", "is_merchant_center"],
                        [52, "bu", "is_new_to_site"],
                        [52, "bv", "is_server_side_destination"],
                        [52, "bw", "is_session_start"],
                        [52, "bx", "is_session_start_conversion"],
                        [52, "by", "is_sgtm_ga_ads_conversion_study_control_group"],
                        [52, "bz", "is_sgtm_prehit"],
                        [52, "ca", "is_sgtm_service_worker"],
                        [52, "cb", "is_sw_selected"],
                        [52, "cc", "is_syn"],
                        [52, "cd", "join_id"],
                        [52, "ce", "join_timer_sec"],
                        [52, "cf", "tunnel_updated"],
                        [52, "cg", "promises"],
                        [52, "ch", "record_aw_latency"],
                        [52, "ci", "redact_ads_data"],
                        [52, "cj", "redact_click_ids"],
                        [52, "ck", "remarketing_only"],
                        [52, "cl", "send_ccm_parallel_ping"],
                        [52, "cm", "send_fledge_experiment"],
                        [52, "cn", "send_ccm_parallel_test_ping"],
                        [52, "co", "send_to_destinations"],
                        [52, "cp", "send_to_targets"],
                        [52, "cq", "send_user_data_hit"],
                        [52, "cr", "source_canonical_id"],
                        [52, "cs", "speculative"],
                        [52, "ct", "speculative_in_message"],
                        [52, "cu", "suppress_script_load"],
                        [52, "cv", "syn_or_mod"],
                        [52, "cw", "transient_ecsid"],
                        [52, "cx", "transmission_type"],
                        [52, "cy", "user_data"],
                        [52, "cz", "user_data_from_automatic"],
                        [52, "da", "user_data_from_automatic_getter"],
                        [52, "db", "user_data_from_code"],
                        [52, "dc", "user_data_from_manual"],
                        [52, "dd", "user_data_mode"],
                        [52, "de", "user_id_updated"],
                        [36, [8, "ADD_TAG_TIMING", [15, "b"], "ALLOW_AD_PERSONALIZATION", [15, "c"], "BATCH_ON_NAVIGATION", [15, "d"], "CLIENT_ID_SOURCE", [15, "e"], "CONSENT_EVENT_ID", [15, "f"], "CONSENT_PRIORITY_ID", [15, "g"], "CONSENT_STATE", [15, "h"], "CONSENT_UPDATED", [15, "i"], "CONVERSION_LINKER_ENABLED", [15, "j"], "COOKIE_OPTIONS", [15, "k"], "CREATE_DC_JOIN", [15, "l"], "CREATE_FPM_JOIN", [15, "m"], "CREATE_GOOGLE_JOIN", [15, "n"], "EM_EVENT", [15, "o"], "ENDPOINT_FOR_DEBUG", [15, "p"], "ENHANCED_CLIENT_ID_SOURCE", [15, "q"], "ENHANCED_MATCH_RESULT", [15, "r"], "EUID_MODE_ENABLED", [15, "s"], "EVENT_START_TIMESTAMP_MS", [15, "t"], "EVENT_USAGE", [15, "u"], "EXTRA_TAG_EXPERIMENT_IDS", [15, "v"], "FL_ADD_PARAMETER", [15, "w"], "FL_ATTRIBUTION_REPORTING_EXPERIMENT", [15, "x"], "FL_COUNTING_METHOD", [15, "y"], "FL_ENABLE_DYNAMIC_TAG_FOR_CONSENTED_USERS", [15, "z"], "FL_PARAMETER_ORDER", [15, "ba"], "FL_PARSED_TARGET", [15, "bb"], "GA4_COLLECTION_SUBDOMAIN", [15, "bc"], "GBRAID_COOKIE_MARKED", [15, "bd"], "HIT_TYPE", [15, "be"], "HIT_TYPE_OVERRIDE", [15, "bf"], "IS_CONFIG_COMMAND", [15, "bg"], "IS_CONSENT_UPDATE", [15, "bh"], "IS_CONVERSION", [15, "bi"], "IS_ECOMMERCE", [15, "bj"], "IS_EXTERNAL_EVENT", [15, "bk"], "IS_FALLBACK_AW_CONVERSION_PING_ALLOWED", [15, "bl"], "IS_FIRST_VISIT", [15, "bm"], "IS_FIRST_VISIT_CONVERSION", [15, "bn"], "IS_FL_FALLBACK_CONVERSION_FLOW_ALLOWED", [15, "bo"], "IS_FPM_ENCRYPTION", [15, "bp"], "IS_FPM_SPLIT", [15, "bq"], "IS_GCP_CONVERSION", [15, "br"], "IS_GOOGLE_SIGNALS_ALLOWED", [15, "bs"], "IS_MERCHANT_CENTER", [15, "bt"], "IS_NEW_TO_SITE", [15, "bu"], "IS_SERVER_SIDE_DESTINATION", [15, "bv"], "IS_SESSION_START", [15, "bw"], "IS_SESSION_START_CONVERSION", [15, "bx"], "IS_SGTM_GA_ADS_CONVERSION_STUDY_CONTROL_GROUP", [15, "by"], "IS_SGTM_PREHIT", [15, "bz"], "IS_SGTM_SERVICE_WORKER", [15, "ca"], "IS_SW_SELECTED", [15, "cb"], "IS_SYNTHETIC_EVENT", [15, "cc"], "JOIN_ID", [15, "cd"], "JOIN_TIMER_SEC", [15, "ce"], "POSTMESSAGE_UPDATED", [15, "cf"], "PROMISES", [15, "cg"], "RECORD_AW_LATENCY", [15, "ch"], "REDACT_ADS_DATA", [15, "ci"], "REDACT_CLICK_IDS", [15, "cj"], "REMARKETING_ONLY", [15, "ck"], "SEND_CCM_PARALLEL_PING", [15, "cl"], "SEND_FLEDGE_EXPERIMENT", [15, "cm"], "SEND_FPM_PARALLEL_TEST_PING", [15, "cn"], "SEND_TO_DESTINATIONS", [15, "co"], "SEND_TO_TARGETS", [15, "cp"], "SEND_USER_DATA_HIT", [15, "cq"], "SOURCE_CANONICAL_ID", [15, "cr"], "SPECULATIVE", [15, "cs"], "SPECULATIVE_IN_MESSAGE", [15, "ct"], "SUPPRESS_SCRIPT_LOAD", [15, "cu"], "SYNTHETIC_OR_MODIFIED_EVENT", [15, "cv"], "TRANSIENT_ECSID", [15, "cw"], "TRANSMISSION_TYPE", [15, "cx"], "USER_DATA", [15, "cy"], "USER_DATA_FROM_AUTOMATIC", [15, "cz"], "USER_DATA_FROM_AUTOMATIC_GETTER", [15, "da"], "USER_DATA_FROM_CODE", [15, "db"], "USER_DATA_FROM_MANUAL", [15, "dc"], "USER_DATA_MODE", [15, "dd"], "USER_ID_UPDATED", [15, "de"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]],
            [52, "__module_ccdEmFormActivity", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [50, "l", [46, "m", "n", "o"],
                            [22, [1, [15, "k"],
                                    [20, [15, "n"],
                                        [44]
                                    ]
                                ],
                                [46, [53, [3, "n", [20, [2, [15, "m"], "indexOf", [7, "AW-"]], 0]]]]
                            ],
                            ["d", [15, "m"],
                                [51, "", [7, "p"],
                                    [52, "q", [2, [15, "p"], "getEventName", [7]]],
                                    [52, "r", [30, [20, [15, "q"],
                                            [15, "h"]
                                        ],
                                        [20, [15, "q"],
                                            [15, "g"]
                                        ]
                                    ]],
                                    [22, [30, [28, [15, "r"]],
                                            [28, [2, [15, "p"], "getMetadata", [7, [15, "i"]]]]
                                        ],
                                        [46, [53, [36]]]
                                    ],
                                    [22, ["c", [15, "m"],
                                            [15, "f"]
                                        ],
                                        [46, [53, [2, [15, "p"], "abort", [7]],
                                            [36]
                                        ]]
                                    ],
                                    [22, [15, "k"],
                                        [46, [53, [22, [1, [28, [15, "n"]],
                                                [2, [15, "p"], "getMetadata", [7, [15, "j"]]]
                                            ],
                                            [46, [53, [2, [15, "p"], "abort", [7]],
                                                [36]
                                            ]]
                                        ]]]
                                    ],
                                    [2, [15, "p"], "setMetadata", [7, [15, "e"], false]],
                                    [22, [28, [15, "o"]],
                                        [46, [53, [2, [15, "p"], "setHitData", [7, "form_id", [44]]],
                                            [2, [15, "p"], "setHitData", [7, "form_name", [44]]],
                                            [2, [15, "p"], "setHitData", [7, "form_destination", [44]]],
                                            [2, [15, "p"], "setHitData", [7, "form_length", [44]]],
                                            [22, [20, [15, "q"],
                                                    [15, "g"]
                                                ],
                                                [46, [53, [2, [15, "p"], "setHitData", [7, "form_submit_text", [44]]]]],
                                                [46, [22, [20, [15, "q"],
                                                        [15, "h"]
                                                    ],
                                                    [46, [53, [2, [15, "p"], "setHitData", [7, "first_field_id", [44]]],
                                                        [2, [15, "p"], "setHitData", [7, "first_field_name", [44]]],
                                                        [2, [15, "p"], "setHitData", [7, "first_field_type", [44]]],
                                                        [2, [15, "p"], "setHitData", [7, "first_field_position", [44]]]
                                                    ]]
                                                ]]
                                            ]
                                        ]]
                                    ]
                                ]
                            ]
                        ],
                        [52, "b", [13, [41, "$0"],
                            [3, "$0", ["require", "internal.getFlags"]],
                            ["$0"]
                        ]],
                        [52, "c", ["require", "internal.getProductSettingsParameter"]],
                        [52, "d", ["require", "internal.registerCcdCallback"]],
                        [52, "e", "speculative"],
                        [52, "f", "ae_block_form"],
                        [52, "g", "form_submit"],
                        [52, "h", "form_start"],
                        [52, "i", "em_event"],
                        [52, "j", "form_event_canceled"],
                        [52, "k", [28, [28, [16, [15, "b"], "enableFormSkipValidation"]]]],
                        [36, [8, "registerFormActivityCallback", [15, "l"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]]

        ],
        "entities": {
            "__ccd_add_1p_data": {
                "2": true,
                "4": true
            },
            "__ccd_ads_first": {
                "2": true,
                "4": true
            },
            "__ccd_ads_last": {
                "2": true,
                "4": true
            },
            "__ccd_em_form": {
                "2": true,
                "4": true
            },
            "__ccd_pre_auto_pii": {
                "2": true,
                "4": true
            },
            "__e": {
                "2": true,
                "4": true
            },
            "__ogt_1p_data_v2": {
                "2": true
            },
            "__ogt_ads_datatos": {
                "2": true
            }


        },
        "blob": {
            "1": "2"
        },
        "permissions": {
            "__ccd_add_1p_data": {
                "read_container_data": {}
            },
            "__ccd_ads_first": {},
            "__ccd_ads_last": {},
            "__ccd_em_form": {
                "access_template_storage": {},
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.formInteract", "gtm.formSubmit"]
                },
                "detect_form_submit_events": {
                    "allowWaitForTags": ""
                },
                "detect_form_interaction_events": {}
            },
            "__ccd_pre_auto_pii": {
                "detect_user_provided_data": {
                    "limitDataSources": true,
                    "allowAutoDataSources": true,
                    "allowManualDataSources": false,
                    "allowCodeDataSources": false
                },
                "access_consent": {
                    "consentTypes": [{
                        "consentType": "ad_storage",
                        "read": true,
                        "write": false
                    }, {
                        "consentType": "analytics_storage",
                        "read": true,
                        "write": false
                    }]
                }
            },
            "__e": {
                "read_event_data": {
                    "eventDataAccess": "specific",
                    "keyPatterns": ["event"]
                }
            },
            "__ogt_1p_data_v2": {
                "detect_user_provided_data": {
                    "limitDataSources": true,
                    "allowAutoDataSources": true,
                    "allowManualDataSources": false,
                    "allowCodeDataSources": false
                }
            },
            "__ogt_ads_datatos": {}


        }



        ,
        "security_groups": {
            "google": [
                "__ccd_add_1p_data",
                "__ccd_ads_first",
                "__ccd_ads_last",
                "__ccd_em_form",
                "__ccd_pre_auto_pii",
                "__e",
                "__ogt_1p_data_v2",
                "__ogt_ads_datatos"

            ]


        }



    };

    var productSettings = {
        "AW-959136034": {
            "preAutoPii": true
        }
    };




    var h, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        da = function(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            throw Error("Cannot find global object");
        },
        ea = da(this),
        fa = function(a, b) {
            if (b) a: {
                for (var c = ea, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c)) break a;
                    c = c[f]
                }
                var g = d[d.length - 1],
                    k = c[g],
                    m = b(k);m != k && m != null && ca(c, g, {
                    configurable: !0,
                    writable: !0,
                    value: m
                })
            }
        };
    fa("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.C = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.C
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    var ia = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ka;
    if (typeof Object.setPrototypeOf == "function") ka = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                ma = pa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        ka = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ka,
        ra = function(a, b) {
            a.prototype = ia(b.prototype);
            a.prototype.constructor = a;
            if (qa) qa(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Oo = b.prototype
        },
        l = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        sa = function(a) {
            for (var b,
                    c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ta = function(a) {
            return a instanceof Array ? a : sa(l(a))
        },
        va = function(a) {
            return ua(a, a)
        },
        ua = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        wa = typeof Object.assign == "function" ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        };
    fa("Object.assign", function(a) {
        return a || wa
    });
    var xa = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ya = this || self;
    var za = function(a, b) {
        this.type = a;
        this.data = b
    };
    var Aa = function() {
        this.map = {};
        this.C = {}
    };
    Aa.prototype.get = function(a) {
        return this.map["dust." + a]
    };
    Aa.prototype.set = function(a, b) {
        var c = "dust." + a;
        this.C.hasOwnProperty(c) || (this.map[c] = b)
    };
    Aa.prototype.has = function(a) {
        return this.map.hasOwnProperty("dust." + a)
    };
    Aa.prototype.remove = function(a) {
        var b = "dust." + a;
        this.C.hasOwnProperty(b) || delete this.map[b]
    };
    var Ba = function(a, b) {
        var c = [],
            d;
        for (d in a.map)
            if (a.map.hasOwnProperty(d)) {
                var e = d.substring(5);
                switch (b) {
                    case 1:
                        c.push(e);
                        break;
                    case 2:
                        c.push(a.map[d]);
                        break;
                    case 3:
                        c.push([e, a.map[d]])
                }
            }
        return c
    };
    Aa.prototype.na = function() {
        return Ba(this, 1)
    };
    Aa.prototype.ic = function() {
        return Ba(this, 2)
    };
    Aa.prototype.Mb = function() {
        return Ba(this, 3)
    };
    var Ca = function() {};
    Ca.prototype.reset = function() {};
    var Da = function(a, b) {
        this.O = a;
        this.parent = b;
        this.C = this.H = void 0;
        this.Ec = !1;
        this.N = function(c, d, e) {
            return c.apply(d, e)
        };
        this.values = new Aa
    };
    Da.prototype.add = function(a, b) {
        Fa(this, a, b, !1)
    };
    var Fa = function(a, b, c, d) {
        if (!a.Ec)
            if (d) {
                var e = a.values;
                e.set(b, c);
                e.C["dust." + b] = !0
            } else a.values.set(b, c)
    };
    Da.prototype.set = function(a, b) {
        this.Ec || (!this.values.has(a) && this.parent && this.parent.has(a) ? this.parent.set(a, b) : this.values.set(a, b))
    };
    Da.prototype.get = function(a) {
        return this.values.has(a) ? this.values.get(a) : this.parent ? this.parent.get(a) : void 0
    };
    Da.prototype.has = function(a) {
        return !!this.values.has(a) || !(!this.parent || !this.parent.has(a))
    };
    var Ga = function(a) {
        var b = new Da(a.O, a);
        a.H && (b.H = a.H);
        b.N = a.N;
        b.C = a.C;
        return b
    };
    Da.prototype.Rd = function() {
        return this.O
    };
    Da.prototype.Ma = function() {
        this.Ec = !0
    };
    var Ia = function(a, b, c) {
        var d;
        d = Error.call(this, a.message);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.Mk = a;
        this.xk = c === void 0 ? !1 : c;
        this.debugInfo = [];
        this.C = b
    };
    ra(Ia, Error);
    var Ja = function(a) {
        return a instanceof Ia ? a : new Ia(a, void 0, !0)
    };

    function Ka(a, b) {
        for (var c, d = l(b), e = d.next(); !e.done && !(c = La(a, e.value), c instanceof za); e = d.next());
        return c
    }

    function La(a, b) {
        try {
            var c = l(b),
                d = c.next().value,
                e = sa(c),
                f = a.get(String(d));
            if (!f || typeof f.invoke !== "function") throw Ja(Error("Attempting to execute non-function " + b[0] + "."));
            return f.invoke.apply(f, [a].concat(ta(e)))
        } catch (k) {
            var g = a.H;
            g && g(k, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw k;
        }
    };
    var Ma = function() {
        this.H = new Ca;
        this.C = new Da(this.H)
    };
    h = Ma.prototype;
    h.Rd = function() {
        return this.H
    };
    h.execute = function(a) {
        return this.Ki([a].concat(ta(xa.apply(1, arguments))))
    };
    h.Ki = function() {
        for (var a, b = l(xa.apply(0, arguments)), c = b.next(); !c.done; c = b.next()) a = La(this.C, c.value);
        return a
    };
    h.Tl = function(a) {
        var b = xa.apply(1, arguments),
            c = Ga(this.C);
        c.C = a;
        for (var d, e = l(b), f = e.next(); !f.done; f = e.next()) d = La(c, f.value);
        return d
    };
    h.Ma = function() {
        this.C.Ma()
    };
    var Na = function() {
        this.sa = !1;
        this.V = new Aa
    };
    h = Na.prototype;
    h.get = function(a) {
        return this.V.get(a)
    };
    h.set = function(a, b) {
        this.sa || this.V.set(a, b)
    };
    h.has = function(a) {
        return this.V.has(a)
    };
    h.remove = function(a) {
        this.sa || this.V.remove(a)
    };
    h.na = function() {
        return this.V.na()
    };
    h.ic = function() {
        return this.V.ic()
    };
    h.Mb = function() {
        return this.V.Mb()
    };
    h.Ma = function() {
        this.sa = !0
    };
    h.Ec = function() {
        return this.sa
    };

    function Oa() {
        for (var a = Pa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Qa() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Pa, Sa;

    function Ta(a) {
        Pa = Pa || Qa();
        Sa = Sa || Oa();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | k >> 6,
                q = k & 63;
            e || (q = 64, d || (p = 64));
            b.push(Pa[m], Pa[n], Pa[p], Pa[q])
        }
        return b.join("")
    }

    function Va(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Sa[n];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Pa = Pa || Qa();
        Sa = Sa || Oa();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (k === 64 && e === -1) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            g !== 64 && (c += String.fromCharCode(f << 4 & 240 | g >> 2), k !== 64 && (c += String.fromCharCode(g << 6 & 192 | k)))
        }
    };
    var Wa = {};

    function Xa(a, b) {
        Wa[a] = Wa[a] || [];
        Wa[a][b] = !0
    }

    function Ya(a) {
        var b = Wa[a];
        if (!b || b.length === 0) return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++) e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
        d > 0 && c.push(String.fromCharCode(d));
        return Ta(c.join("")).replace(/\.+$/, "")
    }

    function Za() {
        for (var a = [], b = Wa.fdr || [], c = 0; c < b.length; c++) b[c] && a.push(c);
        return a.length > 0 ? a : void 0
    };

    function $a() {}

    function ab(a) {
        return typeof a === "function"
    }

    function bb(a) {
        return typeof a === "string"
    }

    function cb(a) {
        return typeof a === "number" && !isNaN(a)
    }

    function db(a) {
        return Array.isArray(a) ? a : [a]
    }

    function eb(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function fb(a, b) {
        if (!cb(a) || !cb(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }

    function gb(a, b) {
        for (var c = new hb, d = 0; d < a.length; d++) c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e])) return !0;
        return !1
    }

    function ib(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function jb(a) {
        return !!a && (Object.prototype.toString.call(a) === "[object Arguments]" || Object.prototype.hasOwnProperty.call(a, "callee"))
    }

    function kb(a) {
        return Math.round(Number(a)) || 0
    }

    function mb(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }

    function nb(a) {
        var b = [];
        if (Array.isArray(a))
            for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }

    function ob(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }

    function pb() {
        return new Date(Date.now())
    }

    function qb() {
        return pb().getTime()
    }
    var hb = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    hb.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    hb.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    hb.prototype.contains = function(a) {
        return this.get(a) !== void 0
    };

    function rb(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }

    function sb(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }

    function tb(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }

    function ub(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    }

    function vb(a, b) {
        return a.length >= b.length && a.substring(0, b.length) === b
    }

    function wb(a, b) {
        var c = z;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e])) return;
            d = d[a[e]];
            if (b.indexOf(d) >= 0) return
        }
        return d
    }

    function xb(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
    var yb = /^\w{1,9}$/;

    function zb(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        ib(a, function(d, e) {
            yb.test(d) && e && c.push(d)
        });
        return c.join(b)
    }

    function Ab(a, b) {
        function c() {
            e && ++d === b && (e(), e = null, c.done = !0)
        }
        var d = 0,
            e = a;
        c.done = !1;
        return c
    }

    function Bb(a) {
        if (!a) return a;
        var b = a;
        try {
            b = decodeURIComponent(a)
        } catch (d) {}
        var c = b.split(",");
        return c.length === 2 && c[0] === c[1] ? c[0] : a
    }

    function Cb(a, b, c) {
        function d(n) {
            var p = n.split("=")[0];
            if (a.indexOf(p) < 0) return n;
            if (c !== void 0) return p + "=" + c
        }

        function e(n) {
            return n.split("&").map(d).filter(function(p) {
                return p !== void 0
            }).join("&")
        }
        var f = b.href.split(/[?#]/)[0],
            g = b.search,
            k = b.hash;
        g[0] === "?" && (g = g.substring(1));
        k[0] === "#" && (k = k.substring(1));
        g = e(g);
        k = e(k);
        g !== "" && (g = "?" + g);
        k !== "" && (k = "#" + k);
        var m = "" + f + g + k;
        m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
        return m
    }

    function Db(a) {
        for (var b = 0; b < 3; ++b) try {
            var c = decodeURIComponent(a).replace(/\+/g, " ");
            if (c === a) break;
            a = c
        } catch (d) {
            return ""
        }
        return a
    };
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var Eb = globalThis.trustedTypes,
        Fb;

    function Gb() {
        var a = null;
        if (!Eb) return a;
        try {
            var b = function(c) {
                return c
            };
            a = Eb.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }

    function Hb() {
        Fb === void 0 && (Fb = Gb());
        return Fb
    };
    var Ib = function(a) {
        this.C = a
    };
    Ib.prototype.toString = function() {
        return this.C + ""
    };

    function Jb(a) {
        var b = a,
            c = Hb();
        return new Ib(c ? c.createScriptURL(b) : b)
    }

    function Kb(a) {
        if (a instanceof Ib) return a.C;
        throw Error("");
    };
    var Lb = va([""]),
        Mb = ua(["\x00"], ["\\0"]),
        Nb = ua(["\n"], ["\\n"]),
        Ob = ua(["\x00"], ["\\u0000"]);

    function Pb(a) {
        return a.toString().indexOf("`") === -1
    }
    Pb(function(a) {
        return a(Lb)
    }) || Pb(function(a) {
        return a(Mb)
    }) || Pb(function(a) {
        return a(Nb)
    }) || Pb(function(a) {
        return a(Ob)
    });
    var Qb = function(a) {
        this.C = a
    };
    Qb.prototype.toString = function() {
        return this.C
    };
    var Rb = function(a) {
        this.un = a
    };

    function Sb(a) {
        return new Rb(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Tb = [Sb("data"), Sb("http"), Sb("https"), Sb("mailto"), Sb("ftp"), new Rb(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Ub(a) {
        var b;
        b = b === void 0 ? Tb : b;
        if (a instanceof Qb) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof Rb && d.un(a)) return new Qb(a)
        }
    }
    var Vb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Wb(a) {
        var b;
        if (a instanceof Qb)
            if (a instanceof Qb) b = a.C;
            else throw Error("");
        else b = Vb.test(a) ? a : void 0;
        return b
    };

    function Xb(a, b) {
        var c = Wb(b);
        c !== void 0 && (a.action = c)
    };

    function Yb(a, b) {
        throw Error(b === void 0 ? "unexpected value " + a + "!" : b);
    };
    var Zb = function(a) {
        this.C = a
    };
    Zb.prototype.toString = function() {
        return this.C + ""
    };
    var bc = function() {
        this.C = $b[0].toLowerCase()
    };
    bc.prototype.toString = function() {
        return this.C
    };

    function cc(a, b) {
        var c = [new bc];
        if (c.length === 0) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof bc) g = f.C;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return e.indexOf(f) !== 0
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    };
    var dc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function ec(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    var z = window,
        fc = window.history,
        A = document,
        gc = navigator;

    function hc() {
        var a;
        try {
            a = gc.serviceWorker
        } catch (b) {
            return
        }
        return a
    }
    var ic = A.currentScript,
        jc = ic && ic.src;

    function kc(a, b) {
        var c = z[a];
        z[a] = c === void 0 ? b : c;
        return z[a]
    }

    function lc(a) {
        return (gc.userAgent || "").indexOf(a) !== -1
    }

    function mc() {
        return lc("Firefox") || lc("FxiOS")
    }

    function nc() {
        return (lc("GSA") || lc("GoogleApp")) && (lc("iPhone") || lc("iPad"))
    }

    function oc() {
        return lc("Edg/") || lc("EdgA/") || lc("EdgiOS/")
    }
    var pc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        qc = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function rc(a, b, c) {
        b && ib(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function sc(a, b, c, d, e) {
        var f = A.createElement("script");
        rc(f, d, pc);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        var g;
        g = Jb(ec(a));
        f.src = Kb(g);
        var k, m = f.ownerDocument;
        m = m === void 0 ? document : m;
        var n, p, q = (p = (n = m).querySelector) == null ? void 0 : p.call(n, "script[nonce]");
        (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") && f.setAttribute("nonce", k);
        b && (f.onload = b);
        c && (f.onerror = c);
        if (e) e.appendChild(f);
        else {
            var r = A.getElementsByTagName("script")[0] || A.body || A.head;
            r.parentNode.insertBefore(f, r)
        }
        return f
    }

    function tc() {
        if (jc) {
            var a = jc.toLowerCase();
            if (a.indexOf("https://") === 0) return 2;
            if (a.indexOf("http://") === 0) return 3
        }
        return 1
    }

    function uc(a, b, c, d, e, f) {
        f = f === void 0 ? !0 : f;
        var g = e,
            k = !1;
        g || (g = A.createElement("iframe"), k = !0);
        rc(g, c, qc);
        d && ib(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        a !== void 0 && (g.src = a);
        if (k) {
            var m = A.body && A.body.lastChild || A.body || A.head;
            m.parentNode.insertBefore(g, m)
        }
        b && (g.onload = b);
        return g
    }

    function vc(a, b, c, d) {
        return wc(a, b, c, d)
    }

    function xc(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, !!d)
    }

    function yc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }

    function C(a) {
        z.setTimeout(a, 0)
    }

    function zc(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }

    function Ac(a) {
        var b = a.innerText || a.textContent || "";
        b && b !== " " && (b = b.replace(/^[\s\xa0]+/g, ""), b = b.replace(/[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }

    function Bc(a) {
        var b = A.createElement("div"),
            c = b,
            d, e = ec("A<div>" + a + "</div>"),
            f = Hb();
        d = new Zb(f ? f.createHTML(e) : e);
        if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName)) throw Error("");
        var g;
        if (d instanceof Zb) g = d.C;
        else throw Error("");
        c.innerHTML = g;
        b = b.lastChild;
        for (var k = []; b && b.firstChild;) k.push(b.removeChild(b.firstChild));
        return k
    }

    function Cc(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement
        }
        return null
    }

    function Dc(a, b, c) {
        var d;
        try {
            d = gc.sendBeacon && gc.sendBeacon(a)
        } catch (e) {
            Xa("TAGGING", 15)
        }
        d ? b == null || b() : wc(a, b, c)
    }

    function Ec(a, b) {
        try {
            return gc.sendBeacon(a, b)
        } catch (c) {
            Xa("TAGGING", 15)
        }
        return !1
    }
    var Fc = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    };

    function Gc(a, b, c, d, e) {
        if (Hc()) {
            var f = Object.assign({}, Fc);
            b && (f.body = b);
            c && (c.attributionReporting && (f.attributionReporting = c.attributionReporting), c.browsingTopics && (f.browsingTopics = c.browsingTopics), c.credentials && (f.credentials = c.credentials), c.mode && (f.mode = c.mode), c.method && (f.method = c.method));
            try {
                var g = z.fetch(a, f);
                if (g) return g.then(function(m) {
                    m && (m.ok || m.status === 0) ? d == null || d() : e == null || e()
                }).catch(function() {
                    e == null || e()
                }), !0
            } catch (m) {}
        }
        if (c && c.wi) return e == null || e(), !1;
        if (b) {
            var k =
                Ec(a, b);
            k ? d == null || d() : e == null || e();
            return k
        }
        Dc(a, d, e);
        return !0
    }

    function Hc() {
        return typeof z.fetch === "function"
    }

    function Ic(a, b) {
        var c = a[b];
        c && typeof c.animVal === "string" && (c = c.animVal);
        return c
    }

    function Jc() {
        var a = z.performance;
        if (a && ab(a.now)) return a.now()
    }

    function Kc() {
        var a, b = z.performance;
        if (b && b.getEntriesByType) try {
            var c = b.getEntriesByType("navigation");
            c && c.length > 0 && (a = c[0].type)
        } catch (d) {
            return "e"
        }
        if (!a) return "u";
        switch (a) {
            case "navigate":
                return "n";
            case "back_forward":
                return "h";
            case "reload":
                return "r";
            case "prerender":
                return "p";
            default:
                return "x"
        }
    }

    function Lc() {
        return z.performance || void 0
    }

    function Mc() {
        var a = z.webPixelsManager;
        return a ? a.createShopifyExtend !== void 0 : !1
    }
    var wc = function(a, b, c, d) {
        var e = new Image(1, 1);
        rc(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        };
        e.onerror = function() {
            e.onerror = null;
            c && c()
        };
        e.src = a;
        return e
    };

    function Nc(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function Oc(a, b) {
        return this.evaluate(a) === this.evaluate(b)
    }

    function Pc(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function Qc(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        return String(c).indexOf(String(d)) > -1
    }

    function Rc(a, b) {
        var c = String(this.evaluate(a)),
            d = String(this.evaluate(b));
        return c.substring(0, d.length) === d
    }

    function Sc(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        switch (c) {
            case "pageLocation":
                var e = z.location.href;
                d instanceof Na && d.get("stripProtocol") && (e = e.replace(/^https?:\/\//, ""));
                return e
        }
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
    */
    var Tc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Vc = function(a) {
            if (a == null) return String(a);
            var b = Tc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Wc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Xc = function(a) {
            if (!a || Vc(a) != "object" || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Wc(a, "constructor") && !Wc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return b === void 0 ||
                Wc(a, b)
        },
        Yc = function(a, b) {
            var c = b || (Vc(a) == "array" ? [] : {}),
                d;
            for (d in a)
                if (Wc(a, d)) {
                    var e = a[d];
                    Vc(e) == "array" ? (Vc(c[d]) != "array" && (c[d] = []), c[d] = Yc(e, c[d])) : Xc(e) ? (Xc(c[d]) || (c[d] = {}), c[d] = Yc(e, c[d])) : c[d] = e
                }
            return c
        };

    function Zc(a) {
        if (a == void 0 || Array.isArray(a) || Xc(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    }

    function $c(a) {
        return typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0 || typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a)
    };
    var ad = function(a) {
        a = a === void 0 ? [] : a;
        this.V = new Aa;
        this.values = [];
        this.sa = !1;
        for (var b in a) a.hasOwnProperty(b) && ($c(b) ? this.values[Number(b)] = a[Number(b)] : this.V.set(b, a[b]))
    };
    h = ad.prototype;
    h.toString = function(a) {
        if (a && a.indexOf(this) >= 0) return "";
        for (var b = [], c = 0; c < this.values.length; c++) {
            var d = this.values[c];
            d === null || d === void 0 ? b.push("") : d instanceof ad ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    h.set = function(a, b) {
        if (!this.sa)
            if (a === "length") {
                if (!$c(b)) throw Ja(Error("RangeError: Length property must be a valid integer."));
                this.values.length = Number(b)
            } else $c(a) ? this.values[Number(a)] = b : this.V.set(a, b)
    };
    h.get = function(a) {
        return a === "length" ? this.length() : $c(a) ? this.values[Number(a)] : this.V.get(a)
    };
    h.length = function() {
        return this.values.length
    };
    h.na = function() {
        for (var a = this.V.na(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(String(b));
        return a
    };
    h.ic = function() {
        for (var a = this.V.ic(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push(this.values[b]);
        return a
    };
    h.Mb = function() {
        for (var a = this.V.Mb(), b = 0; b < this.values.length; b++) this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
        return a
    };
    h.remove = function(a) {
        $c(a) ? delete this.values[Number(a)] : this.sa || this.V.remove(a)
    };
    h.pop = function() {
        return this.values.pop()
    };
    h.push = function() {
        return this.values.push.apply(this.values, ta(xa.apply(0, arguments)))
    };
    h.shift = function() {
        return this.values.shift()
    };
    h.splice = function(a, b) {
        var c = xa.apply(2, arguments);
        return b === void 0 && c.length === 0 ? new ad(this.values.splice(a)) : new ad(this.values.splice.apply(this.values, [a, b || 0].concat(ta(c))))
    };
    h.unshift = function() {
        return this.values.unshift.apply(this.values, ta(xa.apply(0, arguments)))
    };
    h.has = function(a) {
        return $c(a) && this.values.hasOwnProperty(a) || this.V.has(a)
    };
    h.Ma = function() {
        this.sa = !0;
        Object.freeze(this.values)
    };
    h.Ec = function() {
        return this.sa
    };

    function bd(a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var cd = function(a, b) {
        this.functionName = a;
        this.Qd = b;
        this.V = new Aa;
        this.sa = !1
    };
    h = cd.prototype;
    h.toString = function() {
        return this.functionName
    };
    h.getName = function() {
        return this.functionName
    };
    h.getKeys = function() {
        return new ad(this.na())
    };
    h.invoke = function(a) {
        return this.Qd.call.apply(this.Qd, [new dd(this, a)].concat(ta(xa.apply(1, arguments))))
    };
    h.kb = function(a) {
        var b = xa.apply(1, arguments);
        try {
            return this.invoke.apply(this, [a].concat(ta(b)))
        } catch (c) {}
    };
    h.get = function(a) {
        return this.V.get(a)
    };
    h.set = function(a, b) {
        this.sa || this.V.set(a, b)
    };
    h.has = function(a) {
        return this.V.has(a)
    };
    h.remove = function(a) {
        this.sa || this.V.remove(a)
    };
    h.na = function() {
        return this.V.na()
    };
    h.ic = function() {
        return this.V.ic()
    };
    h.Mb = function() {
        return this.V.Mb()
    };
    h.Ma = function() {
        this.sa = !0
    };
    h.Ec = function() {
        return this.sa
    };
    var ed = function(a, b) {
        cd.call(this, a, b)
    };
    ra(ed, cd);
    var fd = function(a, b) {
        cd.call(this, a, b)
    };
    ra(fd, cd);
    var dd = function(a, b) {
        this.Qd = a;
        this.J = b
    };
    dd.prototype.evaluate = function(a) {
        var b = this.J;
        return Array.isArray(a) ? La(b, a) : a
    };
    dd.prototype.getName = function() {
        return this.Qd.getName()
    };
    dd.prototype.Rd = function() {
        return this.J.Rd()
    };
    var gd = function() {
        this.map = new Map
    };
    gd.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    gd.prototype.get = function(a) {
        return this.map.get(a)
    };
    var hd = function() {
        this.keys = [];
        this.values = []
    };
    hd.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    hd.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (b > -1) return this.values[b]
    };

    function id() {
        try {
            return Map ? new gd : new hd
        } catch (a) {
            return new hd
        }
    };
    var jd = function(a) {
        if (a instanceof jd) return a;
        if (Zc(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.value = a
    };
    jd.prototype.getValue = function() {
        return this.value
    };
    jd.prototype.toString = function() {
        return String(this.value)
    };
    var ld = function(a) {
        this.promise = a;
        this.sa = !1;
        this.V = new Aa;
        this.V.set("then", kd(this));
        this.V.set("catch", kd(this, !0));
        this.V.set("finally", kd(this, !1, !0))
    };
    h = ld.prototype;
    h.get = function(a) {
        return this.V.get(a)
    };
    h.set = function(a, b) {
        this.sa || this.V.set(a, b)
    };
    h.has = function(a) {
        return this.V.has(a)
    };
    h.remove = function(a) {
        this.sa || this.V.remove(a)
    };
    h.na = function() {
        return this.V.na()
    };
    h.ic = function() {
        return this.V.ic()
    };
    h.Mb = function() {
        return this.V.Mb()
    };
    var kd = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        c = c === void 0 ? !1 : c;
        return new ed("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof ed || (d = void 0);
            e instanceof ed || (e = void 0);
            var f = Ga(this.J),
                g = function(m) {
                    return function(n) {
                        try {
                            return c ? (m.invoke(f), a.promise) : m.invoke(f, n)
                        } catch (p) {
                            return Promise.reject(p instanceof Error ? new jd(p) : String(p))
                        }
                    }
                },
                k = a.promise.then(d && g(d), e && g(e));
            return new ld(k)
        })
    };
    ld.prototype.Ma = function() {
        this.sa = !0
    };
    ld.prototype.Ec = function() {
        return this.sa
    };

    function md(a, b, c) {
        var d = id(),
            e = function(g, k) {
                for (var m = g.na(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]))
            },
            f = function(g) {
                if (g === null || g === void 0) return g;
                var k = d.get(g);
                if (k) return k;
                if (g instanceof ad) {
                    var m = [];
                    d.set(g, m);
                    for (var n = g.na(), p = 0; p < n.length; p++) m[n[p]] = f(g.get(n[p]));
                    return m
                }
                if (g instanceof ld) return g.promise.then(function(u) {
                    return md(u, b, 1)
                }, function(u) {
                    return Promise.reject(md(u, b, 1))
                });
                if (g instanceof Na) {
                    var q = {};
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                if (g instanceof ed) {
                    var r = function() {
                        for (var u =
                                xa.apply(0, arguments), t = [], w = 0; w < u.length; w++) t[w] = nd(u[w], b, c);
                        var x = new Da(b ? b.Rd() : new Ca);
                        b && (x.C = b.C);
                        return f(g.invoke.apply(g, [x].concat(ta(t))))
                    };
                    d.set(g, r);
                    e(g, r);
                    return r
                }
                var v = !1;
                switch (c) {
                    case 1:
                        v = !0;
                        break;
                    case 2:
                        v = !1;
                        break;
                    case 3:
                        v = !1;
                        break;
                    default:
                }
                if (g instanceof jd && v) return g.getValue();
                switch (typeof g) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                        return g;
                    case "object":
                        if (g === null) return null
                }
            };
        return f(a)
    }

    function nd(a, b, c) {
        var d = id(),
            e = function(g, k) {
                for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]))
            },
            f = function(g) {
                var k = d.get(g);
                if (k) return k;
                if (Array.isArray(g) || jb(g)) {
                    var m = new ad;
                    d.set(g, m);
                    for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                    return m
                }
                if (Xc(g)) {
                    var p = new Na;
                    d.set(g, p);
                    e(g, p);
                    return p
                }
                if (typeof g === "function") {
                    var q = new ed("", function() {
                        for (var u = xa.apply(0, arguments), t = [], w = 0; w < u.length; w++) t[w] = md(this.evaluate(u[w]), b, c);
                        return f((0, this.J.N)(g, g, t))
                    });
                    d.set(g, q);
                    e(g, q);
                    return q
                }
                var r = typeof g;
                if (g === null || r === "string" || r === "number" || r === "boolean") return g;
                var v = !1;
                switch (c) {
                    case 1:
                        v = !0;
                        break;
                    case 2:
                        v = !1;
                        break;
                    default:
                }
                if (g !== void 0 && v) return new jd(g)
            };
        return f(a)
    };
    var od = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a) {
            for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
            for (var d = 1; d < arguments.length; d++)
                if (arguments[d] instanceof ad)
                    for (var e = arguments[d], f = 0; f < e.length(); f++) b.push(e.get(f));
                else b.push(arguments[d]);
            return new ad(b)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new ad(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = c === void 0 ? 0 : Number(c);
            e < 0 && (e = Math.max(d + e, 0));
            for (var f =
                    e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
            for (var f = e; f >= 0; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new ad(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a) {
            return this.push.apply(this,
                ta(xa.apply(1, arguments)))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Ja(Error("TypeError: Reduce on List with no elements."));
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Ja(Error("TypeError: Reduce on List with no elements."));
            }
            for (var k = f; k < d; k++) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (c !== void 0) e = c;
            else {
                if (d === 0) throw Ja(Error("TypeError: ReduceRight on List with no elements."));
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Ja(Error("TypeError: ReduceRight on List with no elements."));
            }
            for (var k = f; k >= 0; k--) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
            return e
        },
        reverse: function() {
            for (var a = bd(this), b = a.length - 1, c = 0; b >= 0; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            b === void 0 && (b = 0);
            b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
            c = c ===
                void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new ad(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = bd(this);
            b === void 0 ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c) {
            return this.splice.apply(this, [b, c].concat(ta(xa.apply(3, arguments))))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a) {
            return this.unshift.apply(this, ta(xa.apply(1, arguments)))
        }
    };
    var pd = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        qd = new za("break"),
        rd = new za("continue");

    function sd(a, b) {
        return this.evaluate(a) + this.evaluate(b)
    }

    function td(a, b) {
        return this.evaluate(a) && this.evaluate(b)
    }

    function ud(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (!(f instanceof ad)) throw Error("Error: Non-List argument given to Apply instruction.");
        if (d === null || d === void 0) throw Ja(Error("TypeError: Can't read property " + e + " of " + d + "."));
        var g = typeof d === "number";
        if (typeof d === "boolean" || g) {
            if (e === "toString") {
                if (g && f.length()) {
                    var k = md(f.get(0));
                    try {
                        return d.toString(k)
                    } catch (t) {}
                }
                return d.toString()
            }
            throw Ja(Error("TypeError: " + d + "." + e + " is not a function."));
        }
        if (typeof d ===
            "string") {
            if (pd.hasOwnProperty(e)) {
                var m = 2;
                m = 1;
                var n = md(f, void 0, m);
                return nd(d[e].apply(d, n), this.J)
            }
            throw Ja(Error("TypeError: " + e + " is not a function"));
        }
        if (d instanceof ad) {
            if (d.has(e)) {
                var p = d.get(String(e));
                if (p instanceof ed) {
                    var q = bd(f);
                    return p.invoke.apply(p, [this.J].concat(ta(q)))
                }
                throw Ja(Error("TypeError: " + e + " is not a function"));
            }
            if (od.supportedMethods.indexOf(e) >=
                0) {
                var r = bd(f);
                return od[e].call.apply(od[e], [d, this.J].concat(ta(r)))
            }
        }
        if (d instanceof ed || d instanceof Na || d instanceof ld) {
            if (d.has(e)) {
                var v = d.get(e);
                if (v instanceof ed) {
                    var u = bd(f);
                    return v.invoke.apply(v, [this.J].concat(ta(u)))
                }
                throw Ja(Error("TypeError: " + e + " is not a function"));
            }
            if (e === "toString") return d instanceof ed ? d.getName() : d.toString();
            if (e === "hasOwnProperty") return d.has(f.get(0))
        }
        if (d instanceof jd && e === "toString") return d.toString();
        throw Ja(Error("TypeError: Object has no '" +
            e + "' property."));
    }

    function vd(a, b) {
        a = this.evaluate(a);
        if (typeof a !== "string") throw Error("Invalid key name given for assignment.");
        var c = this.J;
        if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    }

    function wd() {
        var a = xa.apply(0, arguments),
            b = Ga(this.J),
            c = Ka(b, a);
        if (c instanceof za) return c
    }

    function xd() {
        return qd
    }

    function yd(a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof za) return d
        }
    }

    function zd() {
        for (var a = this.J, b = 0; b < arguments.length - 1; b += 2) {
            var c = arguments[b];
            if (typeof c === "string") {
                var d = this.evaluate(arguments[b + 1]);
                Fa(a, c, d, !0)
            }
        }
    }

    function Ad() {
        return rd
    }

    function Bd(a, b) {
        return new za(a, this.evaluate(b))
    }

    function Cd(a, b) {
        for (var c = xa.apply(2, arguments), d = new ad, e = this.evaluate(b), f = 0; f < e.length; f++) d.push(e[f]);
        var g = [51, a, d].concat(ta(c));
        this.J.add(a, this.evaluate(g))
    }

    function Dd(a, b) {
        return this.evaluate(a) / this.evaluate(b)
    }

    function Ed(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b),
            e = c instanceof jd,
            f = d instanceof jd;
        return e || f ? e && f ? c.getValue() === d.getValue() : !1 : c == d
    }

    function Fd() {
        for (var a, b = 0; b < arguments.length; b++) a = this.evaluate(arguments[b]);
        return a
    }

    function Gd(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = Ka(f, d);
            if (g instanceof za) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
        }
    }

    function Hd(a, b, c) {
        if (typeof b === "string") return Gd(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof Na || b instanceof ld || b instanceof ad || b instanceof ed) {
            var d = b.na(),
                e = d.length;
            return Gd(a, function() {
                return e
            }, function(f) {
                return d[f]
            }, c)
        }
    }

    function Id(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.J;
        return Hd(function(k) {
            g.set(d, k);
            return g
        }, e, f)
    }

    function Jd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.J;
        return Hd(function(k) {
            var m = Ga(g);
            Fa(m, d, k, !0);
            return m
        }, e, f)
    }

    function Kd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.J;
        return Hd(function(k) {
            var m = Ga(g);
            m.add(d, k);
            return m
        }, e, f)
    }

    function Ld(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.J;
        return Md(function(k) {
            g.set(d, k);
            return g
        }, e, f)
    }

    function Nd(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.J;
        return Md(function(k) {
            var m = Ga(g);
            Fa(m, d, k, !0);
            return m
        }, e, f)
    }

    function Od(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c),
            g = this.J;
        return Md(function(k) {
            var m = Ga(g);
            m.add(d, k);
            return m
        }, e, f)
    }

    function Md(a, b, c) {
        if (typeof b === "string") return Gd(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof ad) return Gd(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw Ja(Error("The value is not iterable."));
    }

    function Pd(a, b, c, d) {
        function e(q, r) {
            for (var v = 0; v < f.length(); v++) {
                var u = f.get(v);
                r.add(u, q.get(u))
            }
        }
        var f = this.evaluate(a);
        if (!(f instanceof ad)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.J,
            k = this.evaluate(d),
            m = Ga(g);
        for (e(g, m); La(m, b);) {
            var n = Ka(m, k);
            if (n instanceof za) {
                if (n.type === "break") break;
                if (n.type === "return") return n
            }
            var p = Ga(g);
            e(m, p);
            La(p, c);
            m = p
        }
    }

    function Qd(a, b) {
        var c = xa.apply(2, arguments),
            d = this.J,
            e = this.evaluate(b);
        if (!(e instanceof ad)) throw Error("Error: non-List value given for Fn argument names.");
        return new ed(a, function() {
            return function() {
                var f = xa.apply(0, arguments),
                    g = Ga(d);
                g.C === void 0 && (g.C = this.J.C);
                for (var k = [], m = 0; m < f.length; m++) {
                    var n = this.evaluate(f[m]);
                    k[m] = n
                }
                for (var p = e.get("length"), q = 0; q < p; q++) q < k.length ? g.add(e.get(q), k[q]) : g.add(e.get(q), void 0);
                g.add("arguments", new ad(k));
                var r = Ka(g, c);
                if (r instanceof za) return r.type ===
                    "return" ? r.data : r
            }
        }())
    }

    function Rd(a) {
        var b = this.evaluate(a),
            c = this.J;
        if (Sd && !c.has(b)) throw new ReferenceError(b + " is not defined.");
        return c.get(b)
    }

    function Td(a, b) {
        var c, d = this.evaluate(a),
            e = this.evaluate(b);
        if (d === void 0 || d === null) throw Ja(Error("TypeError: Cannot read properties of " + d + " (reading '" + e + "')"));
        if (d instanceof Na || d instanceof ld || d instanceof ad || d instanceof ed) c = d.get(e);
        else if (typeof d === "string") e === "length" ? c = d.length : $c(e) && (c = d[e]);
        else if (d instanceof jd) return;
        return c
    }

    function Ud(a, b) {
        return this.evaluate(a) > this.evaluate(b)
    }

    function Vd(a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    }

    function Wd(a, b) {
        var c = this.evaluate(a),
            d = this.evaluate(b);
        c instanceof jd && (c = c.getValue());
        d instanceof jd && (d = d.getValue());
        return c === d
    }

    function Xd(a, b) {
        return !Wd.call(this, a, b)
    }

    function Yd(a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = Ka(this.J, d);
        if (e instanceof za) return e
    }
    var Sd = !1;

    function Zd(a, b) {
        return this.evaluate(a) < this.evaluate(b)
    }

    function $d(a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    }

    function ae() {
        for (var a = new ad, b = 0; b < arguments.length; b++) {
            var c = this.evaluate(arguments[b]);
            a.push(c)
        }
        return a
    }

    function be() {
        for (var a = new Na, b = 0; b < arguments.length - 1; b += 2) {
            var c = String(this.evaluate(arguments[b])),
                d = this.evaluate(arguments[b + 1]);
            a.set(c, d)
        }
        return a
    }

    function ce(a, b) {
        return this.evaluate(a) % this.evaluate(b)
    }

    function de(a, b) {
        return this.evaluate(a) * this.evaluate(b)
    }

    function ee(a) {
        return -this.evaluate(a)
    }

    function fe(a) {
        return !this.evaluate(a)
    }

    function ge(a, b) {
        return !Ed.call(this, a, b)
    }

    function he() {
        return null
    }

    function ie(a, b) {
        return this.evaluate(a) || this.evaluate(b)
    }

    function je(a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    }

    function ke(a) {
        return this.evaluate(a)
    }

    function le() {
        return xa.apply(0, arguments)
    }

    function me(a) {
        return new za("return", this.evaluate(a))
    }

    function ne(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (d === null || d === void 0) throw Ja(Error("TypeError: Can't set property " + e + " of " + d + "."));
        (d instanceof ed || d instanceof ad || d instanceof Na) && d.set(String(e), f);
        return f
    }

    function oe(a, b) {
        return this.evaluate(a) - this.evaluate(b)
    }

    function pe(a, b, c) {
        var d = this.evaluate(a),
            e = this.evaluate(b),
            f = this.evaluate(c);
        if (!Array.isArray(e) || !Array.isArray(f)) throw Error("Error: Malformed switch instruction.");
        for (var g, k = !1, m = 0; m < e.length; m++)
            if (k || d === this.evaluate(e[m]))
                if (g = this.evaluate(f[m]), g instanceof za) {
                    var n = g.type;
                    if (n === "break") return;
                    if (n === "return" || n === "continue") return g
                } else k = !0;
        if (f.length === e.length + 1 && (g = this.evaluate(f[f.length - 1]), g instanceof za && (g.type === "return" || g.type === "continue"))) return g
    }

    function qe(a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    }

    function re(a) {
        var b = this.evaluate(a);
        return b instanceof ed ? "function" : typeof b
    }

    function se() {
        for (var a = this.J, b = 0; b < arguments.length; b++) {
            var c = arguments[b];
            typeof c !== "string" || a.add(c, void 0)
        }
    }

    function te(a, b, c, d) {
        var e = this.evaluate(d);
        if (this.evaluate(c)) {
            var f = Ka(this.J, e);
            if (f instanceof za) {
                if (f.type === "break") return;
                if (f.type === "return") return f
            }
        }
        for (; this.evaluate(a);) {
            var g = Ka(this.J, e);
            if (g instanceof za) {
                if (g.type === "break") break;
                if (g.type === "return") return g
            }
            this.evaluate(b)
        }
    }

    function ue(a) {
        return ~Number(this.evaluate(a))
    }

    function ve(a, b) {
        return Number(this.evaluate(a)) << Number(this.evaluate(b))
    }

    function we(a, b) {
        return Number(this.evaluate(a)) >> Number(this.evaluate(b))
    }

    function xe(a, b) {
        return Number(this.evaluate(a)) >>> Number(this.evaluate(b))
    }

    function ye(a, b) {
        return Number(this.evaluate(a)) & Number(this.evaluate(b))
    }

    function ze(a, b) {
        return Number(this.evaluate(a)) ^ Number(this.evaluate(b))
    }

    function Ae(a, b) {
        return Number(this.evaluate(a)) | Number(this.evaluate(b))
    }

    function Be() {}

    function Ce(a, b, c) {
        try {
            var d = this.evaluate(b);
            if (d instanceof za) return d
        } catch (k) {
            if (!(k instanceof Ia && k.xk)) throw k;
            var e = Ga(this.J);
            a !== "" && (k instanceof Ia && (k = k.Mk), e.add(a, new jd(k)));
            var f = this.evaluate(c),
                g = Ka(e, f);
            if (g instanceof za) return g
        }
    }

    function De(a, b) {
        var c, d;
        try {
            d = this.evaluate(a)
        } catch (f) {
            if (!(f instanceof Ia && f.xk)) throw f;
            c = f
        }
        var e = this.evaluate(b);
        if (e instanceof za) return e;
        if (c) throw c;
        if (d instanceof za) return d
    };
    var Fe = function() {
        this.C = new Ma;
        Ee(this)
    };
    Fe.prototype.execute = function(a) {
        return this.C.Ki(a)
    };
    var Ee = function(a) {
        var b = function(c, d) {
            var e = new fd(String(c), d);
            e.Ma();
            a.C.C.set(String(c), e)
        };
        b("map", be);
        b("and", Nc);
        b("contains", Qc);
        b("equals", Oc);
        b("or", Pc);
        b("startsWith", Rc);
        b("variable", Sc)
    };
    var He = function() {
        this.H = !1;
        this.C = new Ma;
        Ge(this);
        this.H = !0
    };
    He.prototype.execute = function(a) {
        return Ie(this.C.Ki(a))
    };
    var Je = function(a, b, c) {
        return Ie(a.C.Tl(b, c))
    };
    He.prototype.Ma = function() {
        this.C.Ma()
    };
    var Ge = function(a) {
        var b = function(c, d) {
            var e = String(c),
                f = new fd(e, d);
            f.Ma();
            a.C.C.set(e, f)
        };
        b(0, sd);
        b(1, td);
        b(2, ud);
        b(3, vd);
        b(56, ye);
        b(57, ve);
        b(58, ue);
        b(59, Ae);
        b(60, we);
        b(61, xe);
        b(62, ze);
        b(53, wd);
        b(4, xd);
        b(5, yd);
        b(68, Ce);
        b(52, zd);
        b(6, Ad);
        b(49, Bd);
        b(7, ae);
        b(8, be);
        b(9, yd);
        b(50, Cd);
        b(10, Dd);
        b(12, Ed);
        b(13, Fd);
        b(67, De);
        b(51, Qd);
        b(47, Id);
        b(54, Jd);
        b(55, Kd);
        b(63, Pd);
        b(64, Ld);
        b(65, Nd);
        b(66, Od);
        b(15, Rd);
        b(16, Td);
        b(17, Td);
        b(18, Ud);
        b(19, Vd);
        b(20, Wd);
        b(21, Xd);
        b(22, Yd);
        b(23, Zd);
        b(24, $d);
        b(25, ce);
        b(26, de);
        b(27,
            ee);
        b(28, fe);
        b(29, ge);
        b(45, he);
        b(30, ie);
        b(32, je);
        b(33, je);
        b(34, ke);
        b(35, ke);
        b(46, le);
        b(36, me);
        b(43, ne);
        b(37, oe);
        b(38, pe);
        b(39, qe);
        b(40, re);
        b(44, Be);
        b(41, se);
        b(42, te)
    };
    He.prototype.Rd = function() {
        return this.C.Rd()
    };

    function Ie(a) {
        if (a instanceof za || a instanceof ed || a instanceof ad || a instanceof Na || a instanceof ld || a instanceof jd || a === null || a === void 0 || typeof a === "string" || typeof a === "number" || typeof a === "boolean") return a
    };
    var Ke = function(a) {
        this.message = a
    };

    function Le(a) {
        var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a];
        return b === void 0 ? new Ke("Value " + a + " can not be encoded in web-safe base64 dictionary.") : b
    };

    function Me(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var Ne = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Oe(a, b) {
        for (var c = "", d = !0; a > 7;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "" + Le(e) + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "" + Le(a | b) + c
    };
    var Se = function() {
        function a(b) {
            return {
                toString: function() {
                    return b
                }
            }
        }
        return {
            ql: a("consent"),
            Ui: a("convert_case_to"),
            Vi: a("convert_false_to"),
            Wi: a("convert_null_to"),
            Xi: a("convert_true_to"),
            Yi: a("convert_undefined_to"),
            lo: a("debug_mode_metadata"),
            wa: a("function"),
            Fh: a("instance_name"),
            Wl: a("live_only"),
            Xl: a("malware_disabled"),
            METADATA: a("metadata"),
            am: a("original_activity_id"),
            xo: a("original_vendor_template_id"),
            wo: a("once_on_load"),
            Zl: a("once_per_event"),
            dk: a("once_per_load"),
            yo: a("priority_override"),
            zo: a("respected_consent_types"),
            mk: a("setup_tags"),
            rg: a("tag_id"),
            qk: a("teardown_tags")
        }
    }();
    var of ;
    var pf = [],
        qf = [],
        rf = [],
        sf = [],
        tf = [],
        uf, vf, wf;

    function xf(a) {
        wf = wf || a
    }

    function yf() {
        for (var a = data.resource || {}, b = a.macros || [], c = 0; c < b.length; c++) pf.push(b[c]);
        for (var d = a.tags || [], e = 0; e < d.length; e++) sf.push(d[e]);
        for (var f = a.predicates || [], g = 0; g < f.length; g++) rf.push(f[g]);
        for (var k = a.rules || [], m = 0; m < k.length; m++) {
            for (var n = k[m], p = {}, q = 0; q < n.length; q++) {
                var r = n[q][0];
                p[r] = Array.prototype.slice.call(n[q], 1);
                r !== "if" && r !== "unless" || zf(p[r])
            }
            qf.push(p)
        }
    }

    function zf(a) {}
    var Af, Bf = [],
        Cf = [];

    function Df(a, b) {
        var c = {};
        c[Se.wa] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }

    function Ef(a, b, c) {
        try {
            return vf(Ff(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    }

    function Gf(a) {
        var b = a[Se.wa];
        if (!b) throw Error("Error: No function name given for function call.");
        return !!uf[b]
    }
    var Ff = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Hf(a[e], b, c));
            return d
        },
        Hf = function(a, b, c) {
            if (Array.isArray(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Hf(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = pf[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var k = String(g[Se.Fh]);
                        try {
                            var m = Ff(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = If(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: k
                            });
                            Af && (d = Af.wm(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), k), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Hf(a[n], b, c)] = Hf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Hf(a[q], b, c);
                            wf && (p = p || wf.rn(r));
                            d.push(r)
                        }
                        return wf && p ? wf.Bm(d) : d.join("");
                    case "escape":
                        d = Hf(a[1], b, c);
                        if (wf && Array.isArray(a[1]) && a[1][0] === "macro" && wf.sn(a)) return wf.In(d);
                        d = String(d);
                        for (var v = 2; v < a.length; v++) Ze[a[v]] && (d = Ze[a[v]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!sf[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return {
                            Bk: a[2],
                            index: u
                        };
                    case "zb":
                        var t = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        t[Se.wa] = a[1];
                        var w = Ef(t, b, c),
                            x = !!a[4];
                        return x || w !== 2 ? x !== (w === 1) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        If = function(a, b) {
            var c = a[Se.wa],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = uf[c],
                f = b && b.type === 2 && (d == null ? void 0 : d.reportMacroDiscrepancy) &&
                e && Bf.indexOf(c) !== -1,
                g = {},
                k = {},
                m;
            for (m in a) a.hasOwnProperty(m) && vb(m, "vtp_") && (e && (g[m] = a[m]), !e || f) && (k[m.substring(4)] = a[m]);
            e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (b.name == null) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (q == null) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = pf[q];
                                    break;
                                case 1:
                                    r = sf[q];
                                    break;
                                default:
                                    n = "";
                                    break a
                            }
                            var v = r && r[Se.Fh];
                            n = v ? String(v) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var u, t, w;
            if (f && Cf.indexOf(c) === -1) {
                Cf.push(c);
                var x = qb();
                u = e(g);
                var y = qb() - x,
                    B = qb();
                t = of (c, k, b);
                w = y - (qb() - B)
            } else if (e && (u = e(g)), !e || f) t = of (c, k, b);
            f && d && (d.reportMacroDiscrepancy(d.id, c, void 0, !0), Zc(u) ? (Array.isArray(u) ? Array.isArray(t) : Xc(u) ? Xc(t) : typeof u === "function" ? typeof t === "function" : u === t) || d.reportMacroDiscrepancy(d.id, c) : u !== t && d.reportMacroDiscrepancy(d.id, c), w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
            return e ? u : t
        };
    var Jf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.permissionId = a;
        this.parameters = b;
        this.name = "PermissionError"
    };
    ra(Jf, Error);
    Jf.prototype.getMessage = function() {
        return this.message
    };

    function Kf(a, b) {
        if (Array.isArray(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Kf(a[c], b[c])
        }
    };

    function Lf() {
        return function(a, b) {
            var c;
            var d = Mf;
            a instanceof Ia ? (a.C = d, c = a) : c = new Ia(a, d);
            var e = c;
            b && e.debugInfo.push(b);
            throw e;
        }
    }

    function Mf(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; b > 0; b--) cb(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };

    function Nf(a) {
        function b(r) {
            for (var v = 0; v < r.length; v++) d[r[v]] = !0
        }
        for (var c = [], d = [], e = Of(a), f = 0; f < qf.length; f++) {
            var g = qf[f],
                k = Pf(g, e);
            if (k) {
                for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                b(g.block || [])
            } else k === null && b(g.block || []);
        }
        for (var p = [], q = 0; q < sf.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p
    }

    function Pf(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (e === 0) return !1;
            if (e === 2) return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var k = b(f[g]);
            if (k === 2) return null;
            if (k === 1) return !1
        }
        return !0
    }

    function Of(a) {
        var b = [];
        return function(c) {
            b[c] === void 0 && (b[c] = Ef(rf[c], a));
            return b[c]
        }
    };

    function Qf(a, b) {
        b[Se.Ui] && typeof a === "string" && (a = b[Se.Ui] === 1 ? a.toLowerCase() : a.toUpperCase());
        b.hasOwnProperty(Se.Wi) && a === null && (a = b[Se.Wi]);
        b.hasOwnProperty(Se.Yi) && a === void 0 && (a = b[Se.Yi]);
        b.hasOwnProperty(Se.Xi) && a === !0 && (a = b[Se.Xi]);
        b.hasOwnProperty(Se.Vi) && a === !1 && (a = b[Se.Vi]);
        return a
    };
    var Rf = function() {
            this.C = {}
        },
        Tf = function(a, b) {
            var c = Sf.C,
                d;
            (d = c.C)[a] != null || (d[a] = []);
            c.C[a].push(function() {
                return b.apply(null, ta(xa.apply(0, arguments)))
            })
        };

    function Uf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d), g += "."
                } catch (k) {
                    g = typeof k === "string" ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + "."
                }
                if (!f) throw new Jf(c, d, g);
            }
    }

    function Vf(a, b, c) {
        return function(d) {
            if (d) {
                var e = a.C[d],
                    f = a.C.all;
                if (e || f) {
                    var g = c.apply(void 0, [d].concat(ta(xa.apply(1, arguments))));
                    Uf(e, b, d, g);
                    Uf(f, b, d, g)
                }
            }
        }
    };
    var Zf = function() {
            var a = data.permissions || {},
                b = Wf.ctid,
                c = this;
            this.H = {};
            this.C = new Rf;
            var d = {},
                e = {},
                f = Vf(this.C, b, function(g) {
                    return g && d[g] ? d[g].apply(void 0, [g].concat(ta(xa.apply(1, arguments)))) : {}
                });
            ib(a, function(g, k) {
                function m(p) {
                    var q = xa.apply(1, arguments);
                    if (!n[p]) throw Xf(p, {}, "The requested additional permission " + p + " is not configured.");
                    f.apply(null, [p].concat(ta(q)))
                }
                var n = {};
                ib(k, function(p, q) {
                    var r = Yf(p, q);
                    n[p] = r.assert;
                    d[p] || (d[p] = r.P);
                    r.uk && !e[p] && (e[p] = r.uk)
                });
                c.H[g] = function(p,
                    q) {
                    var r = n[p];
                    if (!r) throw Xf(p, {}, "The requested permission " + p + " is not configured.");
                    var v = Array.prototype.slice.call(arguments, 0);
                    r.apply(void 0, v);
                    f.apply(void 0, v);
                    var u = e[p];
                    u && u.apply(null, [m].concat(ta(v.slice(1))))
                }
            })
        },
        $f = function(a) {
            return Sf.H[a] || function() {}
        };

    function Yf(a, b) {
        var c = Df(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Xf;
        try {
            return If(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Jf(e, {}, "Permission " + e + " is unknown.");
                },
                P: function() {
                    throw new Jf(a, {}, "Permission " + a + " is unknown.");
                }
            }
        }
    }

    function Xf(a, b, c) {
        return new Jf(a, b, c)
    };
    var ag = !1;
    var bg = {};
    bg.fl = mb('');
    bg.Gm = mb('');

    function gg(a, b) {
        if (a === "") return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var hg = [],
        ig = {};

    function jg(a) {
        return hg[a] === void 0 ? !1 : hg[a]
    };
    var kg = [];

    function lg(a) {
        switch (a) {
            case 0:
                return 0;
            case 48:
                return 10;
            case 49:
                return 11;
            case 50:
                return 1;
            case 51:
                return 2;
            case 52:
                return 7;
            case 72:
                return 3;
            case 73:
                return 12;
            case 105:
                return 4;
            case 107:
                return 5;
            case 125:
                return 9;
            case 126:
                return 6
        }
    }

    function mg(a, b) {
        kg[a] = b;
        var c = lg(a);
        c !== void 0 && (hg[c] = b)
    }

    function G(a) {
        mg(a, !0)
    }
    G(37);
    G(33);
    G(34);
    G(35);
    G(54);
    G(98);
    G(136);
    G(17);
    G(144);
    G(135);
    G(74);
    G(109);
    G(56);
    G(6);
    G(100);
    G(131);
    G(93);
    G(82);
    G(73);
    G(106);
    G(150);
    G(122);
    G(19);
    G(70);
    G(104);
    G(145);
    G(107);
    mg(22, !1), G(23);
    ig[1] = gg('1', 6E4);
    ig[3] = gg('10', 1);
    ig[2] = gg('', 50);
    G(28);
    G(10);
    G(81);
    G(132);
    G(112);
    G(148);
    G(126);
    G(117);
    G(26);
    G(68);
    G(69);
    G(125);
    G(49);
    G(85);
    G(92);
    G(102);
    G(143);
    G(91);
    G(124);
    G(105);
    G(86);
    G(30);
    G(21);
    G(53);
    G(13);
    G(141);
    G(142);
    G(101);
    G(87);
    G(11);
    G(62);
    G(14);
    G(57);
    G(79);
    G(128);
    G(113);
    G(99);



    function I(a) {
        return !!kg[a]
    }

    function ng(a, b) {
        for (var c = !1, d = !1, e = 0; c === d;)
            if (c = ((Math.random() * 4294967296 | 0) & 1) === 0, d = ((Math.random() * 4294967296 | 0) & 1) === 0, e++, e > 30) return;
        c ? G(b) : G(a)
    };
    var pg = {},
        qg = (pg.uaa = !0, pg.uab = !0, pg.uafvl = !0, pg.uamb = !0, pg.uam = !0, pg.uap = !0, pg.uapv = !0, pg.uaw = !0, pg);
    var yg = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = a,
                    e = b[c];
                if (!wg.exec(e)) throw Error("Invalid key wildcard");
                var f = e.indexOf(".*"),
                    g = f !== -1 && f === e.length - 2,
                    k = g ? e.slice(0, e.length - 2) : e,
                    m;
                a: if (d.length === 0) m = !1;
                    else {
                        for (var n = d.split("."), p = 0; p < n.length; p++)
                            if (!xg.exec(n[p])) {
                                m = !1;
                                break a
                            }
                        m = !0
                    }
                if (!m || k.length > d.length || !g && d.length !== e.length ? 0 : g ? vb(d, k) && (d === k || d.charAt(k.length) === ".") : d === k) return !0
            }
            return !1
        },
        xg = /^[a-z$_][\w-$]*$/i,
        wg = /^(?:[a-z_$][a-z-_$0-9]*\.)*[a-z_$][a-z-_$0-9]*(?:\.\*)?$/i;
    var zg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Ag(a, b) {
        var c = String(a),
            d = String(b),
            e = c.length - d.length;
        return e >= 0 && c.indexOf(d, e) === e
    }

    function Bg(a, b) {
        return String(a).split(",").indexOf(String(b)) >= 0
    }
    var Cg = new hb;

    function Dg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + String(d),
                f = Cg.get(e);
            f || (f = new RegExp(b, d), Cg.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Eg(a, b) {
        return String(a).indexOf(String(b)) >= 0
    }

    function Fg(a, b) {
        return String(a) === String(b)
    }

    function Gg(a, b) {
        return Number(a) >= Number(b)
    }

    function Hg(a, b) {
        return Number(a) <= Number(b)
    }

    function Ig(a, b) {
        return Number(a) > Number(b)
    }

    function Jg(a, b) {
        return Number(a) < Number(b)
    }

    function Kg(a, b) {
        return vb(String(a), String(b))
    };
    var Rg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Sg = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        };

    function Tg(a, b) {
        for (var c = ["input:!*"], d = 0; d < c.length; d++) {
            var e = Rg.exec(c[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = e[2] === "!",
                k = e[3],
                m = b[d];
            if (m == null) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if (k !== "*") {
                var n = typeof m;
                m instanceof ed ? n = "Fn" : m instanceof ad ? n = "List" : m instanceof Na ? n = "PixieMap" : m instanceof ld ? n = "PixiePromise" : m instanceof jd && (n = "OpaqueValue");
                if (n !== k) throw Error("Error in " + a + ". Argument " + f + " has type " + ((Sg[n] || n) + ", which does not match required type ") +
                    ((Sg[k] || k) + "."));
            }
        }
    }

    function J(a, b, c) {
        for (var d = [], e = l(c), f = e.next(); !f.done; f = e.next()) {
            var g = f.value;
            g instanceof ed ? d.push("function") : g instanceof ad ? d.push("Array") : g instanceof Na ? d.push("Object") : g instanceof ld ? d.push("Promise") : g instanceof jd ? d.push("OpaqueValue") : d.push(typeof g)
        }
        return Error("Argument error in " + a + ". Expected argument types [" + (b.join(",") + "], but received [") + (d.join(",") + "]."))
    }

    function Ug(a) {
        return a instanceof Na
    }

    function Vg(a) {
        return Ug(a) || a === null || Wg(a)
    }

    function Xg(a) {
        return a instanceof ed
    }

    function Yg(a) {
        return Xg(a) || a === null || Wg(a)
    }

    function Zg(a) {
        return a instanceof ad
    }

    function $g(a) {
        return a instanceof jd
    }

    function ah(a) {
        return typeof a === "string"
    }

    function bh(a) {
        return ah(a) || a === null || Wg(a)
    }

    function ch(a) {
        return typeof a === "boolean"
    }

    function dh(a) {
        return ch(a) || a === null || Wg(a)
    }

    function eh(a) {
        return typeof a === "number"
    }

    function Wg(a) {
        return a === void 0
    };

    function fh(a) {
        return "" + a
    }

    function gh(a, b) {
        var c = [];
        return c
    };

    function hh(a, b) {
        var c = new ed(a, function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = this.evaluate(d[e]);
            try {
                return b.apply(this, d)
            } catch (g) {
                throw Ja(g);
            }
        });
        c.Ma();
        return c
    }

    function ih(a, b) {
        var c = new Na,
            d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                ab(e) ? c.set(d, hh(a + "_" + d, e)) : Xc(e) ? c.set(d, ih(a + "_" + d, e)) : (cb(e) || bb(e) || typeof e === "boolean") && c.set(d, e)
            }
        c.Ma();
        return c
    };

    function jh(a, b) {
        if (!ah(a)) throw J(this.getName(), ["string"], arguments);
        if (!bh(b)) throw J(this.getName(), ["string", "undefined"], arguments);
        var c = {},
            d = new Na;
        return d = ih("AssertApiSubject",
            c)
    };

    function kh(a, b) {
        if (!bh(b)) throw J(this.getName(), ["string", "undefined"], arguments);
        if (a instanceof ld) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new Na;
        return d = ih("AssertThatSubject", c)
    };

    function lh(a) {
        return function() {
            for (var b = xa.apply(0, arguments), c = [], d = this.J, e = 0; e < b.length; ++e) c.push(md(b[e], d));
            return nd(a.apply(null, c))
        }
    }

    function mh() {
        for (var a = Math, b = nh, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = lh(a[e].bind(a)))
        }
        return c
    };

    function oh(a) {
        return a != null && vb(a, "__cvt_")
    };

    function ph(a) {
        var b;
        return b
    };

    function qh(a) {
        var b;
        return b
    };

    function rh(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };

    function sh(a) {
        try {
            return encodeURIComponent(String(a))
        } catch (b) {}
    };
    var th = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                if (a === void 0) return;
                a = a[b[c]]
            }
            return a
        },
        uh = function(a, b) {
            var c = b.preHit;
            if (c) {
                var d = a[0];
                switch (d) {
                    case "hitData":
                        return a.length < 2 ? void 0 : th(c.getHitData(a[1]), a.slice(2));
                    case "metadata":
                        return a.length < 2 ? void 0 : th(c.getMetadata(a[1]), a.slice(2));
                    case "eventName":
                        return c.getEventName();
                    case "destinationId":
                        return c.getDestinationId();
                    default:
                        throw Error(d + " is not a valid field that can be accessed\n                      from PreHit data.");
                }
            }
        },
        wh = function(a, b) {
            if (a) {
                if (a.contextValue !== void 0) {
                    var c;
                    a: {
                        var d = a.contextValue,
                            e = d.keyParts;
                        if (e && e.length !== 0) {
                            var f = d.namespaceType;
                            switch (f) {
                                case 1:
                                    c = uh(e, b);
                                    break a;
                                case 2:
                                    var g = b.macro;
                                    c = g ? g[e[0]] : void 0;
                                    break a;
                                default:
                                    throw Error("Unknown Namespace Type used: " + f);
                            }
                        }
                        c = void 0
                    }
                    return c
                }
                if (a.booleanExpressionValue !== void 0) return vh(a.booleanExpressionValue, b);
                if (a.booleanValue !== void 0) return !!a.booleanValue;
                if (a.stringValue !== void 0) return String(a.stringValue);
                if (a.integerValue !== void 0) return Number(a.integerValue);
                if (a.doubleValue !== void 0) return Number(a.doubleValue);
                throw Error("Unknown field used for variable of type ExpressionValue:" + a);
            }
        },
        vh = function(a, b) {
            var c = a.args;
            if (!Array.isArray(c) || c.length === 0) throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
            var d = function(g) {
                return wh(g, b)
            };
            switch (a.type) {
                case 1:
                    for (var e = 0; e < c.length; e++)
                        if (d(c[e])) return !0;
                    return !1;
                case 2:
                    for (var f = 0; f < c.length; f++)
                        if (!d(c[f])) return !1;
                    return c.length > 0;
                case 3:
                    return !d(c[0]);
                case 4:
                    return Dg(d(c[0]), d(c[1]), !1);
                case 5:
                    return Fg(d(c[0]), d(c[1]));
                case 6:
                    return Kg(d(c[0]), d(c[1]));
                case 7:
                    return Ag(d(c[0]), d(c[1]));
                case 8:
                    return Eg(d(c[0]), d(c[1]));
                case 9:
                    return Jg(d(c[0]), d(c[1]));
                case 10:
                    return Hg(d(c[0]), d(c[1]));
                case 11:
                    return Ig(d(c[0]), d(c[1]));
                case 12:
                    return Gg(d(c[0]), d(c[1]));
                case 13:
                    return Bg(d(c[0]), String(d(c[1])));
                default:
                    throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 14.');
            }
        };

    function xh(a) {
        if (!bh(a)) throw J(this.getName(), ["string|undefined"], arguments);
    };

    function yh(a, b) {
        if (!eh(a) || !eh(b)) throw J(this.getName(), ["number", "number"], arguments);
        return fb(a, b)
    };

    function zh() {
        return (new Date).getTime()
    };

    function Ah(a) {
        if (a === null) return "null";
        if (a instanceof ad) return "array";
        if (a instanceof ed) return "function";
        if (a instanceof jd) {
            var b = a.getValue();
            if ((b == null ? void 0 : b.constructor) === void 0 || b.constructor.name === void 0) {
                var c = String(b);
                return c.substring(8, c.length - 1)
            }
            return String(b.constructor.name)
        }
        return typeof a
    };

    function Bh(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (ag || bg.fl) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return nd(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(md(c))
            }),
            publicName: "JSON"
        }
    };

    function Ch(a) {
        return kb(md(a, this.J))
    };

    function Dh(a) {
        return Number(md(a, this.J))
    };

    function Eh(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a.toString()
    };

    function Fh(a, b, c) {
        var d = null,
            e = !1;
        return e ? d : null
    };
    var nh = "floor ceil round max min abs pow sqrt".split(" ");

    function Gh() {
        var a = {};
        return {
            Sm: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            Zk: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }

    function Hh(a, b) {
        return function() {
            return ed.prototype.invoke.apply(a, [b].concat(ta(xa.apply(0, arguments))))
        }
    }

    function Ih(a, b) {
        if (!ah(a)) throw J(this.getName(), ["string", "any"], arguments);
    }

    function Jh(a, b) {
        if (!ah(a) || !Ug(b)) throw J(this.getName(), ["string", "PixieMap"], arguments);
    };
    var Kh = {};
    var Lh = function(a) {
        var b = new Na;
        if (a instanceof ad)
            for (var c = a.na(), d = 0; d < c.length; d++) {
                var e = c[d];
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof ed)
                for (var f = a.na(), g = 0; g < f.length; g++) {
                    var k = f[g];
                    b.set(k, a.get(k))
                } else
                    for (var m = 0; m < a.length; m++) b.set(m, a[m]);
        return b
    };
    Kh.keys = function(a) {
        Tg(this.getName(), arguments);
        if (a instanceof ad || a instanceof ed || typeof a === "string") a = Lh(a);
        if (a instanceof Na || a instanceof ld) return new ad(a.na());
        return new ad
    };
    Kh.values = function(a) {
        Tg(this.getName(), arguments);
        if (a instanceof ad || a instanceof ed || typeof a === "string") a = Lh(a);
        if (a instanceof Na || a instanceof ld) return new ad(a.ic());
        return new ad
    };
    Kh.entries = function(a) {
        Tg(this.getName(), arguments);
        if (a instanceof ad || a instanceof ed || typeof a === "string") a = Lh(a);
        if (a instanceof Na || a instanceof ld) return new ad(a.Mb().map(function(b) {
            return new ad(b)
        }));
        return new ad
    };
    Kh.freeze = function(a) {
        (a instanceof Na || a instanceof ld || a instanceof ad || a instanceof ed) && a.Ma();
        return a
    };
    Kh.delete = function(a, b) {
        if (a instanceof Na && !a.Ec()) return a.remove(b), !0;
        return !1
    };

    function K(a, b) {
        var c = xa.apply(2, arguments),
            d = a.J.C;
        if (!d) throw Error("Missing program state.");
        if (d.On) {
            try {
                d.vk.apply(null, [b].concat(ta(c)))
            } catch (e) {
                throw Xa("TAGGING", 21), e;
            }
            return
        }
        d.vk.apply(null, [b].concat(ta(c)))
    };
    var Mh = function() {
        this.H = {};
        this.C = {};
        this.N = !0;
    };
    Mh.prototype.get = function(a, b) {
        var c = this.contains(a) ? this.H[a] : void 0;
        return c
    };
    Mh.prototype.contains = function(a) {
        return this.H.hasOwnProperty(a)
    };
    Mh.prototype.add = function(a, b, c) {
        if (this.contains(a)) throw Error("Attempting to add a function which already exists: " + a + ".");
        if (this.C.hasOwnProperty(a)) throw Error("Attempting to add an API with an existing private API name: " + a + ".");
        this.H[a] = c ? void 0 : ab(b) ? hh(a, b) : ih(a, b)
    };

    function Nh(a, b) {
        var c = void 0;
        return c
    };

    function Oh(a, b) {}
    Oh.K = "internal.safeInvoke";

    function Ph() {
        var a = {};
        return a
    };
    var L = {
            m: {
                ya: "ad_personalization",
                R: "ad_storage",
                T: "ad_user_data",
                X: "analytics_storage",
                yb: "region",
                Sb: "consent_updated",
                ce: "wait_for_update",
                bj: "app_remove",
                cj: "app_store_refund",
                dj: "app_store_subscription_cancel",
                ej: "app_store_subscription_convert",
                fj: "app_store_subscription_renew",
                wl: "consent_update",
                Pg: "add_payment_info",
                Qg: "add_shipping_info",
                Fc: "add_to_cart",
                Gc: "remove_from_cart",
                Rg: "view_cart",
                nc: "begin_checkout",
                Hc: "select_item",
                Ab: "view_item_list",
                Ub: "select_promotion",
                Bb: "view_promotion",
                Pa: "purchase",
                Ic: "refund",
                Wa: "view_item",
                Sg: "add_to_wishlist",
                xl: "exception",
                gj: "first_open",
                ij: "first_visit",
                ia: "gtag.config",
                eb: "gtag.get",
                jj: "in_app_purchase",
                oc: "page_view",
                yl: "screen_view",
                kj: "session_start",
                zl: "source_update",
                Al: "timing_complete",
                Bl: "track_social",
                Jc: "user_engagement",
                Cl: "user_id_update",
                ee: "gclid_link_decoration_source",
                fe: "gclid_storage_source",
                Cb: "gclgb",
                Qa: "gclid",
                lj: "gclid_len",
                jd: "gclgs",
                kd: "gcllp",
                ld: "gclst",
                ka: "ads_data_redaction",
                he: "gad_source",
                ie: "gad_source_src",
                mj: "ndclid",
                nj: "ngad_source",
                oj: "ngbraid",
                pj: "ngclid",
                qj: "ngclsrc",
                Kc: "gclid_url",
                rj: "gclsrc",
                je: "gbraid",
                md: "wbraid",
                qa: "allow_ad_personalization_signals",
                ke: "allow_custom_scripts",
                me: "allow_direct_google_requests",
                ne: "allow_display_features",
                oe: "allow_enhanced_conversions",
                fb: "allow_google_signals",
                Ea: "allow_interest_groups",
                Dl: "app_id",
                El: "app_installer_id",
                Fl: "app_name",
                Gl: "app_version",
                Db: "auid",
                sj: "auto_detection_enabled",
                qc: "aw_remarketing",
                Rf: "aw_remarketing_only",
                pe: "discount",
                qe: "aw_feed_country",
                se: "aw_feed_language",
                ja: "items",
                te: "aw_merchant_id",
                Tg: "aw_basket_type",
                nd: "campaign_content",
                od: "campaign_id",
                pd: "campaign_medium",
                rd: "campaign_name",
                sd: "campaign",
                ud: "campaign_source",
                vd: "campaign_term",
                mb: "client_id",
                tj: "rnd",
                Ug: "consent_update_type",
                uj: "content_group",
                vj: "content_type",
                nb: "conversion_cookie_prefix",
                wd: "conversion_id",
                za: "conversion_linker",
                Vg: "conversion_linker_disabled",
                rc: "conversion_api",
                Sf: "cookie_deprecation",
                Ra: "cookie_domain",
                Sa: "cookie_expires",
                Xa: "cookie_flags",
                sc: "cookie_name",
                ob: "cookie_path",
                Ja: "cookie_prefix",
                Vb: "cookie_update",
                Lc: "country",
                Fa: "currency",
                Wg: "customer_buyer_stage",
                xd: "customer_lifetime_value",
                Xg: "customer_loyalty",
                Yg: "customer_ltv_bucket",
                yd: "custom_map",
                Zg: "gcldc",
                Mc: "dclid",
                ah: "debug_mode",
                la: "developer_id",
                wj: "disable_merchant_reported_purchases",
                uc: "dc_custom_params",
                xj: "dc_natural_search",
                bh: "dynamic_event_settings",
                eh: "affiliation",
                ue: "checkout_option",
                Tf: "checkout_step",
                fh: "coupon",
                zd: "item_list_name",
                Uf: "list_name",
                yj: "promotions",
                Bd: "shipping",
                Vf: "tax",
                ve: "engagement_time_msec",
                we: "enhanced_client_id",
                xe: "enhanced_conversions",
                gh: "enhanced_conversions_automatic_settings",
                ye: "estimated_delivery_date",
                Wf: "euid_logged_in_state",
                Cd: "event_callback",
                Hl: "event_category",
                pb: "event_developer_id_string",
                Il: "event_label",
                vc: "event",
                ze: "event_settings",
                Ae: "event_timeout",
                Jl: "description",
                Kl: "fatal",
                zj: "experiments",
                Xf: "firebase_id",
                Nc: "first_party_collection",
                Be: "_x_20",
                Fb: "_x_19",
                Aj: "fledge_drop_reason",
                hh: "fledge",
                ih: "flight_error_code",
                jh: "flight_error_message",
                Bj: "fl_activity_category",
                Cj: "fl_activity_group",
                kh: "fl_advertiser_id",
                Dj: "fl_ar_dedupe",
                Ce: "match_id",
                Ej: "fl_random_number",
                Fj: "tran",
                Gj: "u",
                De: "gac_gclid",
                Oc: "gac_wbraid",
                lh: "gac_wbraid_multiple_conversions",
                mh: "ga_restrict_domain",
                nh: "ga_temp_client_id",
                Ll: "ga_temp_ecid",
                wc: "gdpr_applies",
                oh: "geo_granularity",
                Wb: "value_callback",
                Gb: "value_key",
                Pc: "google_analysis_params",
                Qc: "_google_ng",
                Rc: "google_signals",
                ph: "google_tld",
                Ee: "groups",
                qh: "gsa_experiment_id",
                Fe: "gtag_event_feature_usage",
                Hj: "gtm_up",
                Xb: "iframe_state",
                Dd: "ignore_referrer",
                Yf: "internal_traffic_results",
                xc: "is_legacy_converted",
                Yb: "is_legacy_loaded",
                Ge: "is_passthrough",
                Sc: "_lps",
                Ya: "language",
                He: "legacy_developer_id_string",
                Aa: "linker",
                Tc: "accept_incoming",
                Hb: "decorate_forms",
                aa: "domains",
                Zb: "url_position",
                Zf: "merchant_feed_label",
                cg: "merchant_feed_language",
                dg: "merchant_id",
                rh: "method",
                Ml: "name",
                Ij: "navigation_type",
                Ed: "new_customer",
                Ie: "non_interaction",
                Jj: "optimize_id",
                sh: "page_hostname",
                Fd: "page_path",
                Ga: "page_referrer",
                hb: "page_title",
                th: "passengers",
                uh: "phone_conversion_callback",
                Kj: "phone_conversion_country_code",
                vh: "phone_conversion_css_class",
                Lj: "phone_conversion_ids",
                wh: "phone_conversion_number",
                xh: "phone_conversion_options",
                Nl: "_platinum_request_status",
                yh: "_protected_audience_enabled",
                Gd: "quantity",
                Je: "redact_device_info",
                eg: "referral_exclusion_definition",
                no: "_request_start_time",
                rb: "restricted_data_processing",
                Mj: "retoken",
                Ol: "sample_rate",
                fg: "screen_name",
                ac: "screen_resolution",
                Nj: "_script_source",
                Oj: "search_term",
                Ta: "send_page_view",
                yc: "send_to",
                Uc: "server_container_url",
                Hd: "session_duration",
                Ke: "session_engaged",
                gg: "session_engaged_time",
                Ib: "session_id",
                Le: "session_number",
                Me: "_shared_user_id",
                Id: "delivery_postal_code",
                oo: "_tag_firing_delay",
                po: "_tag_firing_time",
                Pl: "temporary_client_id",
                zh: "_timezone",
                hg: "topmost_url",
                Pj: "tracking_id",
                ig: "traffic_type",
                Ha: "transaction_id",
                Jb: "transport_url",
                Ah: "trip_type",
                Ac: "update",
                ib: "url_passthrough",
                Qj: "uptgs",
                Ne: "_user_agent_architecture",
                Oe: "_user_agent_bitness",
                Pe: "_user_agent_full_version_list",
                Qe: "_user_agent_mobile",
                Re: "_user_agent_model",
                Se: "_user_agent_platform",
                Te: "_user_agent_platform_version",
                Ue: "_user_agent_wow64",
                Ia: "user_data",
                jg: "user_data_auto_latency",
                kg: "user_data_auto_meta",
                lg: "user_data_auto_multi",
                mg: "user_data_auto_selectors",
                ng: "user_data_auto_status",
                sb: "user_data_mode",
                Ve: "user_data_settings",
                Ba: "user_id",
                tb: "user_properties",
                Rj: "_user_region",
                Jd: "us_privacy_string",
                ra: "value",
                Bh: "wbraid_multiple_conversions",
                Kd: "_fpm_parameters",
                Dh: "_host_name",
                Yj: "_in_page_command",
                Zj: "_ip_override",
                bk: "_is_passthrough_cid",
                bc: "non_personalized_ads",
                af: "_sst_parameters",
                Eb: "conversion_label",
                oa: "page_location",
                qb: "global_developer_id_string",
                zc: "tc_privacy_string"
            }
        },
        Qh = {},
        Rh = Object.freeze((Qh[L.m.qa] = 1, Qh[L.m.ne] = 1, Qh[L.m.oe] = 1, Qh[L.m.fb] = 1, Qh[L.m.ja] = 1, Qh[L.m.Ra] = 1, Qh[L.m.Sa] = 1, Qh[L.m.Xa] = 1, Qh[L.m.sc] = 1, Qh[L.m.ob] = 1, Qh[L.m.Ja] = 1, Qh[L.m.Vb] = 1, Qh[L.m.yd] = 1, Qh[L.m.la] = 1, Qh[L.m.bh] = 1, Qh[L.m.Cd] = 1, Qh[L.m.ze] = 1, Qh[L.m.Ae] = 1, Qh[L.m.Nc] = 1, Qh[L.m.mh] = 1, Qh[L.m.Pc] = 1, Qh[L.m.Rc] = 1, Qh[L.m.ph] =
            1, Qh[L.m.Ee] = 1, Qh[L.m.Yf] = 1, Qh[L.m.xc] = 1, Qh[L.m.Yb] = 1, Qh[L.m.Aa] = 1, Qh[L.m.eg] = 1, Qh[L.m.rb] = 1, Qh[L.m.Ta] = 1, Qh[L.m.yc] = 1, Qh[L.m.Uc] = 1, Qh[L.m.Hd] = 1, Qh[L.m.gg] = 1, Qh[L.m.Id] = 1, Qh[L.m.Jb] = 1, Qh[L.m.Ac] = 1, Qh[L.m.Ve] = 1, Qh[L.m.tb] = 1, Qh[L.m.af] = 1, Qh));
    Object.freeze([L.m.oa, L.m.Ga, L.m.hb, L.m.Ya, L.m.fg, L.m.Ba, L.m.Xf, L.m.uj]);
    var Sh = {},
        Th = Object.freeze((Sh[L.m.bj] = 1, Sh[L.m.cj] = 1, Sh[L.m.dj] = 1, Sh[L.m.ej] = 1, Sh[L.m.fj] = 1, Sh[L.m.gj] = 1, Sh[L.m.ij] = 1, Sh[L.m.jj] = 1, Sh[L.m.kj] = 1, Sh[L.m.Jc] = 1, Sh)),
        Uh = {},
        Vh = Object.freeze((Uh[L.m.Pg] = 1, Uh[L.m.Qg] = 1, Uh[L.m.Fc] = 1, Uh[L.m.Gc] = 1, Uh[L.m.Rg] = 1, Uh[L.m.nc] = 1, Uh[L.m.Hc] = 1, Uh[L.m.Ab] = 1, Uh[L.m.Ub] = 1, Uh[L.m.Bb] = 1, Uh[L.m.Pa] = 1, Uh[L.m.Ic] = 1, Uh[L.m.Wa] = 1, Uh[L.m.Sg] = 1, Uh)),
        Wh = Object.freeze([L.m.qa, L.m.me, L.m.fb, L.m.Vb, L.m.Nc, L.m.Dd, L.m.Ta, L.m.Ac]),
        Xh = Object.freeze([].concat(ta(Wh))),
        Yh = Object.freeze([L.m.Sa,
            L.m.Ae, L.m.Hd, L.m.gg, L.m.ve
        ]),
        Zh = Object.freeze([].concat(ta(Yh))),
        $h = {},
        ai = ($h[L.m.R] = "1", $h[L.m.X] = "2", $h[L.m.T] = "3", $h[L.m.ya] = "4", $h),
        bi = {},
        ci = Object.freeze((bi.search = "s", bi.youtube = "y", bi.playstore = "p", bi.shopping = "h", bi.ads = "a", bi.maps = "m", bi));
    Object.freeze(L.m);
    var di = {},
        ei = (di[L.m.Sb] = "gcu", di[L.m.Cb] = "gclgb", di[L.m.Qa] = "gclaw", di[L.m.lj] = "gclid_len", di[L.m.jd] = "gclgs", di[L.m.kd] = "gcllp", di[L.m.ld] = "gclst", di[L.m.mj] = "ndclid", di[L.m.nj] = "ngad_source", di[L.m.oj] = "ngbraid", di[L.m.pj] = "ngclid", di[L.m.qj] = "ngclsrc", di[L.m.Db] = "auid", di[L.m.pe] = "dscnt", di[L.m.qe] = "fcntr", di[L.m.se] = "flng", di[L.m.te] = "mid", di[L.m.Tg] = "bttype", di[L.m.mb] = "gacid", di[L.m.Eb] = "label", di[L.m.rc] = "capi", di[L.m.Sf] = "pscdl", di[L.m.Fa] = "currency_code", di[L.m.Wg] = "clobs", di[L.m.xd] = "vdltv",
            di[L.m.Xg] = "clolo", di[L.m.Yg] = "clolb", di[L.m.ah] = "_dbg", di[L.m.ye] = "oedeld", di[L.m.pb] = "edid", di[L.m.Aj] = "fdr", di[L.m.hh] = "fledge", di[L.m.De] = "gac", di[L.m.Oc] = "gacgb", di[L.m.lh] = "gacmcov", di[L.m.wc] = "gdpr", di[L.m.qb] = "gdid", di[L.m.Qc] = "_ng", di[L.m.qh] = "gsaexp", di[L.m.Fe] = "_tu", di[L.m.Xb] = "frm", di[L.m.Ge] = "gtm_up", di[L.m.Sc] = "lps", di[L.m.He] = "did", di[L.m.Zf] = "fcntr", di[L.m.cg] = "flng", di[L.m.dg] = "mid", di[L.m.Ed] = void 0, di[L.m.hb] = "tiba", di[L.m.rb] = "rdp", di[L.m.Ib] = "ecsid", di[L.m.Me] = "ga_uid", di[L.m.Id] =
            "delopc", di[L.m.zc] = "gdpr_consent", di[L.m.Ha] = "oid", di[L.m.Qj] = "uptgs", di[L.m.Ne] = "uaa", di[L.m.Oe] = "uab", di[L.m.Pe] = "uafvl", di[L.m.Qe] = "uamb", di[L.m.Re] = "uam", di[L.m.Se] = "uap", di[L.m.Te] = "uapv", di[L.m.Ue] = "uaw", di[L.m.jg] = "ec_lat", di[L.m.kg] = "ec_meta", di[L.m.lg] = "ec_m", di[L.m.mg] = "ec_sel", di[L.m.ng] = "ec_s", di[L.m.sb] = "ec_mode", di[L.m.Ba] = "userId", di[L.m.Jd] = "us_privacy", di[L.m.ra] = "value", di[L.m.Bh] = "mcov", di[L.m.Dh] = "hn", di[L.m.Yj] = "gtm_ee", di[L.m.bc] = "npa", di[L.m.wd] = null, di[L.m.ac] = null, di[L.m.Ya] =
            null, di[L.m.ja] = null, di[L.m.oa] = null, di[L.m.Ga] = null, di[L.m.hg] = null, di[L.m.Kd] = null, di[L.m.ee] = null, di[L.m.fe] = null, di[L.m.Pc] = null, di);

    function fi(a, b) {
        if (a) {
            var c = a.split("x");
            c.length === 2 && (gi(b, "u_w", c[0]), gi(b, "u_h", c[1]))
        }
    }

    function hi(a) {
        var b = ii;
        b = b === void 0 ? ji : b;
        var c;
        var d = b;
        if (a && a.length) {
            for (var e = [], f = 0; f < a.length; ++f) {
                var g = a[f];
                g && e.push({
                    item_id: d(g),
                    quantity: g.quantity,
                    value: g.price,
                    start_date: g.start_date,
                    end_date: g.end_date
                })
            }
            c = e
        } else c = [];
        var k;
        var m = c;
        if (m) {
            for (var n = [], p = 0; p < m.length; p++) {
                var q = m[p],
                    r = [];
                q && (r.push(ki(q.value)), r.push(ki(q.quantity)), r.push(ki(q.item_id)), r.push(ki(q.start_date)), r.push(ki(q.end_date)), n.push("(" + r.join("*") + ")"))
            }
            k = n.length > 0 ? n.join("") : ""
        } else k = "";
        return k
    }

    function ji(a) {
        return li(a.item_id, a.id, a.item_name)
    }

    function li() {
        for (var a = l(xa.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            if (c !== null && c !== void 0) return c
        }
    }

    function mi(a) {
        if (a && a.length) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
            }
            return b.join(",")
        }
    }

    function gi(a, b, c) {
        c === void 0 || c === null || c === "" && !qg[b] || (a[b] = c)
    }

    function ki(a) {
        return typeof a !== "number" && typeof a !== "string" ? "" : a.toString()
    };
    var oi = {},
        pi = Object.freeze((oi[L.m.ee] = 1, oi[L.m.fe] = 1, oi[L.m.qa] = 1, oi[L.m.me] = 1, oi[L.m.oe] = 1, oi[L.m.Ea] = 1, oi[L.m.qc] = 1, oi[L.m.Rf] = 1, oi[L.m.pe] = 1, oi[L.m.qe] = 1, oi[L.m.se] = 1, oi[L.m.ja] = 1, oi[L.m.te] = 1, oi[L.m.nb] = 1, oi[L.m.za] = 1, oi[L.m.Ra] = 1, oi[L.m.Sa] = 1, oi[L.m.Xa] = 1, oi[L.m.Ja] = 1, oi[L.m.Fa] = 1, oi[L.m.Wg] = 1, oi[L.m.xd] = 1, oi[L.m.Xg] = 1, oi[L.m.Yg] = 1, oi[L.m.la] = 1, oi[L.m.wj] = 1, oi[L.m.xe] = 1, oi[L.m.ye] = 1, oi[L.m.Xf] = 1, oi[L.m.Nc] = 1, oi[L.m.Pc] = 1, oi[L.m.xc] = 1, oi[L.m.Yb] = 1, oi[L.m.Ya] = 1, oi[L.m.Zf] = 1, oi[L.m.cg] = 1, oi[L.m.dg] =
            1, oi[L.m.Ed] = 1, oi[L.m.oa] = 1, oi[L.m.Ga] = 1, oi[L.m.uh] = 1, oi[L.m.vh] = 1, oi[L.m.wh] = 1, oi[L.m.xh] = 1, oi[L.m.rb] = 1, oi[L.m.Ta] = 1, oi[L.m.yc] = 1, oi[L.m.Uc] = 1, oi[L.m.Id] = 1, oi[L.m.Ha] = 1, oi[L.m.Jb] = 1, oi[L.m.Ac] = 1, oi[L.m.ib] = 1, oi[L.m.Ia] = 1, oi[L.m.Ba] = 1, oi[L.m.ra] = 1, oi));

    function qi(a) {
        return ri ? A.querySelectorAll(a) : null
    }

    function si(a, b) {
        if (!ri) return null;
        if (Element.prototype.closest) try {
            return a.closest(b)
        } catch (e) {
            return null
        }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
            d = a;
        if (!A.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (d !== null && d.nodeType === 1);
        return null
    }
    var ti = !1;
    if (A.querySelectorAll) try {
        var ui = A.querySelectorAll(":root");
        ui && ui.length == 1 && ui[0] == A.documentElement && (ti = !0)
    } catch (a) {}
    var ri = ti;

    function vi(a) {
        switch (a) {
            case 0:
                break;
            case 9:
                return "e4";
            case 6:
                return "e5";
            case 14:
                return "e6";
            default:
                return "e7"
        }
    };
    var wi = /^[0-9A-Fa-f]{64}$/;

    function xi(a) {
        try {
            return (new TextEncoder).encode(a)
        } catch (e) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d < 128 ? b.push(d) : d < 2048 ? b.push(192 | d >> 6, 128 | d & 63) : d < 55296 || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | d & 63) : (d = 65536 + ((d & 1023) << 10 | a.charCodeAt(++c) & 1023), b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | d & 63))
            }
            return new Uint8Array(b)
        }
    }

    function yi(a) {
        if (a === "" || a === "e0") return Promise.resolve(a);
        var b;
        if ((b = z.crypto) == null ? 0 : b.subtle) {
            if (wi.test(a)) return Promise.resolve(a);
            try {
                var c = xi(a);
                return z.crypto.subtle.digest("SHA-256", c).then(function(d) {
                    var e = Array.from(new Uint8Array(d)).map(function(f) {
                        return String.fromCharCode(f)
                    }).join("");
                    return z.btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (d) {
                return Promise.resolve("e2")
            }
        } else return Promise.resolve("e1")
    };
    var zi = {
            sl: '100',
            tl: '100',
            vl: '1000',
            im: '102788824~102803279~102813109~102887799~102926062~102975949~103016951'
        },
        Ai = {
            di: Number(zi.sl) || 0,
            kf: Number(zi.tl) || 0,
            Fm: Number(zi.vl) || 0,
            io: zi.im
        };

    function O(a) {
        Xa("GTM", a)
    };
    var Ei = function(a, b) {
            var c = ["tv.1"],
                d = Bi(a);
            if (d) return c.push(d), {
                La: !1,
                Li: c.join("~"),
                Lf: {}
            };
            var e = {},
                f = 0;
            var g = Ci(a, function(p, q, r) {
                var v = p.value,
                    u;
                if (r) {
                    var t = q + "__" + f++;
                    u = "${userData." + t + "|sha256}";
                    e[t] = v
                } else u = encodeURIComponent(encodeURIComponent(v));
                var w;
                c.push("" + q + ((w = p.index) != null ? w : "") + "." + u)
            }).La;
            I(62) || (g = f > 0);
            var k = c.join("~"),
                m = {
                    userData: e
                },
                n = b === 2;
            return b === 1 || n ? {
                La: g,
                Li: k,
                Lf: m,
                Em: n ?
                    "tv.9~${" + (k + "|encryptRsa}") : "tv.1~${" + (k + "|encrypt}"),
                encryptionKeyString: n ? 'MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAvMBNun6iQWLRC7leE+bbdzvSfi/vuWbUVnHQbRZGCQu9gU8gUhDTQvTCJ6vIl+PvFNutjUQo3svAxeWk9LyQdMWml3w8hLNKy2oaiCBwi5xPmpzrCWeYG4JaGpBom2PAojrRZdzNnrtutX5XvkcQ1ao/Z8CtYrC6cf9bhdVn46zTQaOBS2uokc4ihM9s0p3yESKcdaihK0wlFie0XvNwp/wR4mKlIwWOfDfnz3QUVDJiuFirBjZNoYsa3TmRRaJA3iih9I1fVwh4p7RSXHg6a+8ERQlJxx6HNm+GBh4VhzPwfRXGQX6sCVLVpbF9N/jr3DbE08lghW07/soO4Lq8IOWmaoo0kGvWwebbXSx9UpPCofGxXrbrDbuKaoFrrtnmqBsiaVOHxcg07N23bnxv9NfgjIuUBGaR2vykgWvWqViN3yrfAHmhXurjQtFu/csE8W95D3yP7a9rywXpELv047MSD+YthoXxGQmSOB4A1SG3SmJgbs8Ee8x/JBmBOylTAgMBAAE\x3d' : Di()
            } : {
                La: g,
                Li: k,
                Lf: m
            }
        },
        Gi = function(a) {
            if (!(a != null && Object.keys(a).length > 0)) return !1;
            var b = Fi(a);
            return Ci(b, function() {}).La
        },
        Ci = function(a, b) {
            b = b === void 0 ? function() {} : b;
            for (var c = !1, d = !1, e = l(a), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g.value) {
                    var k = Hi[g.name];
                    if (k) {
                        var m = Ii(g);
                        m && (c = !0);
                        d = !0;
                        b(g, k, m)
                    }
                }
            }
            return {
                La: d,
                li: c
            }
        },
        Ii = function(a) {
            var b = Ji.indexOf(a.name) !==
                -1,
                c = /^e\d+$/.test(a.value),
                d;
            if (d = b && !c) {
                var e = a.value;
                d = !(Ki.test(e) || wi.test(e))
            }
            return d
        },
        Di = function() {
            return '{\x22keys\x22:[{\x22hpkePublicKey\x22:{\x22params\x22:{\x22aead\x22:\x22AES_128_GCM\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22},\x22publicKey\x22:\x22BB5CWBdSXZ4nttNjHEIZ/xrS9yoM5kAtVq9inuykkUcjYcmLwmritOEGJhFdxj192rvMTfZXeHL4RyHG5eLOkSY\x3d\x22,\x22version\x22:0},\x22id\x22:\x22e5618162-fb62-4c01-b001-f85a045f07ce\x22},{\x22hpkePublicKey\x22:{\x22params\x22:{\x22aead\x22:\x22AES_128_GCM\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22},\x22publicKey\x22:\x22BNSst60cTqTMKT8e3W+XMHVJCP6hblVO4qto/mf2h+CUTDQcgF+SMoOH7m83Od/Fg9bPP5JtHRwMFTaYhGGt2Ac\x3d\x22,\x22version\x22:0},\x22id\x22:\x228f9b6658-273c-42da-bbf9-d601da0182db\x22},{\x22hpkePublicKey\x22:{\x22params\x22:{\x22aead\x22:\x22AES_128_GCM\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22},\x22publicKey\x22:\x22BAgqe18sBgcUSTvmRfDJmvjATmaBxfObE8zMb9nZRWa4FiLrXvKtpR25MBJkWSm9mUu0TevI1BoKtG17RGVxjMw\x3d\x22,\x22version\x22:0},\x22id\x22:\x22298d0a0d-4d56-421a-8e76-6b3735d8df26\x22},{\x22hpkePublicKey\x22:{\x22params\x22:{\x22aead\x22:\x22AES_128_GCM\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22},\x22publicKey\x22:\x22BP32abATo4LFOnM3UfzCL0ahYdOJZ4nwRrJi2lseT/Z5aDuOKFoRpdvu/+7bv1UzfRggnWWIPl5kMBHDu0LU+Bk\x3d\x22,\x22version\x22:0},\x22id\x22:\x222714415e-839c-4c02-b03b-08731fb42f82\x22},{\x22hpkePublicKey\x22:{\x22params\x22:{\x22aead\x22:\x22AES_128_GCM\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22},\x22publicKey\x22:\x22BHQdEnYIDqWOUdKOxSGxSTN7UAbHNeTte1uYjofNd5EMJ4EW6RAqgl0dghiRAZi/1OTB9Ql2fiu98jYnsMUE/bk\x3d\x22,\x22version\x22:0},\x22id\x22:\x220cc84bc5-dfd4-442f-93b6-21bea9a3f1ec\x22}]}'
        },
        Ni = function(a) {
            if (z.Promise) {
                var b = void 0;
                return b
            }
        },
        Ri = function(a, b, c) {
            if (z.Promise) try {
                var d = Fi(a),
                    e = Oi(d).then(Pi);
                return e
            } catch (k) {}
        },
        Mi = function(a, b) {
            var c = void 0;
            return c
        },
        Pi = function(a) {
            var b = a.Xd,
                c = a.time,
                d = ["tv.1"],
                e = Bi(b);
            if (e) return d.push(e), {
                Za: encodeURIComponent(d.join("~")),
                li: !1,
                La: !1,
                time: c,
                ki: !0
            };
            var f = b.filter(function(n) {
                    return !Ii(n)
                }),
                g = Ci(f, function(n, p) {
                    var q = n.value,
                        r = n.index;
                    r !== void 0 && (p += r);
                    d.push(p + "." + q)
                }),
                k = g.li,
                m = g.La;
            return {
                Za: encodeURIComponent(d.join("~")),
                li: k,
                La: m,
                time: c,
                ki: !1
            }
        },
        Bi = function(a) {
            if (a.length === 1 && a[0].name === "error_code") return Hi.error_code + "." + a[0].value
        },
        Qi = function(a) {
            if (a.length === 1 && a[0].name === "error_code") return !1;
            for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                if (Hi[d.name] && d.value) return !0
            }
            return !1
        },
        Fi = function(a) {
            function b(r, v, u, t) {
                var w = Si(r);
                w !== "" && (wi.test(w) ? k.push({
                    name: v,
                    value: w,
                    index: t
                }) : k.push({
                    name: v,
                    value: u(w),
                    index: t
                }))
            }

            function c(r, v) {
                var u = r;
                if (bb(u) || Array.isArray(u)) {
                    u = db(r);
                    for (var t = 0; t < u.length; ++t) {
                        var w = Si(u[t]),
                            x = wi.test(w);
                        v && !x && O(89);
                        !v && x && O(88)
                    }
                }
            }

            function d(r, v) {
                var u = r[v];
                c(u, !1);
                var t = Ti[v];
                r[t] && (r[v] && O(90), u = r[t], c(u, !0));
                return u
            }

            function e(r, v, u) {
                for (var t =
                        db(d(r, v)), w = 0; w < t.length; ++w) b(t[w], v, u)
            }

            function f(r, v, u, t) {
                var w = d(r, v);
                b(w, v, u, t)
            }

            function g(r) {
                return function(v) {
                    O(64);
                    return r(v)
                }
            }
            var k = [];
            if (z.location.protocol !== "https:") return k.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), k;
            e(a, "email", Ui);
            e(a, "phone_number", Vi);
            e(a, "first_name", g(Wi));
            e(a, "last_name", g(Wi));
            var m = a.home_address || {};
            e(m, "street", g(Xi));
            e(m, "city", g(Xi));
            e(m, "postal_code", g(Yi));
            e(m, "region", g(Xi));
            e(m, "country", g(Yi));
            for (var n = db(a.address || {}), p = 0; p < n.length; p++) {
                var q =
                    n[p];
                f(q, "first_name", Wi, p);
                f(q, "last_name", Wi, p);
                f(q, "street", Xi, p);
                f(q, "city", Xi, p);
                f(q, "postal_code", Yi, p);
                f(q, "region", Xi, p);
                f(q, "country", Yi, p)
            }
            return k
        },
        Zi = function(a) {
            var b = a ? Fi(a) : [];
            return Pi({
                Xd: b
            })
        },
        $i = function(a) {
            return a && a != null && Object.keys(a).length > 0 && z.Promise ? Fi(a).some(function(b) {
                return b.value && Ji.indexOf(b.name) !== -1 && !wi.test(b.value)
            }) : !1
        },
        Si = function(a) {
            return a == null ? "" : bb(a) ? ob(String(a)) : "e0"
        },
        Yi = function(a) {
            return a.replace(aj, "")
        },
        Wi = function(a) {
            return Xi(a.replace(/\s/g,
                ""))
        },
        Xi = function(a) {
            return ob(a.replace(bj, "").toLowerCase())
        },
        Vi = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            a.charAt(0) !== "+" && (a = "+" + a);
            return cj.test(a) ? a : "e0"
        },
        Ui = function(a) {
            var b = a.toLowerCase().split("@");
            if (b.length === 2) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (dj.test(c)) return c
            }
            return "e0"
        },
        Oi = function(a) {
            if (!a.some(function(c) {
                    return c.value && Ji.indexOf(c.name) !== -1
                })) return Promise.resolve({
                Xd: a
            });
            if (!z.Promise) return Promise.resolve({
                Xd: []
            });
            var b;
            I(59) && (b = Jc());
            return Promise.all(a.map(function(c) {
                return c.value && Ji.indexOf(c.name) !== -1 ? yi(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                var c = {
                    Xd: a
                };
                if (b !== void 0) {
                    var d = Jc();
                    b && d && (c.time = Math.round(d) - Math.round(b))
                }
                return c
            }).catch(function() {
                return {
                    Xd: []
                }
            })
        },
        bj = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        dj = /^\S+@\S+\.\S+$/,
        cj = /^\+\d{10,15}$/,
        aj = /[.~]/g,
        Ki = /^[0-9A-Za-z_-]{43}$/,
        ej = {},
        Hi = (ej.email = "em", ej.phone_number = "pn", ej.first_name = "fn", ej.last_name = "ln",
            ej.street = "sa", ej.city = "ct", ej.region = "rg", ej.country = "co", ej.postal_code = "pc", ej.error_code = "ec", ej),
        fj = {},
        Ti = (fj.email = "sha256_email_address", fj.phone_number = "sha256_phone_number", fj.first_name = "sha256_first_name", fj.last_name = "sha256_last_name", fj.street = "sha256_street", fj);
    var Ji = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var gj = {},
        hj = (gj[L.m.Ea] = 1, gj[L.m.Uc] = 2, gj[L.m.Jb] = 2, gj[L.m.ka] = 3, gj[L.m.xd] = 4, gj[L.m.ke] = 5, gj[L.m.Vb] = 6, gj[L.m.Ja] = 6, gj[L.m.Ra] = 6, gj[L.m.sc] = 6, gj[L.m.ob] = 6, gj[L.m.Xa] = 6, gj[L.m.Sa] = 7, gj[L.m.rb] = 9, gj[L.m.ne] = 10, gj[L.m.fb] = 11, gj),
        ij = {},
        jj = (ij.unknown = 13, ij.standard = 14, ij.unique = 15, ij.per_session = 16, ij.transactions = 17, ij.items_sold = 18, ij);
    var kj = [];

    function lj(a, b) {
        b = b === void 0 ? !1 : b;
        for (var c = Object.keys(a), d = l(Object.keys(hj)), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (c.includes(f)) {
                var g = hj[f],
                    k = b;
                k = k === void 0 ? !1 : k;
                Xa("GTAG_EVENT_FEATURE_CHANNEL", g);
                k && (kj[g] = !0)
            }
        }
    };
    var mj = {
        Ih: "5411"
    };
    mj.Hh = Number("0") || 0;
    mj.zb = "dataLayer";
    mj.ko = "ChEI8MCzvwYQlIi/k5aw5umRARIlAEX8gnS1imT8RKAhQnCKxHpoAM05fov+2W2MpDudBefYkexyuBoCd2U\x3d";
    var nj = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        oj = {
            __paused: 1,
            __tg: 1
        },
        pj;
    for (pj in nj) nj.hasOwnProperty(pj) && (oj[pj] = 1);
    var qj = mb(""),
        rj = !1,
        sj, tj = !1;
    tj = !0;
    sj = tj;
    var uj, vj = !1;
    uj = vj;
    var wj, xj = !1;
    wj = xj;
    mj.Qf = "www.googletagmanager.com";
    var yj = "" + mj.Qf + (sj ? "/gtag/js" : "/gtm.js"),
        zj = null,
        Aj = null,
        Bj = {},
        Cj = {};
    mj.rl = "";
    var Dj = "";
    mj.Jh = Dj;
    var Ej = function() {
            this.C = new Set
        },
        Gj = function() {
            var a = Fj.jb,
                b = Ai.io;
            a.C = new Set;
            if (b !== "")
                for (var c = l(b.split("~")), d = c.next(); !d.done; d = c.next()) {
                    var e = Number(d.value);
                    isNaN(e) || a.C.add(e)
                }
        },
        Fj = new function() {
            this.jb = new Ej;
            this.C = !1;
            this.H = 0;
            this.da = this.Ca = this.Bc = this.O = "";
            this.U = this.N = !1
        };

    function Hj(a) {
        var b = a = a === void 0 ? [] : a,
            c = Fj.jb;
        b = b === void 0 ? [] : b;
        return Array.from(c.C).concat(b).join("~")
    }

    function Ij() {
        var a = Fj.O.length;
        return Fj.O[a - 1] === "/" ? Fj.O.substring(0, a - 1) : Fj.O
    }

    function Jj() {
        return Fj.C ? I(77) ? Fj.H === 0 : Fj.H !== 1 : !1
    }

    function Kj(a) {
        for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return b
    };
    var Lj = new hb,
        Mj = {},
        Nj = {},
        Qj = {
            name: mj.zb,
            set: function(a, b) {
                Yc(xb(a, b), Mj);
                Oj()
            },
            get: function(a) {
                return Pj(a, 2)
            },
            reset: function() {
                Lj = new hb;
                Mj = {};
                Oj()
            }
        };

    function Pj(a, b) {
        return b != 2 ? Lj.get(a) : Rj(a)
    }

    function Rj(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = Mj, e = 0; e < c.length; e++) {
            if (d === null) return !1;
            if (d === void 0) break;
            d = d[c[e]];
            if (b.indexOf(d) !== -1) return
        }
        return d
    }

    function Sj(a, b) {
        Nj.hasOwnProperty(a) || (Lj.set(a, b), Yc(xb(a, b), Mj), Oj())
    }

    function Tj() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b],
                d = Pj(c, 1);
            if (Array.isArray(d) || Xc(d)) d = Yc(d, null);
            Nj[c] = d
        }
    }

    function Oj(a) {
        ib(Nj, function(b, c) {
            Lj.set(b, c);
            Yc(xb(b), Mj);
            Yc(xb(b, c), Mj);
            a && delete Nj[b]
        })
    }

    function Uj(a, b) {
        var c, d = (b === void 0 ? 2 : b) !== 1 ? Rj(a) : Lj.get(a);
        Vc(d) === "array" || Vc(d) === "object" ? c = Yc(d, null) : c = d;
        return c
    };
    var Vj = function(a, b, c) {
            if (!c) return !1;
            for (var d = String(c.value), e, f = d.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "").split(","), g = 0; g < f.length; g++) {
                var k = f[g].trim();
                if (k && !vb(k, "#") && !vb(k, ".")) {
                    if (vb(k, "dataLayer.")) e = Pj(k.substring(10));
                    else {
                        var m = k.split(".");
                        e = z[m.shift()];
                        for (var n = 0; n < m.length; n++) e = e && e[m[n]];
                        I(58) && e === void 0 && (e = Pj(k))
                    }
                    if (e !== void 0) break
                }
            }
            if (e === void 0 && ri) try {
                var p = qi(d);
                if (p && p.length > 0) {
                    e = [];
                    for (var q = 0; q < p.length && q < (b === "email" || b === "phone_number" ? 5 : 1); q++) e.push(Ac(p[q]) ||
                        ob(p[q].value));
                    e = e.length === 1 ? e[0] : e
                }
            } catch (r) {
                O(149)
            }
            return e ? (a[b] = e, !0) : !1
        },
        Wj = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = Vj(b, "email", a.email) || c;
                c = Vj(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                    var f = {};
                    c = Vj(f, "first_name", d[e].first_name) || c;
                    c = Vj(f, "last_name", d[e].last_name) || c;
                    c = Vj(f, "street", d[e].street) || c;
                    c = Vj(f, "city", d[e].city) || c;
                    c = Vj(f, "region", d[e].region) || c;
                    c = Vj(f, "country", d[e].country) || c;
                    c = Vj(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f)
                }
                return c ?
                    b : void 0
            }
        },
        Xj = function(a, b) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    if (b && Xc(b)) return b;
                    var c = a.enhanced_conversions_manual_var;
                    if (c !== void 0) return c;
                    var d = z.enhanced_conversion_data;
                    d && Xa("GTAG_EVENT_FEATURE_CHANNEL", 8);
                    return d;
                case "automatic":
                    return Wj(a[L.m.gh])
            }
        },
        Yj = function(a) {
            return Xc(a) ? !!a.enable_code : !1
        };
    var Zj = /:[0-9]+$/,
        ak = /^\d+\.fls\.doubleclick\.net$/;

    function bk(a, b, c, d) {
        for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
            var k = l(g.value.split("=")),
                m = k.next().value,
                n = sa(k);
            if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                var p = n.join("=");
                if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
            }
        }
        return c ? e : void 0
    }

    function ck(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = dk(a.protocol) || dk(z.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : z.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || z.location.hostname).replace(Zj, "").toLowerCase());
        return ek(a, b, c, d, e)
    }

    function ek(a, b, c, d, e) {
        var f, g = dk(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                f = fk(a);
                break;
            case "protocol":
                f = g;
                break;
            case "host":
                f = a.hostname.replace(Zj, "").toLowerCase();
                if (c) {
                    var k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substring(k[0].length))
                }
                break;
            case "port":
                f = String(Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || Xa("TAGGING", 1);
                f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                (d || []).indexOf(m[m.length -
                    1]) >= 0 && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = bk(f, e, !1));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = n.length > 1 ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f = a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }

    function dk(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }

    function fk(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substring(0, c)
        }
        return b
    }
    var gk = {},
        hk = 0;

    function ik(a) {
        var b = gk[a];
        if (!b) {
            var c = A.createElement("a");
            a && (c.href = a);
            var d = c.pathname;
            d[0] !== "/" && (a || Xa("TAGGING", 1), d = "/" + d);
            var e = c.hostname.replace(Zj, "");
            b = {
                href: c.href,
                protocol: c.protocol,
                host: c.host,
                hostname: e,
                pathname: d,
                search: c.search,
                hash: c.hash,
                port: c.port
            };
            hk < 5 && (gk[a] = b, hk++)
        }
        return b
    }

    function jk(a, b, c) {
        var d = ik(a);
        return Cb(b, d, c)
    }

    function kk(a) {
        var b = ik(z.location.href),
            c = ck(b, "host", !1);
        if (c && c.match(ak)) {
            var d = ck(b, "path");
            if (d) {
                var e = d.split(a + "=");
                if (e.length > 1) return e[1].split(";")[0].split("?")[0]
            }
        }
    };
    var lk = {
            "https://www.google.com": "/g",
            "https://www.googleadservices.com": "/as",
            "https://pagead2.googlesyndication.com": "/gs"
        },
        mk = ["/as/d/ccm/conversion", "/g/d/ccm/conversion", "/gs/ccm/conversion", "/d/ccm/form-data"];

    function nk(a, b) {
        if (a) {
            var c = "" + a;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = "https://" + c);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return ik("" + c + b).href
        }
    }

    function ok(a, b) {
        if (Jj() || uj) return nk(a, b)
    }

    function pk() {
        return !!mj.Jh && mj.Jh.split("@@").join("") !== "SGTM_TOKEN"
    }

    function qk(a) {
        for (var b = l([L.m.Uc, L.m.Jb]), c = b.next(); !c.done; c = b.next()) {
            var d = P(a, c.value);
            if (d) return d
        }
    }

    function rk(a, b, c) {
        c = c === void 0 ? "" : c;
        if (!Jj()) return a;
        var d = b ? lk[a] || "" : "";
        d === "/gs" && (c = "");
        return "" + Ij() + d + c
    }

    function sk(a) {
        if (!Jj()) return a;
        for (var b = l(mk), c = b.next(); !c.done; c = b.next())
            if (vb(a, "" + Ij() + c.value)) return a + "&_uip=" + encodeURIComponent("::");
        return a
    };

    function tk(a) {
        var b = String(a[Se.wa] || "").replace(/_/g, "");
        return vb(b, "cvt") ? "cvt" : b
    }
    var uk = z.location.search.indexOf("?gtm_latency=") >= 0 || z.location.search.indexOf("&gtm_latency=") >= 0;
    var vk = {
            sampleRate: "0.005000",
            nl: "",
            ho: "0.01"
        },
        wk = Math.random(),
        xk;
    if (!(xk = uk)) {
        var yk = vk.sampleRate;
        xk = wk < Number(yk)
    }
    var zk = xk,
        Ak = (jc == null ? void 0 : jc.includes("gtm_debug=d")) || uk || wk >= 1 - Number(vk.ho);
    var Bk = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Ck = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var Dk = function(a, b, c) {
            return a.addEventListener ? (a.addEventListener(b, c, !1), !0) : !1
        },
        Ek = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        };
    var Fk, Gk;
    a: {
        for (var Hk = ["CLOSURE_FLAGS"], Ik = ya, Jk = 0; Jk < Hk.length; Jk++)
            if (Ik = Ik[Hk[Jk]], Ik == null) {
                Gk = null;
                break a
            }
        Gk = Ik
    }
    var Kk = Gk && Gk[610401301];
    Fk = Kk != null ? Kk : !1;

    function Lk() {
        var a = ya.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Mk, Nk = ya.navigator;
    Mk = Nk ? Nk.userAgentData || null : null;

    function Ok(a) {
        if (!Fk || !Mk) return !1;
        for (var b = 0; b < Mk.brands.length; b++) {
            var c = Mk.brands[b].brand;
            if (c && c.indexOf(a) != -1) return !0
        }
        return !1
    }

    function Pk(a) {
        return Lk().indexOf(a) != -1
    };

    function Qk() {
        return Fk ? !!Mk && Mk.brands.length > 0 : !1
    }

    function Rk() {
        return Qk() ? !1 : Pk("Opera")
    }

    function Sk() {
        return Pk("Firefox") || Pk("FxiOS")
    }

    function Tk() {
        return Qk() ? Ok("Chromium") : (Pk("Chrome") || Pk("CriOS")) && !(Qk() ? 0 : Pk("Edge")) || Pk("Silk")
    };
    var Uk = function(a) {
        Uk[" "](a);
        return a
    };
    Uk[" "] = function() {};
    var Vk = function(a, b, c, d) {
            for (var e = b, f = c.length;
                (e = a.indexOf(c, e)) >= 0 && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (g == 38 || g == 63) {
                    var k = a.charCodeAt(e + f);
                    if (!k || k == 61 || k == 38 || k == 35) return e
                }
                e += f + 1
            }
            return -1
        },
        Wk = /#|$/,
        Xk = function(a, b) {
            var c = a.search(Wk),
                d = Vk(a, 0, b, c);
            if (d < 0) return null;
            var e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
        },
        Yk = /[?&]($|#)/,
        Zk = function(a, b, c) {
            for (var d, e = a.search(Wk), f = 0, g, k = [];
                (g = Vk(a, f, b, e)) >= 0;) k.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            k.push(a.slice(f));
            d = k.join("").replace(Yk, "$1");
            var m, n = c != null ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                r < 0 && (r = d.length);
                var v = d.indexOf("?"),
                    u;
                v < 0 || v > r ? (v = r, u = "") : u = d.substring(v + 1, r);
                q = [d.slice(0, v), u, d.slice(r)];
                var t = q[1];
                q[1] = p ? t ? t + "&" + p : p : t;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };

    function $k() {
        return Fk ? !!Mk && !!Mk.platform : !1
    }

    function al() {
        return Pk("iPhone") && !Pk("iPod") && !Pk("iPad")
    }

    function bl() {
        al() || Pk("iPad") || Pk("iPod")
    };
    Rk();
    Qk() || Pk("Trident") || Pk("MSIE");
    Pk("Edge");
    !Pk("Gecko") || Lk().toLowerCase().indexOf("webkit") != -1 && !Pk("Edge") || Pk("Trident") || Pk("MSIE") || Pk("Edge");
    Lk().toLowerCase().indexOf("webkit") != -1 && !Pk("Edge") && Pk("Mobile");
    $k() || Pk("Macintosh");
    $k() || Pk("Windows");
    ($k() ? Mk.platform === "Linux" : Pk("Linux")) || $k() || Pk("CrOS");
    $k() || Pk("Android");
    al();
    Pk("iPad");
    Pk("iPod");
    bl();
    Lk().toLowerCase().indexOf("kaios");
    var cl = function(a) {
            try {
                var b;
                if (b = !!a && a.location.href != null) a: {
                    try {
                        Uk(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        dl = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        el = function(a) {
            if (z.top == z) return 0;
            if (a === void 0 ? 0 : a) {
                var b = z.location.ancestorOrigins;
                if (b) return b[b.length - 1] == z.location.origin ? 1 : 2
            }
            return cl(z.top) ? 1 : 2
        },
        fl = function(a) {
            a = a === void 0 ? document : a;
            return a.createElement("img")
        },
        gl = function() {
            for (var a = z, b = a; a && a != a.parent;) a =
                a.parent, cl(a) && (b = a);
            return b
        };

    function hl(a) {
        var b;
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    };

    function il() {
        return hl("join-ad-interest-group") && ab(gc.joinAdInterestGroup)
    }

    function jl(a, b, c) {
        var d = ig[3] === void 0 ? 1 : ig[3],
            e = 'iframe[data-tagging-id="' + b + '"]',
            f = [];
        try {
            if (d === 1) {
                var g = A.querySelector(e);
                g && (f = [g])
            } else f = Array.from(A.querySelectorAll(e))
        } catch (r) {}
        var k;
        a: {
            try {
                k = A.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]');
                break a
            } catch (r) {}
            k = void 0
        }
        var m = k,
            n = ((m == null ? void 0 : m.length) || 0) >= (ig[2] === void 0 ? 50 : ig[2]),
            p;
        if (p = f.length >= 1) {
            var q = Number(f[f.length - 1].dataset.loadTime);
            q !== void 0 && qb() - q < (ig[1] === void 0 ? 6E4 : ig[1]) ? (Xa("TAGGING",
                9), p = !0) : p = !1
        }
        if (p) return !1;
        if (d === 1)
            if (f.length >= 1) kl(f[0]);
            else {
                if (n) return Xa("TAGGING", 10), !1
            }
        else f.length >= d ? kl(f[0]) : n && kl(m[0]);
        uc(a, c, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: qb()
        });
        return !0
    }

    function kl(a) {
        try {
            a.parentNode.removeChild(a)
        } catch (b) {}
    }

    function ll() {
        return "https://td.doubleclick.net"
    };

    function ml(a, b, c) {
        var d, e = a.GooglebQhCsO;
        e || (e = {}, a.GooglebQhCsO = e);
        d = e;
        if (d[b]) return !1;
        d[b] = [];
        d[b][0] = c;
        return !0
    };
    var nl = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    Sk();
    al() || Pk("iPod");
    Pk("iPad");
    !Pk("Android") || Tk() || Sk() || Rk() || Pk("Silk");
    Tk();
    !Pk("Safari") || Tk() || (Qk() ? 0 : Pk("Coast")) || Rk() || (Qk() ? 0 : Pk("Edge")) || (Qk() ? Ok("Microsoft Edge") : Pk("Edg/")) || (Qk() ? Ok("Opera") : Pk("OPR")) || Sk() || Pk("Silk") || Pk("Android") || bl();
    var ol = {},
        pl = null,
        ql = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                e > 255 && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            f === void 0 && (f = 0);
            if (!pl) {
                pl = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; m < 5; m++) {
                    var n = g.concat(k[m].split(""));
                    ol[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        pl[q] === void 0 && (pl[q] = p)
                    }
                }
            }
            for (var r = ol[f], v = Array(Math.floor(b.length / 3)), u = r[64] || "", t = 0, w = 0; t < b.length - 2; t += 3) {
                var x = b[t],
                    y = b[t + 1],
                    B = b[t + 2],
                    D = r[x >> 2],
                    E = r[(x & 3) << 4 | y >> 4],
                    H = r[(y & 15) << 2 | B >> 6],
                    N = r[B & 63];
                v[w++] = "" + D + E + H + N
            }
            var M = 0,
                U = u;
            switch (b.length - t) {
                case 2:
                    M = b[t + 1], U = r[(M & 15) << 2] || u;
                case 1:
                    var F = b[t];
                    v[w] = "" + r[F >> 2] + r[(F & 3) << 4 | M >> 4] + U + u
            }
            return v.join("")
        };

    function rl(a, b, c, d, e, f) {
        var g = Xk(c, "fmt");
        if (d) {
            var k = Xk(c, "random"),
                m = Xk(c, "label") || "";
            if (!k) return !1;
            var n = ql(decodeURIComponent(m.replace(/\+/g, " ")) + ":" + decodeURIComponent(k.replace(/\+/g, " ")));
            if (!ml(a, n, d)) return !1
        }
        g && Number(g) !== 4 && (c = Zk(c, "rfmt", g));
        var p = Zk(c, "fmt", 4);
        sc(p, function() {
            a.google_noFurtherRedirects && d && (a.google_noFurtherRedirects = null, d())
        }, e, f, b.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var sl = {},
        tl = (sl[1] = {}, sl[2] = {}, sl[3] = {}, sl[4] = {}, sl);

    function ul(a, b, c) {
        var d = vl(b, c);
        if (d) {
            var e = tl[b][d];
            e || (e = tl[b][d] = []);
            e.push(Object.assign({}, a))
        }
    }

    function wl(a, b) {
        var c = vl(a, b);
        if (c) {
            var d = tl[a][c];
            d && (tl[a][c] = d.filter(function(e) {
                return !e.Uk
            }))
        }
    }

    function xl(a) {
        switch (a) {
            case "script-src":
            case "script-src-elem":
                return 1;
            case "frame-src":
                return 4;
            case "connect-src":
                return 2;
            case "img-src":
                return 3
        }
    }

    function vl(a, b) {
        var c = b;
        if (b[0] === "/") {
            var d;
            c = ((d = z.location) == null ? void 0 : d.origin) + b
        }
        try {
            var e = new URL(c);
            return a === 4 ? e.origin : e.origin + e.pathname
        } catch (f) {}
    }

    function yl(a) {
        var b = xa.apply(1, arguments);
        I(53) && Ak && (ul(a, 2, b[0]), ul(a, 3, b[0]));
        Dc.apply(null, ta(b))
    }

    function zl(a) {
        var b = xa.apply(1, arguments);
        I(53) && Ak && ul(a, 2, b[0]);
        return Ec.apply(null, ta(b))
    }

    function Al(a) {
        var b = xa.apply(1, arguments);
        I(53) && Ak && ul(a, 3, b[0]);
        vc.apply(null, ta(b))
    }

    function Bl(a) {
        var b = xa.apply(1, arguments),
            c = b[0];
        I(53) && Ak && (ul(a, 2, c), ul(a, 3, c));
        return Gc.apply(null, ta(b))
    }

    function Cl(a) {
        var b = xa.apply(1, arguments);
        I(53) && Ak && ul(a, 1, b[0]);
        sc.apply(null, ta(b))
    }

    function Dl(a) {
        var b = xa.apply(1, arguments);
        b[0] && I(53) && Ak && ul(a, 4, b[0]);
        uc.apply(null, ta(b))
    }

    function El(a) {
        var b = xa.apply(1, arguments);
        I(53) && Ak && ul(a, 1, b[2]);
        return rl.apply(null, ta(b))
    }

    function Fl(a) {
        var b = xa.apply(1, arguments);
        I(53) && Ak && ul(a, 4, b[0]);
        jl.apply(null, ta(b))
    };
    var Gl = /gtag[.\/]js/,
        Hl = /gtm[.\/]js/,
        Il = !1;

    function Jl(a) {
        if (Il) return "1";
        var b, c = (b = a.scriptElement) == null ? void 0 : b.src;
        if (c) {
            if (Gl.test(c)) return "3";
            if (Hl.test(c)) return "2"
        }
        return "0"
    };

    function Kl(a, b) {
        var c = Ll();
        c.pending || (c.pending = []);
        eb(c.pending, function(d) {
            return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
        }) || c.pending.push({
            target: a,
            onLoad: b
        })
    }

    function Ml() {
        var a = z.google_tags_first_party;
        Array.isArray(a) || (a = []);
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) b[d.value] = !0;
        return Object.freeze(b)
    }
    var Nl = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {};
        this.pending = [];
        this.siloed = [];
        this.injectedFirstPartyContainers = {};
        this.injectedFirstPartyContainers = Ml()
    };

    function Ll() {
        var a = kc("google_tag_data", {}),
            b = a.tidr;
        b && typeof b === "object" || (b = new Nl, a.tidr = b);
        var c = b;
        c.container || (c.container = {});
        c.destination || (c.destination = {});
        c.canonical || (c.canonical = {});
        c.pending || (c.pending = []);
        c.siloed || (c.siloed = []);
        c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = Ml());
        return c
    };
    var Ol = {},
        Pl = !1,
        Ql = void 0,
        Wf = {
            ctid: "AW-959136034",
            canonicalContainerId: "124117227",
            Nk: "AW-959136034",
            Ok: "AW-959136034"
        };
    Ol.We = mb("");

    function Rl() {
        return Ol.We && Sl().some(function(a) {
            return a === Wf.ctid
        })
    }

    function Tl() {
        var a = Ul();
        return Pl ? a.map(Vl) : a
    }

    function Wl() {
        var a = Sl();
        return Pl ? a.map(Vl) : a
    }

    function Xl() {
        var a = Wl();
        if (!Pl)
            for (var b = l([].concat(ta(a))), c = b.next(); !c.done; c = b.next()) {
                var d = Vl(c.value),
                    e = Ll().destination[d];
                e && e.state !== 0 || a.push(d)
            }
        return a
    }

    function Yl() {
        return Zl(Wf.ctid)
    }

    function $l() {
        return Zl(Wf.canonicalContainerId || "_" + Wf.ctid)
    }

    function Ul() {
        return Wf.Nk ? Wf.Nk.split("|") : [Wf.ctid]
    }

    function Sl() {
        return Wf.Ok ? Wf.Ok.split("|") : []
    }

    function am() {
        var a = bm(cm()),
            b = a && a.parent;
        if (b) return bm(b)
    }

    function bm(a) {
        var b = Ll();
        return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
    }

    function Zl(a) {
        return Pl ? Vl(a) : a
    }

    function Vl(a) {
        return "siloed_" + a
    }

    function dm(a) {
        a = String(a);
        return vb(a, "siloed_") ? a.substring(7) : a
    }

    function em() {
        if (Fj.N) {
            var a = Ll();
            if (a.siloed) {
                for (var b = [], c = Ul().map(Vl), d = Sl().map(Vl), e = {}, f = 0; f < a.siloed.length; e = {
                        wg: void 0
                    }, f++) e.wg = a.siloed[f], !Pl && eb(e.wg.isDestination ? d : c, function(g) {
                    return function(k) {
                        return k === g.wg.ctid
                    }
                }(e)) ? Pl = !0 : b.push(e.wg);
                a.siloed = b
            }
        }
    }

    function fm() {
        var a = Ll();
        if (a.pending) {
            for (var b, c = [], d = !1, e = Tl(), f = Ql ? Ql : Xl(), g = {}, k = 0; k < a.pending.length; g = {
                    Ff: void 0
                }, k++) g.Ff = a.pending[k], eb(g.Ff.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Ff.target.ctid
                }
            }(g)) ? d || (b = g.Ff.onLoad, d = !0) : c.push(g.Ff);
            a.pending = c;
            if (b) try {
                b($l())
            } catch (m) {}
        }
    }

    function gm() {
        var a = Wf.ctid,
            b = Tl(),
            c = Xl();
        Ql = c;
        for (var d = function(n, p) {
                var q = {
                    canonicalContainerId: Wf.canonicalContainerId,
                    scriptContainerId: a,
                    state: 2,
                    containers: b.slice(),
                    destinations: c.slice()
                };
                ic && (q.scriptElement = ic);
                jc && (q.scriptSource = jc);
                if (am() === void 0) {
                    var r;
                    a: {
                        if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                            var v;
                            b: {
                                var u, t = (u = q.scriptElement) == null ? void 0 : u.src;
                                if (t) {
                                    for (var w = Fj.C, x = ik(t), y = w ? x.pathname : "" + x.hostname + x.pathname, B = A.scripts, D = "", E = 0; E < B.length; ++E) {
                                        var H = B[E];
                                        if (!(H.innerHTML.length ===
                                                0 || !w && H.innerHTML.indexOf(q.scriptContainerId || "SHOULD_NOT_BE_SET") < 0 || H.innerHTML.indexOf(y) < 0)) {
                                            if (H.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                                                v = String(E);
                                                break b
                                            }
                                            D = String(E)
                                        }
                                    }
                                    if (D) {
                                        v = D;
                                        break b
                                    }
                                }
                                v = void 0
                            }
                            var N = v;
                            if (N) {
                                Il = !0;
                                r = N;
                                break a
                            }
                        }
                        var M = [].slice.call(A.scripts);r = q.scriptElement ? String(M.indexOf(q.scriptElement)) : "-1"
                    }
                    q.htmlLoadOrder = r;
                    q.loadScriptType = Jl(q)
                }
                var U = p ? e.destination : e.container,
                    F = U[n];
                F ? (p && F.state === 0 && O(93), Object.assign(F, q)) : U[n] = q
            }, e = Ll(), f = l(b), g = f.next(); !g.done; g =
            f.next()) d(g.value, !1);
        for (var k = l(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
        e.canonical[$l()] = {};
        fm()
    }

    function hm() {
        var a = $l();
        return !!Ll().canonical[a]
    }

    function im(a) {
        return !!Ll().container[a]
    }

    function jm(a) {
        var b = Ll().destination[a];
        return !!b && !!b.state
    }

    function cm() {
        return {
            ctid: Yl(),
            isDestination: Ol.We
        }
    }

    function km(a, b, c) {
        b.siloed && lm({
            ctid: a,
            isDestination: !1
        });
        var d = cm();
        Ll().container[a] = {
            state: 1,
            context: b,
            parent: d
        };
        Kl({
            ctid: a,
            isDestination: !1
        }, c)
    }

    function lm(a) {
        var b = Ll();
        (b.siloed = b.siloed || []).push(a)
    }

    function mm() {
        var a = Ll().container,
            b;
        for (b in a)
            if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
        return !1
    }

    function nm() {
        var a = {};
        ib(Ll().destination, function(b, c) {
            c.state === 0 && (a[dm(b)] = c)
        });
        return a
    }

    function om(a) {
        return !!(a && a.parent && a.context && a.context.source === 1 && a.parent.ctid.indexOf("GTM-") !== 0)
    }

    function pm() {
        for (var a = Ll(), b = l(Tl()), c = b.next(); !c.done; c = b.next())
            if (a.injectedFirstPartyContainers[c.value]) return !0;
        return !1
    }

    function qm(a) {
        var b = Ll();
        return b.destination[a] ? 1 : b.destination[Vl(a)] ? 2 : 0
    };

    function rm() {
        var a = kc("google_tag_data", {});
        return a.ics = a.ics || new sm
    }
    var sm = function() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.C = []
    };
    sm.prototype.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        Xa("TAGGING", 19);
        b == null ? Xa("TAGGING", 18) : tm(this, a, b === "granted", c, d, e, f, g)
    };
    sm.prototype.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++) tm(this, a[d], void 0, void 0, "", "", b, c)
    };
    var tm = function(a, b, c, d, e, f, g, k) {
        var m = a.entries,
            n = m[b] || {},
            p = n.region,
            q = d && bb(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
            var r = !!(g && g > 0 && n.update === void 0),
                v = {
                    region: q,
                    declare_region: n.declare_region,
                    implicit: n.implicit,
                    default: c !== void 0 ? c : n.default,
                    declare: n.declare,
                    update: n.update,
                    quiet: r
                };
            if (e !== "" || n.default !== !1) m[b] = v;
            r && z.setTimeout(function() {
                m[b] === v && v.quiet && (Xa("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, k),
                    a.notifyListeners())
            }, g)
        }
    };
    h = sm.prototype;
    h.clearTimeout = function(a, b, c) {
        var d = [a],
            e = c.delegatedConsentTypes,
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        var g = this.entries[a] || {},
            k = this.getConsentState(a, c);
        if (g.quiet) {
            g.quiet = !1;
            for (var m = l(d), n = m.next(); !n.done; n = m.next()) um(this, n.value)
        } else if (b !== void 0 && k !== b)
            for (var p = l(d), q = p.next(); !q.done; q = p.next()) um(this, q.value)
    };
    h.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c),
                e = this.entries;
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    };
    h.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            k = g.declare_region,
            m = c && bb(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: b === "granted",
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if (d !== "" || g.declare !== !1) f[a] = n
        }
    };
    h.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        d.implicit !== !1 && (d.implicit = b === "granted")
    };
    h.getConsentState = function(a, b) {
        var c = this.entries,
            d = c[a] || {},
            e = d.update;
        if (e !== void 0) return e ? 1 : 2;
        if (b.usedContainerScopedDefaults) {
            var f = b.containerScopedDefaults[a];
            if (f === 3) return 1;
            if (f === 2) return 2
        } else if (e = d.default, e !== void 0) return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            var g = b.delegatedConsentTypes[a],
                k = c[g] || {};
            e = k.update;
            if (e !== void 0) return e ? 1 : 2;
            if (b.usedContainerScopedDefaults) {
                var m = b.containerScopedDefaults[g];
                if (m === 3) return 1;
                if (m === 2) return 2
            } else if (e =
                k.default, e !== void 0) return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0) return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    };
    h.addListener = function(a, b) {
        this.C.push({
            consentTypes: a,
            Qd: b
        })
    };
    var um = function(a, b) {
        for (var c = 0; c < a.C.length; ++c) {
            var d = a.C[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.Pk = !0)
        }
    };
    sm.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.C.length; ++c) {
            var d = this.C[c];
            if (d.Pk) {
                d.Pk = !1;
                try {
                    d.Qd({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var vm = !1,
        wm = !1,
        xm = {},
        ym = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1,
            containerScopedDefaults: (xm.ad_storage = 1, xm.analytics_storage = 1, xm.ad_user_data = 1, xm.ad_personalization = 1, xm),
            usedContainerScopedDefaults: !1
        };

    function zm(a) {
        var b = rm();
        b.accessedAny = !0;
        return (bb(a) ? [a] : a).every(function(c) {
            switch (b.getConsentState(c, ym)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        })
    }

    function Am(a) {
        var b = rm();
        b.accessedAny = !0;
        return b.getConsentState(a, ym)
    }

    function Bm(a) {
        for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            b[e] = ym.corePlatformServices[e] !== !1
        }
        return b
    }

    function Cm(a) {
        var b = rm();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function Dm() {
        if (!jg(8)) return !1;
        var a = rm();
        a.accessedAny = !0;
        if (a.active) return !0;
        if (!ym.usedContainerScopedDefaults) return !1;
        for (var b = l(Object.keys(ym.containerScopedDefaults)), c = b.next(); !c.done; c = b.next())
            if (ym.containerScopedDefaults[c.value] !== 1) return !0;
        return !1
    }

    function Em(a, b) {
        rm().addListener(a, b)
    }

    function Fm(a, b) {
        rm().notifyListeners(a, b)
    }

    function Gm(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Cm(b[e])) return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Em(b, function(e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }

    function Hm(a, b) {
        function c() {
            for (var k = [], m = 0; m < e.length; m++) {
                var n = e[m];
                zm(n) && !f[n] && k.push(n)
            }
            return k
        }

        function d(k) {
            for (var m = 0; m < k.length; m++) f[k[m]] = !0
        }
        var e = bb(b) ? [b] : b,
            f = {},
            g = c();
        g.length !== e.length && (d(g), Em(e, function(k) {
            function m(q) {
                q.length !== 0 && (d(q), k.consentTypes = q, a(k))
            }
            var n = c();
            if (n.length !== 0) {
                var p = Object.keys(f).length;
                n.length + p >= e.length ? m(n) : z.setTimeout(function() {
                    m(c())
                }, 500)
            }
        }))
    };
    var Im = {},
        Jm = (Im[0] = 0, Im[1] = 0, Im[2] = 0, Im[3] = 0, Im),
        Km = function(a, b) {
            this.C = a;
            this.consentTypes = b
        };
    Km.prototype.isConsentGranted = function() {
        switch (this.C) {
            case 0:
                return this.consentTypes.every(function(a) {
                    return zm(a)
                });
            case 1:
                return this.consentTypes.some(function(a) {
                    return zm(a)
                });
            default:
                Yb(this.C, "consentsRequired had an unknown type")
        }
    };
    var Lm = {},
        Mm = (Lm[0] = new Km(0, []), Lm[1] = new Km(0, ["ad_storage"]), Lm[2] = new Km(0, ["analytics_storage"]), Lm[3] = new Km(1, ["ad_storage", "analytics_storage"]), Lm);
    var Om = function(a) {
        var b = this;
        this.type = a;
        this.C = [];
        Em(Mm[a].consentTypes, function() {
            Nm(b) || b.flush()
        })
    };
    Om.prototype.flush = function() {
        for (var a = l(this.C), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            c()
        }
        this.C = []
    };
    var Nm = function(a) {
            return Jm[a.type] === 2 && !Mm[a.type].isConsentGranted()
        },
        Pm = function(a, b) {
            Nm(a) ? a.C.push(b) : b()
        },
        Qm = new Map;

    function Rm(a) {
        Qm.has(a) || Qm.set(a, new Om(a));
        return Qm.get(a)
    };
    var Sm = "/td?id=" + Wf.ctid,
        Tm = "v t pid dl tdp exp".split(" "),
        Um = ["mcc"],
        Vm = {},
        Wm = {},
        Xm = !1;

    function Ym(a, b, c) {
        Wm[a] = b;
        (c === void 0 || c) && Zm(a)
    }

    function Zm(a, b) {
        if (Vm[a] === void 0 || (b === void 0 ? 0 : b)) Vm[a] = !0
    }

    function $m(a) {
        a = a === void 0 ? !1 : a;
        var b = Object.keys(Vm).filter(function(c) {
            return Vm[c] === !0 && Wm[c] !== void 0 && (a || !Um.includes(c))
        }).map(function(c) {
            var d = Wm[c];
            typeof d === "function" && (d = d());
            return d ? "&" + c + "=" + d : ""
        }).join("");
        return "" + rk("https://www.googletagmanager.com") + Sm + ("" + b + "&z=0")
    }

    function an() {
        Object.keys(Vm).forEach(function(a) {
            Tm.indexOf(a) < 0 && (Vm[a] = !1)
        })
    }

    function bn(a) {
        a = a === void 0 ? !1 : a;
        if (Fj.U && Ak && Wf.ctid) {
            if (I(101)) {
                var b = Rm(3);
                if (Nm(b)) {
                    Xm || (Xm = !0, Pm(b, bn));
                    return
                }
            }
            var c = $m(a),
                d = {
                    destinationId: Wf.ctid,
                    endpoint: 56
                };
            a ? Bl(d, c) : Al(d, c);
            an();
            Xm = !1
        }
    }
    var cn = {};

    function dn() {
        Object.keys(Vm).filter(function(a) {
            return Vm[a] && !Tm.includes(a)
        }).length > 0 && bn(!0)
    }
    var en = fb();

    function fn() {
        en = fb()
    }

    function gn() {
        Ym("v", "3");
        Ym("t", "t");
        Ym("pid", function() {
            return String(en)
        });
        I(57) && Ym("exp", Hj());
        xc(z, "pagehide", dn);
        z.setInterval(fn, 864E5)
    };
    var hn = ["ad_storage", "analytics_storage", "ad_user_data", "ad_personalization"],
        jn = [L.m.Uc, L.m.Jb, L.m.Nc, L.m.mb, L.m.Ib, L.m.Ba, L.m.Aa, L.m.Ja, L.m.Ra, L.m.ob],
        kn = !1,
        ln = !1,
        mn = {},
        nn = {};

    function on() {
        !ln && kn && (hn.some(function(a) {
            return ym.containerScopedDefaults[a] !== 1
        }) || pn("mbc"));
        ln = !0
    }

    function pn(a) {
        Ak && (Ym(a, "1"), bn())
    }

    function qn(a, b) {
        if (!mn[b] && (mn[b] = !0, nn[b]))
            for (var c = l(jn), d = c.next(); !d.done; d = c.next())
                if (a.hasOwnProperty(d.value)) {
                    pn("erc");
                    break
                }
    };

    function rn(a) {
        Xa("HEALTH", a)
    };
    var sn = {
            Rm: "eyIwIjoiSU4iLCIxIjoiSU4tTUgiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
        },
        tn = {};

    function un() {
        var a = sn.Rm;
        try {
            return JSON.parse(Va(a))
        } catch (b) {
            return O(123), rn(2), {}
        }
    }

    function vn() {
        return tn["0"] || ""
    }

    function wn() {
        return tn["1"] || ""
    }

    function xn() {
        var a = !1;
        return a
    }

    function yn() {
        return tn["6"] !== !1
    }

    function zn() {
        var a = "";
        return a
    }

    function An() {
        var a = !1;
        a = !!tn["5"];
        return a
    }

    function Bn() {
        var a = "";
        return a
    };

    function Cn(a) {
        return a && a.indexOf("pending:") === 0 ? Dn(a.substr(8)) : !1
    }

    function Dn(a) {
        if (a == null || a.length === 0) return !1;
        var b = Number(a),
            c = qb();
        return b < c + 3E5 && b > c - 9E5
    };
    var En = !1,
        Fn = !1,
        Gn = !1,
        Hn = 0,
        In = !1,
        Jn = [];

    function Kn(a) {
        if (Hn === 0) In && Jn && (Jn.length >= 100 && Jn.shift(), Jn.push(a));
        else if (Ln()) {
            var b = kc('google.tagmanager.ta.prodqueue', []);
            b.length >= 50 && b.shift();
            b.push(a)
        }
    }

    function Mn() {
        Nn();
        yc(A, "TAProdDebugSignal", Mn)
    }

    function Nn() {
        if (!Fn) {
            Fn = !0;
            On();
            var a = Jn;
            Jn = void 0;
            a == null || a.forEach(function(b) {
                Kn(b)
            })
        }
    }

    function On() {
        var a = A.documentElement.getAttribute("data-tag-assistant-prod-present");
        Dn(a) ? Hn = 1 : !Cn(a) || En || Gn ? Hn = 2 : (Gn = !0, xc(A, "TAProdDebugSignal", Mn, !1), z.setTimeout(function() {
            Nn();
            En = !0
        }, 200))
    }

    function Ln() {
        if (!In) return !1;
        switch (Hn) {
            case 1:
            case 0:
                return !0;
            case 2:
                return !1;
            default:
                return !1
        }
    };
    var Pn = !1;

    function Qn(a, b) {
        var c = Ul(),
            d = Sl();
        if (Ln()) {
            var e = Rn("INIT");
            e.containerLoadSource = a != null ? a : 0;
            b && (e.parentTargetReference = b);
            e.aliases = c;
            e.destinations = d;
            Kn(e)
        }
    }

    function Sn(a) {
        var b, c, d, e;
        b = a.targetId;
        c = a.request;
        d = a.Ka;
        e = a.isBatched;
        if (Ln()) {
            var f = Rn("GTAG_HIT", {
                eventId: d.eventId,
                priorityId: d.priorityId
            });
            f.target = b;
            f.url = c.url;
            c.postBody && (f.postBody = c.postBody);
            f.parameterEncoding = c.parameterEncoding;
            f.endpoint = c.endpoint;
            e !== void 0 && (f.isBatched = e);
            Kn(f)
        }
    }

    function Tn(a) {
        Ln() && Sn(a())
    }

    function Rn(a, b) {
        b = b === void 0 ? {} : b;
        b.groupId = Un;
        var c, d = b,
            e = {
                publicId: Vn
            };
        d.eventId != null && (e.eventId = d.eventId);
        d.priorityId != null && (e.priorityId = d.priorityId);
        d.eventName && (e.eventName = d.eventName);
        d.groupId && (e.groupId = d.groupId);
        d.tagName && (e.tagName = d.tagName);
        c = {
            containerProduct: "GTM",
            key: e,
            version: '2',
            messageType: a
        };
        c.containerProduct = Pn ? "OGT" : "GTM";
        c.key.targetRef = Wn;
        return c
    }
    var Vn = "",
        Wn = {
            ctid: "",
            isDestination: !1
        },
        Un;

    function Xn(a) {
        var b = Wf.ctid,
            c = Rl();
        Hn = 0;
        In = !0;
        On();
        Un = a;
        Vn = b;
        Pn = sj;
        Wn = {
            ctid: b,
            isDestination: c
        }
    };
    var Yn = [L.m.R, L.m.X, L.m.T, L.m.ya],
        Zn, $n;

    function ao(a) {
        for (var b = a[L.m.yb], c = Array.isArray(b) ? b : [b], d = {
                vf: 0
            }; d.vf < c.length; d = {
                vf: d.vf
            }, ++d.vf) ib(a, function(e) {
            return function(f, g) {
                if (f !== L.m.yb) {
                    var k = c[e.vf],
                        m = vn(),
                        n = wn();
                    wm = !0;
                    vm && Xa("TAGGING", 20);
                    rm().declare(f, g, k, m, n)
                }
            }
        }(d))
    }

    function bo(a) {
        on();
        !$n && Zn && pn("crc");
        $n = !0;
        var b = a[L.m.yb];
        b && O(40);
        var c = a[L.m.ce];
        c && O(41);
        for (var d = Array.isArray(b) ? b : [b], e = {
                wf: 0
            }; e.wf < d.length; e = {
                wf: e.wf
            }, ++e.wf) ib(a, function(f) {
            return function(g, k) {
                if (g !== L.m.yb && g !== L.m.ce) {
                    var m = d[f.wf],
                        n = Number(c),
                        p = vn(),
                        q = wn();
                    n = n === void 0 ? 0 : n;
                    vm = !0;
                    wm && Xa("TAGGING", 20);
                    rm().default(g, k, m, p, q, n, ym)
                }
            }
        }(e))
    }

    function co(a) {
        ym.usedContainerScopedDefaults = !0;
        var b = a[L.m.yb];
        if (b) {
            var c = Array.isArray(b) ? b : [b];
            if (!c.includes(wn()) && !c.includes(vn())) return
        }
        ib(a, function(d, e) {
            switch (d) {
                case "ad_storage":
                case "analytics_storage":
                case "ad_user_data":
                case "ad_personalization":
                    break;
                default:
                    return
            }
            ym.usedContainerScopedDefaults = !0;
            ym.containerScopedDefaults[d] = e === "granted" ? 3 : 2
        })
    }

    function eo(a, b) {
        on();
        Zn = !0;
        ib(a, function(c, d) {
            vm = !0;
            wm && Xa("TAGGING", 20);
            rm().update(c, d, ym)
        });
        Fm(b.eventId, b.priorityId)
    }

    function fo(a) {
        a.hasOwnProperty("all") && (ym.selectedAllCorePlatformServices = !0, ib(ci, function(b) {
            ym.corePlatformServices[b] = a.all === "granted";
            ym.usedCorePlatformServices = !0
        }));
        ib(a, function(b, c) {
            b !== "all" && (ym.corePlatformServices[b] = c === "granted", ym.usedCorePlatformServices = !0)
        })
    }

    function S(a) {
        Array.isArray(a) || (a = [a]);
        return a.every(function(b) {
            return zm(b)
        })
    }

    function go(a, b) {
        Em(a, b)
    }

    function ho(a, b) {
        Hm(a, b)
    }

    function io(a, b) {
        Gm(a, b)
    }

    function jo() {
        var a = [L.m.R, L.m.ya, L.m.T];
        rm().waitForUpdate(a, 500, ym)
    }

    function ko(a) {
        for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            rm().clearTimeout(d, void 0, ym)
        }
        Fm()
    }

    function lo() {
        if (!wj)
            for (var a = yn() ? Kj(Fj.Ca) : Kj(Fj.Bc), b = 0; b < Yn.length; b++) {
                var c = Yn[b],
                    d = c,
                    e = a[c] ? "granted" : "denied";
                rm().implicit(d, e)
            }
    };
    var mo = !1,
        no = [];

    function oo() {
        if (!mo) {
            mo = !0;
            for (var a = no.length - 1; a >= 0; a--) no[a]();
            no = []
        }
    };
    var po = z.google_tag_manager = z.google_tag_manager || {};

    function qo(a, b) {
        return po[a] = po[a] || b()
    }

    function ro() {
        var a = Yl(),
            b = so;
        po[a] = po[a] || b
    }

    function to() {
        var a = mj.zb;
        return po[a] = po[a] || {}
    }

    function uo() {
        var a = po.sequence || 1;
        po.sequence = a + 1;
        return a
    };
    var vo = {
            lk: "service_worker_endpoint",
            Kh: "shared_user_id",
            Lh: "shared_user_id_requested",
            bf: "shared_user_id_source",
            Pf: "cookie_deprecation_label",
            ol: "aw_user_data_cache",
            Rl: "ga4_user_data_cache",
            Ql: "fl_user_data_cache",
            fk: "pt_listener_set",
            Ze: "pt_data"
        },
        wo;

    function xo(a) {
        if (!wo) {
            wo = {};
            for (var b = l(Object.keys(vo)), c = b.next(); !c.done; c = b.next()) wo[vo[c.value]] = !0
        }
        return !!wo[a]
    }

    function yo(a, b) {
        b = b === void 0 ? !1 : b;
        if (xo(a)) {
            var c, d, e = (d = (c = kc("google_tag_data", {})).xcd) != null ? d : c.xcd = {};
            if (e[a]) return e[a];
            if (b) {
                var f = void 0,
                    g = 1,
                    k = {},
                    m = {
                        set: function(n) {
                            f = n;
                            m.notify()
                        },
                        get: function() {
                            return f
                        },
                        subscribe: function(n) {
                            k[String(g)] = n;
                            return g++
                        },
                        unsubscribe: function(n) {
                            var p = String(n);
                            return k.hasOwnProperty(p) ? (delete k[p], !0) : !1
                        },
                        notify: function() {
                            for (var n = l(Object.keys(k)), p = n.next(); !p.done; p = n.next()) {
                                var q = p.value;
                                try {
                                    k[q](a, f)
                                } catch (r) {}
                            }
                        }
                    };
                return e[a] = m
            }
        }
    }

    function zo(a, b) {
        var c = yo(a, !0);
        c && c.set(b)
    }

    function Ao(a) {
        var b;
        return (b = yo(a)) == null ? void 0 : b.get()
    }

    function Bo(a, b) {
        if (typeof b === "function") {
            var c;
            return (c = yo(a, !0)) == null ? void 0 : c.subscribe(b)
        }
    }

    function Co(a, b) {
        var c = yo(a);
        return c ? c.unsubscribe(b) : !1
    };

    function Do() {
        if (po.pscdl !== void 0) Ao(vo.Pf) === void 0 && zo(vo.Pf, po.pscdl);
        else {
            var a = function(c) {
                    po.pscdl = c;
                    zo(vo.Pf, c)
                },
                b = function() {
                    a("error")
                };
            try {
                gc.cookieDeprecationLabel ? (a("pending"), gc.cookieDeprecationLabel.getValue().then(a).catch(b)) : a("noapi")
            } catch (c) {
                b(c)
            }
        }
    };

    function Eo(a, b) {
        b && ib(b, function(c, d) {
            typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d))
        })
    };
    var Fo = /^(?:siloed_)?(?:AW|DC|G|GF|GT|HA|MC|UA)$/,
        Go = /\s/;

    function Ho(a, b) {
        if (bb(a)) {
            a = ob(a);
            var c = a.indexOf("-");
            if (!(c < 0)) {
                var d = a.substring(0, c);
                if (Fo.test(d)) {
                    var e = a.substring(c + 1),
                        f;
                    if (b) {
                        var g = function(n) {
                            var p = n.indexOf("/");
                            return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)]
                        };
                        f = g(e);
                        if (d === "DC" && f.length === 2) {
                            var k = g(f[1]);
                            k.length === 2 && (f[1] = k[0], f.push(k[1]))
                        }
                    } else {
                        f = e.split("/");
                        for (var m = 0; m < f.length; m++)
                            if (!f[m] || Go.test(f[m]) && (d !== "AW" || m !== 1)) return
                    }
                    return {
                        id: a,
                        prefix: d,
                        destinationId: d + "-" + f[0],
                        ids: f
                    }
                }
            }
        }
    }

    function Io(a, b) {
        for (var c = {}, d = 0; d < a.length; ++d) {
            var e = Ho(a[d], b);
            e && (c[e.id] = e)
        }
        Jo(c);
        var f = [];
        ib(c, function(g, k) {
            f.push(k)
        });
        return f
    }

    function Jo(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                d.prefix === "AW" && d.ids[Ko[1]] && b.push(d.destinationId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    }
    var Lo = {},
        Ko = (Lo[0] = 0, Lo[1] = 1, Lo[2] = 2, Lo[3] = 0, Lo[4] = 1, Lo[5] = 0, Lo[6] = 0, Lo[7] = 0, Lo);
    var Mo = Number('') || 500,
        No = {},
        Oo = {},
        Po = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        To = {},
        Uo = Object.freeze((To[L.m.Ta] = !0, To)),
        Vo = void 0;

    function Wo(a, b) {
        if (b.length && Ak) {
            var c;
            (c = No)[a] != null || (c[a] = []);
            Oo[a] != null || (Oo[a] = []);
            var d = b.filter(function(e) {
                return !Oo[a].includes(e)
            });
            No[a].push.apply(No[a], ta(d));
            Oo[a].push.apply(Oo[a], ta(d));
            !Vo && d.length > 0 && (Zm("tdc", !0), Vo = z.setTimeout(function() {
                bn();
                No = {};
                Vo = void 0
            }, Mo))
        }
    }

    function Xo(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function Yo(a, b, c, d) {
        c = c === void 0 ? {} : c;
        d = d === void 0 ? "" : d;
        if (a === b) return [];
        var e = function(r, v) {
                var u;
                Vc(v) === "object" ? u = v[r] : Vc(v) === "array" && (u = v[r]);
                return u === void 0 ? Uo[r] : u
            },
            f = Xo(a, b),
            g;
        for (g in f)
            if (f.hasOwnProperty(g)) {
                var k = (d ? d + "." : "") + g,
                    m = e(g, a),
                    n = e(g, b),
                    p = Vc(m) === "object" || Vc(m) === "array",
                    q = Vc(n) === "object" || Vc(n) === "array";
                if (p && q) Yo(m, n, c, k);
                else if (p || q || m !== n) c[k] = !0
            }
        return Object.keys(c)
    }

    function Zo() {
        Ym("tdc", function() {
            Vo && (z.clearTimeout(Vo), Vo = void 0);
            var a = [],
                b;
            for (b in No) No.hasOwnProperty(b) && a.push(b + "*" + No[b].join("."));
            return a.length ? a.join("!") : void 0
        }, !1)
    };
    var $o = function(a, b, c, d, e, f, g, k, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.C = c;
            this.U = d;
            this.N = e;
            this.O = f;
            this.H = g;
            this.eventMetadata = k;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        ap = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.C);
                    c.push(a.U);
                    c.push(a.N);
                    c.push(a.O);
                    c.push(a.H);
                    break;
                case 2:
                    c.push(a.C);
                    break;
                case 1:
                    c.push(a.U);
                    c.push(a.N);
                    c.push(a.O);
                    c.push(a.H);
                    break;
                case 4:
                    c.push(a.C), c.push(a.U), c.push(a.N), c.push(a.O)
            }
            return c
        },
        P = function(a, b, c, d) {
            for (var e = l(ap(a, d === void 0 ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (g[b] !== void 0) return g[b]
            }
            return c
        },
        bp = function(a) {
            for (var b = {}, c = ap(a, 4), d = l(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), g = l(f), k = g.next(); !k.done; k = g.next()) b[k.value] = 1;
            return Object.keys(b)
        },
        cp = function(a, b, c) {
            function d(n) {
                Xc(n) && ib(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                g = ap(a, c === void 0 ? 3 : c);
            g.reverse();
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
            return f ? e : void 0
        },
        dp = function(a) {
            for (var b = [L.m.sd, L.m.nd,
                    L.m.od, L.m.pd, L.m.rd, L.m.ud, L.m.vd
                ], c = ap(a, 3), d = l(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, k = !1, m = l(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    f[p] !== void 0 && (g[p] = f[p], k = !0)
                }
                var q = k ? g : void 0;
                if (q) return q
            }
            return {}
        },
        ep = function(a, b) {
            this.eventId = a;
            this.priorityId = b;
            this.H = {};
            this.U = {};
            this.C = {};
            this.N = {};
            this.da = {};
            this.O = {};
            this.eventMetadata = {};
            this.isGtmEvent = !1;
            this.onSuccess = function() {};
            this.onFailure = function() {}
        },
        fp = function(a, b) {
            a.H = b;
            return a
        },
        gp = function(a, b) {
            a.U = b;
            return a
        },
        hp = function(a, b) {
            a.C = b;
            return a
        },
        ip = function(a, b) {
            a.N = b;
            return a
        },
        jp = function(a, b) {
            a.da = b;
            return a
        },
        kp = function(a, b) {
            a.O = b;
            return a
        },
        lp = function(a, b) {
            a.eventMetadata = b || {};
            return a
        },
        mp = function(a, b) {
            a.onSuccess = b;
            return a
        },
        np = function(a, b) {
            a.onFailure = b;
            return a
        },
        op = function(a, b) {
            a.isGtmEvent = b;
            return a
        },
        pp = function(a) {
            return new $o(a.eventId, a.priorityId, a.H, a.U, a.C, a.N, a.O, a.eventMetadata, a.onSuccess, a.onFailure, a.isGtmEvent)
        };
    var qp = {
            ml: Number("5"),
            Po: Number("")
        },
        rp = [],
        sp = !1;

    function tp(a) {
        rp.push(a)
    }
    var up = "?id=" + Wf.ctid,
        vp = void 0,
        wp = {},
        xp = void 0,
        yp = new function() {
            var a = 5;
            qp.ml > 0 && (a = qp.ml);
            this.H = a;
            this.C = 0;
            this.N = []
        },
        zp = 1E3;

    function Ap(a, b) {
        var c = vp;
        if (c === void 0)
            if (b) c = uo();
            else return "";
        for (var d = [rk("https://www.googletagmanager.com"), "/a", up], e = l(rp), f = e.next(); !f.done; f = e.next())
            for (var g = f.value, k = g({
                    eventId: c,
                    hd: !!a
                }), m = l(k), n = m.next(); !n.done; n = m.next()) {
                var p = l(n.value),
                    q = p.next().value,
                    r = p.next().value;
                d.push("&" + q + "=" + r)
            }
        d.push("&z=0");
        return d.join("")
    }

    function Bp() {
        if (Fj.U && (xp && (z.clearTimeout(xp), xp = void 0), vp !== void 0 && Cp)) {
            if (I(101)) {
                var a = Rm(3);
                if (Nm(a)) {
                    sp || (sp = !0, Pm(a, Bp));
                    return
                }
            }
            var b;
            (b = wp[vp]) || (b = yp.C < yp.H ? !1 : qb() - yp.N[yp.C % yp.H] < 1E3);
            if (b || zp-- <= 0) O(1), wp[vp] = !0;
            else {
                var c = yp.C++ % yp.H;
                yp.N[c] = qb();
                var d = Ap(!0);
                Al({
                    destinationId: Wf.ctid,
                    endpoint: 56,
                    eventId: vp
                }, d);
                sp = Cp = !1
            }
        }
    }

    function Dp() {
        if (zk && Fj.U) {
            var a = Ap(!0, !0);
            Al({
                destinationId: Wf.ctid,
                endpoint: 56,
                eventId: vp
            }, a)
        }
    }
    var Cp = !1;

    function Ep(a) {
        wp[a] || (a !== vp && (Bp(), vp = a), Cp = !0, xp || (xp = z.setTimeout(Bp, 500)), Ap().length >= 2022 && Bp())
    }
    var Fp = fb();

    function Gp() {
        Fp = fb()
    }

    function Hp() {
        return [
            ["v", "3"],
            ["t", "t"],
            ["pid", String(Fp)]
        ]
    };
    var Ip = {};

    function Jp(a, b, c) {
        zk && a !== void 0 && (Ip[a] = Ip[a] || [], Ip[a].push(c + b), Ep(a))
    }

    function Kp(a) {
        var b = a.eventId,
            c = a.hd,
            d = [],
            e = Ip[b] || [];
        e.length && d.push(["epr", e.join(".")]);
        c && delete Ip[b];
        return d
    };

    function Lp(a, b, c) {
        var d = Ho(Zl(a), !0);
        d && Mp.register(d, b, c)
    }

    function Np(a, b, c, d) {
        var e = Ho(c, d.isGtmEvent);
        e && (rj && (d.deferrable = !0), Mp.push("event", [b, a], e, d))
    }

    function Op(a, b, c, d) {
        var e = Ho(c, d.isGtmEvent);
        e && Mp.push("get", [a, b], e, d)
    }

    function Pp(a) {
        var b = Ho(Zl(a), !0),
            c;
        b ? c = Qp(Mp, b).C : c = {};
        return c
    }

    function Rp(a, b) {
        var c = Ho(Zl(a), !0);
        if (c) {
            var d = Mp,
                e = Yc(b, null);
            Yc(Qp(d, c).C, e);
            Qp(d, c).C = e
        }
    }
    var Sp = function() {
            this.U = {};
            this.C = {};
            this.H = {};
            this.da = null;
            this.O = {};
            this.N = !1;
            this.status = 1
        },
        Tp = function(a, b, c, d) {
            this.H = qb();
            this.C = b;
            this.args = c;
            this.messageContext = d;
            this.type = a
        },
        Up = function() {
            this.destinations = {};
            this.C = {};
            this.commands = []
        },
        Qp = function(a, b) {
            var c = b.destinationId;
            Pl || (c = dm(c));
            return a.destinations[c] = a.destinations[c] || new Sp
        },
        Vp = function(a, b, c, d) {
            if (d.C) {
                var e = Qp(a, d.C),
                    f = e.da;
                if (f) {
                    var g = d.C.id;
                    Pl || (g = dm(g));
                    var k = Yc(c, null),
                        m = Yc(e.U[g], null),
                        n = Yc(e.O, null),
                        p = Yc(e.C, null),
                        q = Yc(a.C, null),
                        r = {};
                    if (zk) try {
                        r = Yc(Mj, null)
                    } catch (x) {
                        O(72)
                    }
                    var v = d.C.prefix,
                        u = function(x) {
                            Jp(d.messageContext.eventId, v, x)
                        },
                        t = pp(op(np(mp(lp(jp(ip(kp(hp(gp(fp(new ep(d.messageContext.eventId, d.messageContext.priorityId), k), m), n), p), q), r), d.messageContext.eventMetadata), function() {
                            if (u) {
                                var x = u;
                                u = void 0;
                                x("2");
                                if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                            }
                        }), function() {
                            if (u) {
                                var x = u;
                                u = void 0;
                                x("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent)),
                        w = function() {
                            try {
                                Jp(d.messageContext.eventId, v, "1");
                                var x = d.type,
                                    y = d.C.id;
                                if (Ak && x === "config") {
                                    var B, D = (B = Ho(y)) == null ? void 0 : B.ids;
                                    if (!(D && D.length > 1)) {
                                        var E, H = kc("google_tag_data", {});
                                        H.td || (H.td = {});
                                        E = H.td;
                                        var N = Yc(t.O);
                                        Yc(t.C, N);
                                        var M = [],
                                            U;
                                        for (U in E) E.hasOwnProperty(U) && Yo(E[U], N).length && M.push(U);
                                        M.length && (Wo(y, M), Xa("TAGGING", Po[A.readyState] || 14));
                                        E[y] = N
                                    }
                                }
                                f(d.C.id, b, d.H, t)
                            } catch (F) {
                                Jp(d.messageContext.eventId, v, "4")
                            }
                        };
                    b === "gtag.get" ? w() : I(101) ? Pm(e.Ca, w) : w()
                }
            }
        };
    Up.prototype.register = function(a, b, c) {
        var d = Qp(this, a);
        d.status !== 3 && (d.da = b, d.status = 3, I(101) && (d.Ca = Rm(c)), this.flush())
    };
    Up.prototype.push = function(a, b, c, d) {
        c !== void 0 && (Qp(this, c).status === 1 && (Qp(this, c).status = 2, this.push("require", [{}], c, {})), Qp(this, c).N && (d.deferrable = !1));
        this.commands.push(new Tp(a, c, b, d));
        d.deferrable || this.flush()
    };
    Up.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.commands.length; e = {
                fc: void 0,
                xg: void 0
            }) {
            var f = this.commands[0],
                g = f.C;
            if (f.messageContext.deferrable) !g || Qp(this, g).N ? (f.messageContext.deferrable = !1, this.commands.push(f)) : c.push(f), this.commands.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (Qp(this, g).status !== 3 && !a) {
                            this.commands.push.apply(this.commands, c);
                            return
                        }
                        break;
                    case "set":
                        var k = f.args[0];
                        ib(k, function(u, t) {
                            Yc(xb(u, t), b.C)
                        });
                        lj(k, !0);
                        break;
                    case "config":
                        var m = Qp(this, g);
                        e.fc = {};
                        ib(f.args[0], function(u) {
                            return function(t, w) {
                                Yc(xb(t, w), u.fc)
                            }
                        }(e));
                        var n = !!e.fc[L.m.Ac];
                        delete e.fc[L.m.Ac];
                        var p = g.destinationId === g.id;
                        lj(e.fc, !0);
                        n || (p ? m.O = {} : m.U[g.id] = {});
                        m.N && n || Vp(this, L.m.ia, e.fc, f);
                        m.N = !0;
                        p ? Yc(e.fc, m.O) : (Yc(e.fc, m.U[g.id]), O(70));
                        d = !0;
                        qn(e.fc, g.id);
                        kn = !0;
                        break;
                    case "event":
                        e.xg = {};
                        ib(f.args[0], function(u) {
                            return function(t, w) {
                                Yc(xb(t, w), u.xg)
                            }
                        }(e));
                        lj(e.xg);
                        Vp(this, f.args[1], e.xg, f);
                        var q = void 0;
                        !f.C || ((q = f.messageContext.eventMetadata) == null ? 0 : q.em_event) || (nn[f.C.id] = !0);
                        kn = !0;
                        break;
                    case "get":
                        var r = {},
                            v = (r[L.m.Gb] = f.args[0], r[L.m.Wb] = f.args[1], r);
                        Vp(this, L.m.eb, v, f);
                        kn = !0
                }
                this.commands.shift();
                Wp(this, f)
            }
        }
        this.commands.push.apply(this.commands, c);
        d && this.flush()
    };
    var Wp = function(a, b) {
            if (b.type !== "require")
                if (b.C)
                    for (var c = Qp(a, b.C).H[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.destinations)
                        if (a.destinations.hasOwnProperty(e)) {
                            var f = a.destinations[e];
                            if (f && f.H)
                                for (var g = f.H[b.type] || [], k = 0; k < g.length; k++) g[k]()
                        }
        },
        Mp = new Up;

    function Xp(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = fl(a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        k = dc(g, e);
                    k >= 0 && Array.prototype.splice.call(g, k, 1)
                }
                Ek(e, "load", f);
                Ek(e, "error", f)
            };
            Dk(e, "load", f);
            Dk(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }

    function Yp(a) {
        var b;
        b = b === void 0 ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        dl(a, function(d, e) {
            if (d || d === 0) c += "&" + e + "=" + encodeURIComponent(String(d))
        });
        Zp(c, b)
    }

    function Zp(a, b) {
        var c = window,
            d;
        b = b === void 0 ? !1 : b;
        d = d === void 0 ? !1 : d;
        if (c.fetch) {
            var e = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            };
            d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false"
            } : e.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            });
            c.fetch(a, e)
        } else Xp(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d)
    };
    var $p = function() {
        this.U = this.U;
        this.H = this.H
    };
    $p.prototype.U = !1;
    $p.prototype.dispose = function() {
        this.U || (this.U = !0, this.Ca())
    };
    $p.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    $p.prototype.addOnDisposeCallback = function(a, b) {
        this.U ? b !== void 0 ? a.call(b) : a() : (this.H || (this.H = []), b && (a = a.bind(b)), this.H.push(a))
    };
    $p.prototype.Ca = function() {
        if (this.H)
            for (; this.H.length;) this.H.shift()()
    };

    function aq(a) {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    }
    var bq = function(a, b) {
        b = b === void 0 ? {} : b;
        $p.call(this);
        this.C = null;
        this.da = {};
        this.qg = 0;
        this.O = null;
        this.N = a;
        var c;
        this.Bc = (c = b.ao) != null ? c : 500;
        var d;
        this.jb = (d = b.Fo) != null ? d : !1
    };
    ra(bq, $p);
    bq.prototype.Ca = function() {
        this.da = {};
        this.O && (Ek(this.N, "message", this.O), delete this.O);
        delete this.da;
        delete this.N;
        delete this.C;
        $p.prototype.Ca.call(this)
    };
    var dq = function(a) {
        return typeof a.N.__tcfapi === "function" || cq(a) != null
    };
    bq.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.jb
            },
            d = Ck(function() {
                return a(c)
            }),
            e = 0;
        this.Bc !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.Bc));
        var f = function(g, k) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = aq(c), c.internalBlockOnErrors = b.jb, k && c.internalErrorState === 0 || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            eq(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    bq.prototype.removeEventListener = function(a) {
        a && a.listenerId && eq(this, "removeEventListener", null, a.listenerId)
    };
    var gq = function(a, b, c) {
            var d;
            d = d === void 0 ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (f !== void 0) {
                        e = f[d === void 0 ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (g === 0) return !1;
            var k = c;
            c === 2 ? (k = 0, g === 2 && (k = 1)) : c === 3 && (k = 1, g === 1 && (k = 0));
            var m;
            if (k === 0)
                if (a.purpose && a.vendor) {
                    var n = fq(a.vendor.consents, d === void 0 ? "755" : d);
                    m = n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : n && fq(a.purpose.consents, b)
                } else m = !0;
            else m = k === 1 ? a.purpose && a.vendor ? fq(a.purpose.legitimateInterests,
                b) && fq(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
            return m
        },
        fq = function(a, b) {
            return !(!a || !a[b])
        },
        eq = function(a, b, c, d) {
            c || (c = function() {});
            var e = a.N;
            if (typeof e.__tcfapi === "function") {
                var f = e.__tcfapi;
                f(b, 2, c, d)
            } else if (cq(a)) {
                hq(a);
                var g = ++a.qg;
                a.da[g] = c;
                if (a.C) {
                    var k = {};
                    a.C.postMessage((k.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: g,
                        parameter: d
                    }, k), "*")
                }
            } else c({}, !1)
        },
        cq = function(a) {
            if (a.C) return a.C;
            var b;
            a: {
                for (var c = a.N, d = 0; d < 50; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (k) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (k) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.C = b;
            return a.C
        },
        hq = function(a) {
            if (!a.O) {
                var b = function(c) {
                    try {
                        var d;
                        d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data).__tcfapiReturn;
                        a.da[d.callId](d.returnValue, d.success)
                    } catch (e) {}
                };
                a.O = b;
                Dk(a.N, "message", b)
            }
        },
        iq = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = aq(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ?
                (Yp({
                    e: String(a.internalErrorState)
                }), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        };
    var jq = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function kq() {
        return qo("tcf", function() {
            return {}
        })
    }
    var lq = function() {
        return new bq(z, {
            ao: -1
        })
    };

    function mq() {
        var a = kq(),
            b = lq();
        dq(b) && !nq() && !oq() && O(124);
        if (!a.active && dq(b)) {
            nq() && (a.active = !0, a.purposes = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, rm().active = !0, a.tcString = "tcunavailable");
            jo();
            try {
                b.addEventListener(function(c) {
                    if (c.internalErrorState !== 0) pq(a), ko([L.m.R, L.m.ya, L.m.T]), rm().active = !0;
                    else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, oq() && (a.active = !0), !qq(c) || nq() || oq()) {
                        a.tcfPolicyVersion = c.tcfPolicyVersion;
                        var d;
                        if (c.gdprApplies ===
                            !1) {
                            var e = {},
                                f;
                            for (f in jq) jq.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if (qq(c)) {
                            var g = {},
                                k;
                            for (k in jq)
                                if (jq.hasOwnProperty(k))
                                    if (k === "1") {
                                        var m, n = c,
                                            p = {
                                                Qm: !0
                                            };
                                        p = p === void 0 ? {} : p;
                                        m = iq(n) ? n.gdprApplies === !1 ? !0 : n.tcString === "tcunavailable" ? !p.Fk : (p.Fk || n.gdprApplies !== void 0 || p.Qm) && (p.Fk || typeof n.tcString === "string" && n.tcString.length) ? gq(n, "1", 0) : !0 : !1;
                                        g["1"] = m
                                    } else g[k] = gq(c, k, jq[k]);
                            d = g
                        }
                        if (d) {
                            a.tcString = c.tcString || "tcempty";
                            a.purposes = d;
                            var q = {},
                                r = (q[L.m.R] = a.purposes["1"] ?
                                    "granted" : "denied", q);
                            a.gdprApplies !== !0 ? (ko([L.m.R, L.m.ya, L.m.T]), rm().active = !0) : (r[L.m.ya] = a.purposes["3"] && a.purposes["4"] ? "granted" : "denied", typeof a.tcfPolicyVersion === "number" && a.tcfPolicyVersion >= 4 ? r[L.m.T] = a.purposes["1"] && a.purposes["7"] ? "granted" : "denied" : ko([L.m.T]), eo(r, {
                                eventId: 0
                            }, {
                                gdprApplies: a ? a.gdprApplies : void 0,
                                tcString: rq() || ""
                            }))
                        }
                    } else ko([L.m.R, L.m.ya, L.m.T])
                })
            } catch (c) {
                pq(a), ko([L.m.R, L.m.ya, L.m.T]), rm().active = !0
            }
        }
    }

    function pq(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function qq(a) {
        return a.eventStatus === "tcloaded" || a.eventStatus === "useractioncomplete" || a.eventStatus === "cmpuishown"
    }

    function nq() {
        return z.gtag_enable_tcf_support === !0
    }

    function oq() {
        return kq().enableAdvertiserConsentMode === !0
    }

    function rq() {
        var a = kq();
        if (a.active) return a.tcString
    }

    function sq() {
        var a = kq();
        if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0"
    }

    function tq(a) {
        if (!jq.hasOwnProperty(String(a))) return !0;
        var b = kq();
        return b.active && b.purposes ? !!b.purposes[String(a)] : !0
    };
    var uq = [L.m.R, L.m.X, L.m.T, L.m.ya],
        vq = {},
        wq = (vq[L.m.R] = 1, vq[L.m.X] = 2, vq);

    function xq(a) {
        if (a === void 0) return 0;
        switch (P(a, L.m.qa)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }

    function yq(a) {
        if (wn() === "US-CO" && gc.globalPrivacyControl === !0) return !1;
        var b = xq(a);
        if (b === 3) return !1;
        switch (Am(L.m.ya)) {
            case 1:
            case 3:
                return !0;
            case 2:
                return !1;
            case 4:
                return b === 2;
            case 0:
                return !0;
            default:
                return !1
        }
    }

    function zq() {
        return Dm() || !zm(L.m.R) || !zm(L.m.X)
    }

    function Aq() {
        var a = {},
            b;
        for (b in wq) wq.hasOwnProperty(b) && (a[wq[b]] = Am(b));
        return "G1" + Me(a[1] || 0) + Me(a[2] || 0)
    }
    var Bq = {},
        Cq = (Bq[L.m.R] = 0, Bq[L.m.X] = 1, Bq[L.m.T] = 2, Bq[L.m.ya] = 3, Bq);

    function Dq(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }

    function Eq(a) {
        for (var b = "1", c = 0; c < uq.length; c++) {
            var d = b,
                e, f = uq[c],
                g = ym.delegatedConsentTypes[f];
            e = g === void 0 ? 0 : Cq.hasOwnProperty(g) ? 12 | Cq[g] : 8;
            var k = rm();
            k.accessedAny = !0;
            var m = k.entries[f] || {};
            e = e << 2 | Dq(m.implicit);
            b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [Dq(m.declare) << 4 | Dq(m.default) << 2 | Dq(m.update)])
        }
        var n = b,
            p = (wn() === "US-CO" && gc.globalPrivacyControl === !0 ? 1 : 0) << 3,
            q = (Dm() ? 1 : 0) << 2,
            r = xq(a);
        b =
            n + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [p | q | r];
        return b += "" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [ym.containerScopedDefaults.ad_storage << 4 | ym.containerScopedDefaults.analytics_storage << 2 | ym.containerScopedDefaults.ad_user_data] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [(ym.usedContainerScopedDefaults ? 1 : 0) << 2 | ym.containerScopedDefaults.ad_personalization]
    }

    function Fq() {
        if (!zm(L.m.T)) return "-";
        for (var a = Object.keys(ci), b = Bm(a), c = "", d = l(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            b[f] && (c += ci[f])
        }(ym.usedCorePlatformServices ? ym.selectedAllCorePlatformServices : 1) && (c += "o");
        return c || "-"
    }

    function Gq() {
        return yn() || (nq() || oq()) && sq() === "1" ? "1" : "0"
    }

    function Hq() {
        return (yn() ? !0 : !(!nq() && !oq()) && sq() === "1") || !zm(L.m.T)
    }

    function Iq() {
        var a = "0",
            b = "0",
            c;
        var d = kq();
        c = d.active ? d.cmpId : void 0;
        typeof c === "number" && c >= 0 && c <= 4095 && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
        var e = "0",
            f;
        var g = kq();
        f = g.active ? g.tcfPolicyVersion : void 0;
        typeof f === "number" && f >= 0 && f <= 63 && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
        var k = 0;
        yn() && (k |= 1);
        sq() === "1" && (k |= 2);
        nq() && (k |= 4);
        var m;
        var n = kq();
        m = n.enableAdvertiserConsentMode !==
            void 0 ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
        m === "1" && (k |= 8);
        rm().waitPeriodTimedOut && (k |= 16);
        return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [k]
    }

    function Jq() {
        return wn() === "US-CO"
    };

    function Kq() {
        var a = !1;
        return a
    };
    var Lq = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    };

    function Mq(a) {
        a = a === void 0 ? {} : a;
        var b = Wf.ctid.split("-")[0].toUpperCase(),
            c = {
                ctid: Wf.ctid,
                Nn: mj.Hh,
                Pn: mj.Ih,
                vn: Ol.We ? 2 : 1,
                Vn: a.Yk,
                ff: Wf.canonicalContainerId
            };
        c.ff !== a.Da && (c.Da = a.Da);
        var d = am();
        c.Dn = d ? d.canonicalContainerId : void 0;
        sj ? (c.Hg = Lq[b], c.Hg || (c.Hg = 0)) : c.Hg = wj ? 13 : 10;
        Fj.C ? (c.Fg = 0, c.rm = 2) : uj ? c.Fg = 1 : Kq() ? c.Fg = 2 : c.Fg = 3;
        var e = {};
        e[6] = Pl;
        Fj.H === 2 ? e[7] = !0 : Fj.H === 1 && (e[2] = !0);
        if (jc) {
            var f = ck(ik(jc), "host");
            f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null)
        }
        c.vm = e;
        var g = a.sg,
            k;
        var m = c.Hg,
            n = c.Fg;
        m === void 0 ? k = "" : (n || (n = 0), k = "" + Oe(1, 1) + Le(m << 2 | n));
        var p = c.rm,
            q = "4" + k + (p ? "" + Oe(2, 1) + Le(p) : ""),
            r, v = c.Pn;
        r = v && Ne.test(v) ? "" + Oe(3, 2) + v : "";
        var u, t = c.Nn;
        u = t ? "" + Oe(4, 1) + Le(t) : "";
        var w;
        var x = c.ctid;
        if (x && g) {
            var y = x.split("-"),
                B = y[0].toUpperCase();
            if (B !== "GTM" && B !== "OPT") w = "";
            else {
                var D = y[1];
                w = "" + Oe(5, 3) + Le(1 + D.length) + (c.vn || 0) + D
            }
        } else w = "";
        var E = c.Vn,
            H = c.ff,
            N = c.Da,
            M = c.Mo,
            U = q + r + u + w + (E ? "" + Oe(6, 1) + Le(E) : "") + (H ? "" + Oe(7, 3) + Le(H.length) + H : "") + (N ? "" + Oe(8, 3) + Le(N.length) + N : "") + (M ? "" + Oe(9, 3) + Le(M.length) +
                M : ""),
            F;
        var R = c.vm;
        R = R === void 0 ? {} : R;
        for (var ba = [], ha = l(Object.keys(R)), Y = ha.next(); !Y.done; Y = ha.next()) {
            var Q = Y.value;
            ba[Number(Q)] = R[Q]
        }
        if (ba.length) {
            var ja = Oe(10, 3),
                la;
            if (ba.length === 0) la = Le(0);
            else {
                for (var na = [], Ea = 0, Ra = !1, Ha = 0; Ha < ba.length; Ha++) {
                    Ra = !0;
                    var Ua = Ha % 6;
                    ba[Ha] && (Ea |= 1 << Ua);
                    Ua === 5 && (na.push(Le(Ea)), Ea = 0, Ra = !1)
                }
                Ra && na.push(Le(Ea));
                la = na.join("")
            }
            var lb = la;
            F = "" + ja + Le(lb.length) + lb
        } else F = "";
        var ac = c.Dn;
        return U + F + (ac ? "" + Oe(11, 3) + Le(ac.length) + ac : "")
    };

    function Nq(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; d >= 0; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = c !== 0 ? b ^ c >> 21 : b;
        return b
    };
    var Oq = {
        M: {
            dm: 0,
            Pi: 1,
            Of: 2,
            Si: 3,
            Lg: 4,
            Qi: 5,
            Ri: 6,
            Ti: 7,
            Mg: 8,
            Tj: 9,
            Sj: 10,
            Ch: 11,
            Uj: 12,
            og: 13,
            Wj: 14,
            Xe: 15,
            bm: 16,
            Ld: 17,
            Oh: 18,
            Ph: 19,
            Qh: 20,
            pk: 21,
            Rh: 22,
            Ng: 23,
            aj: 24
        }
    };
    Oq.M[Oq.M.dm] = "RESERVED_ZERO";
    Oq.M[Oq.M.Pi] = "ADS_CONVERSION_HIT";
    Oq.M[Oq.M.Of] = "CONTAINER_EXECUTE_START";
    Oq.M[Oq.M.Si] = "CONTAINER_SETUP_END";
    Oq.M[Oq.M.Lg] = "CONTAINER_SETUP_START";
    Oq.M[Oq.M.Qi] = "CONTAINER_BLOCKING_END";
    Oq.M[Oq.M.Ri] = "CONTAINER_EXECUTE_END";
    Oq.M[Oq.M.Ti] = "CONTAINER_YIELD_END";
    Oq.M[Oq.M.Mg] = "CONTAINER_YIELD_START";
    Oq.M[Oq.M.Tj] = "EVENT_EXECUTE_END";
    Oq.M[Oq.M.Sj] = "EVENT_EVALUATION_END";
    Oq.M[Oq.M.Ch] = "EVENT_EVALUATION_START";
    Oq.M[Oq.M.Uj] = "EVENT_SETUP_END";
    Oq.M[Oq.M.og] = "EVENT_SETUP_START";
    Oq.M[Oq.M.Wj] = "GA4_CONVERSION_HIT";
    Oq.M[Oq.M.Xe] = "PAGE_LOAD";
    Oq.M[Oq.M.bm] = "PAGEVIEW";
    Oq.M[Oq.M.Ld] = "SNIPPET_LOAD";
    Oq.M[Oq.M.Oh] = "TAG_CALLBACK_ERROR";
    Oq.M[Oq.M.Ph] = "TAG_CALLBACK_FAILURE";
    Oq.M[Oq.M.Qh] = "TAG_CALLBACK_SUCCESS";
    Oq.M[Oq.M.pk] = "TAG_EXECUTE_END";
    Oq.M[Oq.M.Rh] = "TAG_EXECUTE_START";
    Oq.M[Oq.M.Ng] = "CUSTOM_PERFORMANCE_START";
    Oq.M[Oq.M.aj] = "CUSTOM_PERFORMANCE_END";
    var Pq = [],
        Qq = {},
        Rq = {};
    var Sq = ["1"];

    function Tq(a) {
        return a.origin !== "null"
    };

    function Uq(a, b, c, d) {
        if (!Vq(d)) return [];
        if (Pq.includes("1")) {
            var e;
            (e = Lc()) == null || e.mark("1-" + Oq.M.Ng + "-" + (Rq["1"] || 0))
        }
        for (var f = [], g = String(b || Wq()).split(";"), k = 0; k < g.length; k++) {
            var m = g[k].split("="),
                n = m[0].replace(/^\s*|\s*$/g, "");
            if (n && n === a) {
                var p = m.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                p && c && (p = decodeURIComponent(p));
                f.push(p)
            }
        }
        if (Pq.includes("1")) {
            var q = "1-" + Oq.M.aj + "-" + (Rq["1"] || 0),
                r = {
                    start: "1-" + Oq.M.Ng + "-" + (Rq["1"] || 0),
                    end: q
                },
                v;
            (v = Lc()) == null || v.mark(q);
            var u, t, w = (t = (u = Lc()) == null ?
                void 0 : u.measure(q, r)) == null ? void 0 : t.duration;
            w !== void 0 && (Rq["1"] = (Rq["1"] || 0) + 1, Qq["1"] = w + (Qq["1"] || 0))
        }
        return f
    }

    function Xq(a, b, c, d, e) {
        if (Vq(e)) {
            var f = Yq(a, d, e);
            if (f.length === 1) return f[0];
            if (f.length !== 0) {
                f = Zq(f, function(g) {
                    return g.Dm
                }, b);
                if (f.length === 1) return f[0];
                f = Zq(f, function(g) {
                    return g.Gn
                }, c);
                return f[0]
            }
        }
    }

    function $q(a, b, c, d) {
        var e = Wq(),
            f = window;
        Tq(f) && (f.document.cookie = a);
        var g = Wq();
        return e !== g || c !== void 0 && Uq(b, g, !1, d).indexOf(c) >= 0
    }

    function ar(a, b, c, d) {
        function e(w, x, y) {
            if (y == null) return delete k[x], w;
            k[x] = y;
            return w + "; " + x + "=" + y
        }

        function f(w, x) {
            if (x == null) return w;
            k[x] = !0;
            return w + "; " + x
        }
        if (!Vq(c.Qb)) return 2;
        var g;
        b == null ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = br(b), g = a + "=" + b);
        var k = {};
        g = e(g, "path", c.path);
        var m;
        c.expires instanceof Date ? m = c.expires.toUTCString() : c.expires != null && (m = "" + c.expires);
        g = e(g, "expires", m);
        g = e(g, "max-age", c.zn);
        g = e(g, "samesite", c.Qn);
        c.secure &&
            (g = f(g, "secure"));
        var n = c.domain;
        if (n && n.toLowerCase() === "auto") {
            for (var p = cr(), q = void 0, r = !1, v = 0; v < p.length; ++v) {
                var u = p[v] !== "none" ? p[v] : void 0,
                    t = e(g, "domain", u);
                t = f(t, c.flags);
                try {
                    d && d(a, k)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!dr(u, c.path) && $q(t, a, b, c.Qb)) return 0
            }
            if (q && !r) throw q;
            return 1
        }
        n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, k);
        return dr(n, c.path) ? 1 : $q(g, a, b, c.Qb) ? 0 : 1
    }

    function er(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return ar(a, b, c)
    }

    function Zq(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c ? d.push(k) : f === void 0 || m < f ? (e = [k], f = m) : m === f && e.push(k)
        }
        return d.length > 0 ? d : e
    }

    function Yq(a, b, c) {
        for (var d = [], e = Uq(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || !k || b.indexOf(k) !== -1) {
                var m = g.shift();
                if (m) {
                    var n = m.split("-");
                    d.push({
                        xm: e[f],
                        ym: g.join("."),
                        Dm: Number(n[0]) || 1,
                        Gn: Number(n[1]) || 1
                    })
                }
            }
        }
        return d
    }

    function br(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var fr = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        gr = /(^|\.)doubleclick\.net$/i;

    function dr(a, b) {
        return a !== void 0 && (gr.test(window.document.location.hostname) || b === "/" && fr.test(a))
    }

    function hr(a) {
        if (!a) return 1;
        var b = a;
        jg(7) && a === "none" && (b = window.document.location.hostname);
        b = b.indexOf(".") === 0 ? b.substring(1) : b;
        return b.split(".").length
    }

    function ir(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }

    function jr(a, b) {
        var c = "" + hr(a),
            d = ir(b);
        d > 1 && (c += "-" + d);
        return c
    }
    var Wq = function() {
            return Tq(window) ? window.document.cookie : ""
        },
        Vq = function(a) {
            return a && jg(8) ? (Array.isArray(a) ? a : [a]).every(function(b) {
                return Cm(b) && zm(b)
            }) : !0
        },
        cr = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (b.length === 4) {
                var c = b[b.length - 1];
                if (Number(c).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            gr.test(e) || fr.test(e) || a.push("none");
            return a
        };

    function kr(a) {
        var b = Math.round(Math.random() * 2147483647);
        return a ? String(b ^ Nq(a) & 2147483647) : String(b)
    }

    function lr(a) {
        return [kr(a), Math.round(qb() / 1E3)].join(".")
    }

    function mr(a, b, c, d, e) {
        var f = hr(b),
            g;
        return (g = Xq(a, f, ir(c), d, e)) == null ? void 0 : g.ym
    }

    function nr(a, b, c, d) {
        return [b, jr(c, d), a].join(".")
    };

    function or(a, b, c, d) {
        var e, f = Number(a.Pb != null ? a.Pb : void 0);
        f !== 0 && (e = new Date((b || qb()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Qb: d
        }
    };
    var pr = ["ad_storage", "ad_user_data"];

    function qr(a, b) {
        if (!a) return 10;
        if (b === null || b === void 0 || b === "") return 11;
        var c = rr(!1);
        if (c.error !== 0) return c.error;
        if (!c.value) return 2;
        c.value[a] = b;
        return sr(c)
    }

    function tr(a) {
        if (!a) return {
            error: 10
        };
        var b = rr();
        if (b.error !== 0) return b;
        if (!b.value) return {
            error: 2
        };
        if (!(a in b.value)) return {
            value: void 0,
            error: 15
        };
        var c = b.value[a];
        return c === null || c === void 0 || c === "" ? {
            value: void 0,
            error: 11
        } : {
            value: c,
            error: 0
        }
    }

    function rr(a) {
        a = a === void 0 ? !0 : a;
        if (!zm(pr)) return {
            error: 3
        };
        try {
            if (!z.localStorage) return {
                error: 1
            }
        } catch (f) {
            return {
                error: 14
            }
        }
        var b = {
                schema: "gcl",
                version: 1
            },
            c = void 0;
        try {
            c = z.localStorage.getItem("_gcl_ls")
        } catch (f) {
            return {
                error: 13
            }
        }
        try {
            if (c) {
                var d = JSON.parse(c);
                if (d && typeof d === "object") b = d;
                else return {
                    error: 12
                }
            }
        } catch (f) {
            return {
                error: 8
            }
        }
        if (b.schema !== "gcl") return {
            error: 4
        };
        if (b.version !== 1) return {
            error: 5
        };
        try {
            var e = ur(b);
            a && e && sr({
                value: b,
                error: 0
            })
        } catch (f) {
            return {
                error: 8
            }
        }
        return {
            value: b,
            error: 0
        }
    }

    function ur(a) {
        if (!a || typeof a !== "object") return !1;
        if ("expires" in a && "value" in a) {
            var b;
            typeof a.expires === "number" ? b = a.expires : b = typeof a.expires === "string" ? Number(a.expires) : NaN;
            if (isNaN(b) || !(Date.now() <= b)) return a.value = null, a.error = 9, !0
        } else {
            for (var c = !1, d = l(Object.keys(a)), e = d.next(); !e.done; e = d.next()) c = ur(a[e.value]) || c;
            return c
        }
        return !1
    }

    function sr(a) {
        if (a.error) return a.error;
        if (!a.value) return 2;
        var b = a.value,
            c;
        try {
            c = JSON.stringify(b)
        } catch (d) {
            return 6
        }
        try {
            z.localStorage.setItem("_gcl_ls", c)
        } catch (d) {
            return 7
        }
        return 0
    };

    function vr() {
        if (!wr()) return -1;
        var a = xr();
        return a !== -1 && yr(a + 1) ? a + 1 : -1
    }

    function xr() {
        if (!wr()) return -1;
        var a = tr("gcl_ctr");
        if (!a || a.error !== 0 || !a.value || typeof a.value !== "object") return -1;
        var b = a.value;
        try {
            if (!("value" in b && b.value) || typeof b.value !== "object") return -1;
            var c = b.value.value;
            return c == null || Number.isNaN(c) ? -1 : Number(c)
        } catch (d) {
            return -1
        }
    }

    function wr() {
        return zm(["ad_storage", "ad_user_data"]) ? jg(11) : !1
    }

    function yr(a, b) {
        b = b || {};
        var c = qb();
        return qr("gcl_ctr", {
            value: {
                value: a,
                creationTimeMs: c
            },
            expires: Number(or(b, c, !0).expires)
        }) === 0 ? !0 : !1
    };
    var zr;

    function Ar() {
        function a(g) {
            c(g.target || g.srcElement || {})
        }

        function b(g) {
            d(g.target || g.srcElement || {})
        }
        var c = Br,
            d = Cr,
            e = Dr();
        if (!e.init) {
            xc(A, "mousedown", a);
            xc(A, "keyup", a);
            xc(A, "submit", b);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                d(this);
                f.call(this)
            };
            e.init = !0
        }
    }

    function Er(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: c === 2,
            placement: c,
            forms: d,
            sameHost: e
        };
        Dr().decorators.push(f)
    }

    function Fr(a, b, c) {
        for (var d = Dr().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f],
                k;
            if (k = !c || g.forms) a: {
                var m = g.domains,
                    n = a,
                    p = !!g.sameHost;
                if (m && (p || n !== A.location.hostname))
                    for (var q = 0; q < m.length; q++)
                        if (m[q] instanceof RegExp) {
                            if (m[q].test(n)) {
                                k = !0;
                                break a
                            }
                        } else if (n.indexOf(m[q]) >= 0 || p && m[q].indexOf(n) >= 0) {
                    k = !0;
                    break a
                }
                k = !1
            }
            if (k) {
                var r = g.placement;
                r === void 0 && (r = g.fragment ? 2 : 1);
                r === b && tb(e, g.callback())
            }
        }
        return e
    }

    function Dr() {
        var a = kc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Gr = /(.*?)\*(.*?)\*(.*)/,
        Hr = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ir = /^(?:www\.|m\.|amp\.)+/,
        Jr = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Kr(a) {
        var b = Jr.exec(a);
        if (b) return {
            Bi: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function Lr(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }

    function Mr(a, b) {
        var c = [gc.userAgent, (new Date).getTimezoneOffset(), gc.userLanguage || gc.language, Math.floor(qb() / 60 / 1E3) - (b === void 0 ? 0 : b), a].join("*"),
            d;
        if (!(d = zr)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, k = 0; k < 8; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        zr = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ zr[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function Nr(a) {
        return function(b) {
            var c = ik(z.location.href),
                d = c.search.replace("?", ""),
                e = bk(d, "_gl", !1, !0) || "";
            b.query = Or(e) || {};
            var f = ck(c, "fragment"),
                g;
            var k = -1;
            if (vb(f, "_gl=")) k = 4;
            else {
                var m = f.indexOf("&_gl=");
                m > 0 && (k = m + 3 + 2)
            }
            if (k < 0) g = void 0;
            else {
                var n = f.indexOf("&", k);
                g = n < 0 ? f.substring(k) : f.substring(k, n)
            }
            b.fragment = Or(g || "") || {};
            a && Pr(c, d, f)
        }
    }

    function Qr(a, b) {
        var c = Lr(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }

    function Pr(a, b, c) {
        function d(g, k) {
            var m = Qr("_gl", g);
            m.length && (m = k + m);
            return m
        }
        if (fc && fc.replaceState) {
            var e = Lr("_gl");
            if (e.test(b) || e.test(c)) {
                var f = ck(a, "path");
                b = d(b, "?");
                c = d(c, "#");
                fc.replaceState({}, "", "" + f + b + c)
            }
        }
    }

    function Rr(a, b) {
        var c = Nr(!!b),
            d = Dr();
        d.data || (d.data = {
            query: {},
            fragment: {}
        }, c(d.data));
        var e = {},
            f = d.data;
        f && (tb(e, f.query), a && tb(e, f.fragment));
        return e
    }
    var Or = function(a) {
        try {
            var b = Sr(a, 3);
            if (b !== void 0) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e],
                        g = Va(d[e + 1]);
                    c[f] = g
                }
                Xa("TAGGING", 6);
                return c
            }
        } catch (k) {
            Xa("TAGGING", 8)
        }
    };

    function Sr(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; e < 3; ++e) {
                    var f = Gr.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && g[1] === "1") {
                var k = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Mr(k, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return k;
                Xa("TAGGING", 7)
            }
        }
    }

    function Tr(a, b, c, d, e) {
        function f(p) {
            p = Qr(a, p);
            var q = p.charAt(p.length - 1);
            p && q !== "&" && (p += "&");
            return p + n
        }
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var g = Kr(c);
        if (!g) return "";
        var k = g.query || "",
            m = g.fragment || "",
            n = a + "=" + b;
        d ? m.substring(1).length !== 0 && e || (m = "#" + f(m.substring(1))) : k = "?" + f(k.substring(1));
        return "" + g.Bi + k + m
    }

    function Ur(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var v in n)
                    if (n.hasOwnProperty(v)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var u, t = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        x !== void 0 && x === x && x !== null && x.toString() !== "[object Object]" && (t.push(w), t.push(Ta(String(x))))
                    }
                var y = t.join("*");
                u = ["1", Mr(y), y].join("*");
                d ? (jg(3) || jg(1) || !p) && Vr("_gl", u, a, p, q) : Wr("_gl", u, a, p, q)
            }
        }
        var d = (a.tagName || "").toUpperCase() === "FORM",
            e = Fr(b, 1, d),
            f = Fr(b, 2, d),
            g = Fr(b, 4, d),
            k = Fr(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        jg(1) && c(g, !0, !0);
        for (var m in k) k.hasOwnProperty(m) &&
            Xr(m, k[m], a)
    }

    function Xr(a, b, c) {
        c.tagName.toLowerCase() === "a" ? Wr(a, b, c) : c.tagName.toLowerCase() === "form" && Vr(a, b, c)
    }

    function Wr(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !jg(5) || d)) {
                var k = z.location.href,
                    m = Kr(c.href),
                    n = Kr(k);
                g = !(m && n && m.Bi === n.Bi && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = Tr(a, b, c.href, d, e);
            Vb.test(p) && (c.href = p)
        }
    }

    function Vr(a, b, c, d, e) {
        d = d === void 0 ? !1 : d;
        e = e === void 0 ? !1 : e;
        if (c) {
            var f = (jg(12) ? c.getAttribute("action") : c.action) || "";
            if (f) {
                var g = (c.method || "").toLowerCase();
                if (g !== "get" || d) {
                    if (g === "get" || g === "post") {
                        var k = Tr(a, b, f, d, e);
                        Vb.test(k) && (c.action = k)
                    }
                } else {
                    for (var m = c.childNodes || [], n = !1, p = 0; p < m.length; p++) {
                        var q = m[p];
                        if (q.name === a) {
                            q.setAttribute("value", b);
                            n = !0;
                            break
                        }
                    }
                    if (!n) {
                        var r = A.createElement("input");
                        r.setAttribute("type", "hidden");
                        r.setAttribute("name", a);
                        r.setAttribute("value", b);
                        c.appendChild(r)
                    }
                }
            }
        }
    }

    function Br(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && d > 0;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                f !== "http:" && f !== "https:" || Ur(e, e.hostname)
            }
        } catch (g) {}
    }

    function Cr(a) {
        try {
            var b;
            if (b = jg(12) ? a.getAttribute("action") : a.action) {
                var c = ck(ik(b), "host");
                Ur(a, c)
            }
        } catch (d) {}
    }

    function Yr(a, b, c, d) {
        Ar();
        var e = c === "fragment" ? 2 : 1;
        d = !!d;
        Er(a, b, e, d, !1);
        e === 2 && Xa("TAGGING", 23);
        d && Xa("TAGGING", 24)
    }

    function Zr(a, b) {
        Ar();
        Er(a, [ek(z.location, "host", !0)], b, !0, !0)
    }

    function $r() {
        var a = A.location.hostname,
            b = Hr.exec(A.referrer);
        if (!b) return !1;
        var c = b[2],
            d = b[1],
            e = "";
        if (c) {
            var f = c.split("/"),
                g = f[1];
            e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (d.indexOf("xn--") === 0) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var k = a.replace(Ir, ""),
            m = e.replace(Ir, ""),
            n;
        if (!(n = k === m)) {
            var p = "." + m;
            n = k.length >= p.length && k.substring(k.length - p.length, k.length) === p
        }
        return n
    }

    function as(a, b) {
        return a === !1 ? !1 : a || b || $r()
    };
    var bs = ["1"],
        cs = {},
        ds = {};

    function es(a, b) {
        b = b === void 0 ? !0 : b;
        var c = fs(a.prefix);
        if (cs[c]) gs(a);
        else if (hs(c, a.path, a.domain)) {
            var d = ds[fs(a.prefix)] || {
                id: void 0,
                Eg: void 0
            };
            b && is(a, d.id, d.Eg);
            gs(a)
        } else {
            var e = kk("auiddc");
            if (e) Xa("TAGGING", 17), cs[c] = e;
            else if (b) {
                var f = fs(a.prefix),
                    g = lr();
                js(f, g, a);
                hs(c, a.path, a.domain);
                gs(a, !0)
            }
        }
    }

    function gs(a, b) {
        if ((b === void 0 ? 0 : b) && wr()) {
            var c = rr(!1);
            c.error === 0 && c.value && "gcl_ctr" in c.value && (delete c.value.gcl_ctr, sr(c))
        }
        zm(["ad_storage", "ad_user_data"]) && jg(10) && xr() === -1 && yr(0, a)
    }

    function is(a, b, c) {
        var d = fs(a.prefix),
            e = cs[d];
        if (e) {
            var f = e.split(".");
            if (f.length === 2) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var k = e;
                    b && (k = e + "." + b + "." + (c ? c : Math.floor(qb() / 1E3)));
                    js(d, k, a, g * 1E3)
                }
            }
        }
    }

    function js(a, b, c, d) {
        var e = nr(b, "1", c.domain, c.path),
            f = or(c, d);
        f.Qb = ks();
        er(a, e, f)
    }

    function hs(a, b, c) {
        var d = mr(a, b, c, bs, ks());
        if (!d) return !1;
        ls(a, d);
        return !0
    }

    function ls(a, b) {
        var c = b.split(".");
        c.length === 5 ? (cs[a] = c.slice(0, 2).join("."), ds[a] = {
            id: c.slice(2, 4).join("."),
            Eg: Number(c[4]) || 0
        }) : c.length === 3 ? ds[a] = {
            id: c.slice(0, 2).join("."),
            Eg: Number(c[2]) || 0
        } : cs[a] = b
    }

    function fs(a) {
        return (a || "_gcl") + "_au"
    }

    function ms(a) {
        function b() {
            zm(c) && a()
        }
        var c = ks();
        Gm(function() {
            b();
            zm(c) || Hm(b, c)
        }, c)
    }

    function ns(a) {
        var b = Rr(!0),
            c = fs(a.prefix);
        ms(function() {
            var d = b[c];
            if (d) {
                ls(c, d);
                var e = Number(cs[c].split(".")[1]) * 1E3;
                if (e) {
                    Xa("TAGGING", 16);
                    var f = or(a, e);
                    f.Qb = ks();
                    var g = nr(d, "1", a.domain, a.path);
                    er(c, g, f)
                }
            }
        })
    }

    function os(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                k = mr(a, e.path, e.domain, bs, ks());
            k && (g[a] = k);
            return g
        };
        ms(function() {
            Yr(f, b, c, d)
        })
    }

    function ks() {
        return ["ad_storage", "ad_user_data"]
    };
    var ps = {},
        qs = (ps.k = {
            W: /^[\w-]+$/
        }, ps.b = {
            W: /^[\w-]+$/,
            Ii: !0
        }, ps.i = {
            W: /^[1-9]\d*$/
        }, ps.h = {
            W: /^\d+$/
        }, ps.t = {
            W: /^[1-9]\d*$/
        }, ps.d = {
            W: /^[A-Za-z0-9_-]+$/
        }, ps.j = {
            W: /^\d+$/
        }, ps.u = {
            W: /^[1-9]\d*$/
        }, ps.l = {
            W: /^[01]$/
        }, ps.o = {
            W: /^[1-9]\d*$/
        }, ps.g = {
            W: /^[01]$/
        }, ps.s = {
            W: /^.+$/
        }, ps);
    var rs = {},
        vs = (rs[5] = {
            Jg: {
                2: ss
            },
            vi: "2",
            ug: ["k", "i", "b", "u"]
        }, rs[4] = {
            Jg: {
                2: ss,
                GCL: ts
            },
            vi: "2",
            ug: ["k", "i", "b"]
        }, rs[2] = {
            Jg: {
                GS2: ss,
                GS1: us
            },
            vi: "GS2",
            ug: "sogtjlhd".split("")
        }, rs);

    function ws(a, b, c) {
        var d = vs[b];
        if (d) {
            var e = a.split(".")[0];
            c == null || c(e);
            if (e) {
                var f = d.Jg[e];
                if (f) return f(a, b)
            }
        }
    }

    function ss(a, b) {
        var c = a.split(".");
        if (c.length === 3) {
            var d = {},
                e = vs[b];
            if (e) {
                for (var f = e.ug, g = l(c[2].split("$")), k = g.next(); !k.done; k = g.next()) {
                    var m = k.value,
                        n = m[0];
                    if (f.indexOf(n) !== -1) try {
                        var p = decodeURIComponent(m.substring(1)),
                            q = qs[n];
                        q && (q.Ii ? (d[n] = d[n] || [], d[n].push(p)) : d[n] = p)
                    } catch (r) {}
                }
                return d
            }
        }
    }

    function xs(a, b, c) {
        var d = vs[b];
        if (d) return [d.vi, c || "1", ys(a, b)].join(".")
    }

    function ys(a, b) {
        var c = vs[b];
        if (c) {
            for (var d = [], e = l(c.ug), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    k = qs[g];
                if (k) {
                    var m = a[g];
                    if (m !== void 0)
                        if (k.Ii && Array.isArray(m))
                            for (var n = l(m), p = n.next(); !p.done; p = n.next()) d.push(encodeURIComponent("" + g + p.value));
                        else d.push(encodeURIComponent("" + g + m))
                }
            }
            return d.join("$")
        }
    }

    function ts(a) {
        var b = a.split(".");
        b.shift();
        var c = b.shift(),
            d = b.shift(),
            e = {};
        return e.k = d, e.i = c, e.b = b, e
    }

    function us(a) {
        var b = a.split(".").slice(2);
        if (!(b.length < 5 || b.length > 7)) {
            var c = {};
            return c.s = b[0], c.o = b[1], c.g = b[2], c.t = b[3], c.j = b[4], c.l = b[5], c.h = b[6], c
        }
    };
    var zs = new Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]],
        [2, "analytics_storage"]
    ]);

    function As(a, b, c) {
        if (vs[b]) {
            for (var d = [], e = Uq(a, void 0, void 0, zs.get(b)), f = l(e), g = f.next(); !g.done; g = f.next()) {
                var k = ws(g.value, b, c);
                k && d.push(Bs(k))
            }
            return d
        }
    }

    function Cs(a, b, c, d, e) {
        d = d || {};
        var f = jr(d.domain, d.path),
            g = xs(b, c, f);
        if (!g) return 1;
        var k = or(d, e, void 0, zs.get(c));
        return er(a, g, k)
    }

    function Ds(a, b) {
        var c = b.W;
        return typeof c === "function" ? c(a) : c.test(a)
    }

    function Bs(a) {
        for (var b = l(Object.keys(a)), c = b.next(), d = {}; !c.done; d = {
                jf: void 0
            }, c = b.next()) {
            var e = c.value,
                f = a[e];
            d.jf = qs[e];
            d.jf ? d.jf.Ii ? a[e] = Array.isArray(f) ? f.filter(function(g) {
                return function(k) {
                    return Ds(k, g.jf)
                }
            }(d)) : void 0 : typeof f === "string" && Ds(f, d.jf) || (a[e] = void 0) : a[e] = void 0
        }
        return a
    };

    function Es(a) {
        for (var b = [], c = A.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Ni: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, k) {
            return k.timestamp - g.timestamp
        });
        return b
    }

    function Fs(a, b) {
        var c = Es(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!(f[0] !== "1" || b && f.length < 3 || !b && f.length !== 3) && Number(f[1])) {
                d[c[e].Ni] || (d[c[e].Ni] = []);
                var g = {
                    version: f[0],
                    timestamp: Number(f[1]) * 1E3,
                    Z: f[2]
                };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].Ni].push(g)
            }
        }
        return d
    };

    function Gs() {
        var a = String,
            b = z.location.hostname,
            c = z.location.pathname,
            d = b = Db(b);
        d.split(".").length > 2 && (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
        b = d;
        c = Db(c);
        var e = c.split(";")[0];
        e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
        return a(Nq(("" + b + e).toLowerCase()))
    };
    var Hs = /^\w+$/,
        Is = /^[\w-]+$/,
        Js = {},
        Ks = (Js.aw = "_aw", Js.dc = "_dc", Js.gf = "_gf", Js.gp = "_gp", Js.gs = "_gs", Js.ha = "_ha", Js.ag = "_ag", Js.gb = "_gb", Js);

    function Ls() {
        return ["ad_storage", "ad_user_data"]
    }

    function Ms(a) {
        return !jg(8) || zm(a)
    }

    function Ns(a, b) {
        function c() {
            var d = Ms(b);
            d && a();
            return d
        }
        Gm(function() {
            c() || Hm(c, b)
        }, b)
    }

    function Os(a) {
        return Ps(a).map(function(b) {
            return b.Z
        })
    }

    function Qs(a) {
        return Rs(a).filter(function(b) {
            return b.Z
        }).map(function(b) {
            return b.Z
        })
    }

    function Rs(a) {
        var b = Ss(a.prefix),
            c = Ts("gb", b),
            d = Ts("ag", b);
        if (!d || !c) return [];
        var e = function(k) {
                return function(m) {
                    m.type = k;
                    return m
                }
            },
            f = Ps(c).map(e("gb")),
            g = Us(d).map(e("ag"));
        return f.concat(g).sort(function(k, m) {
            return m.timestamp - k.timestamp
        })
    }

    function Vs(a, b, c, d, e, f) {
        var g = eb(a, function(k) {
            return k.Z === c
        });
        g ? (g.timestamp < d && (g.timestamp = d, g.Vd = f), g.labels = Ws(g.labels || [], e || [])) : a.push({
            version: b,
            Z: c,
            timestamp: d,
            labels: e,
            Vd: f
        })
    }

    function Us(a) {
        for (var b = As(a, 5) || [], c = [], d = l(b), e = d.next(); !e.done; e = d.next()) {
            var f = e.value,
                g = f,
                k = g.k,
                m = g.b,
                n = Xs(f);
            if (n) {
                var p = void 0;
                jg(9) && (p = f.u);
                Vs(c, "2", k, n, m || [], p)
            }
        }
        return c.sort(function(q, r) {
            return r.timestamp - q.timestamp
        })
    }

    function Ps(a) {
        for (var b = [], c = Uq(a, A.cookie, void 0, Ls()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = Ys(e.value);
            if (f != null) {
                var g = f;
                Vs(b, g.version, g.Z, g.timestamp, g.labels)
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return Zs(b)
    }

    function $s(a, b) {
        for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            c.includes(f) || c.push(f)
        }
        for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
            var m = k.value;
            c.includes(m) || c.push(m)
        }
        return c
    }

    function at(a, b) {
        var c = eb(a, function(d) {
            return d.Z === b.Z
        });
        c ? (c.timestamp < b.timestamp && (c.timestamp = b.timestamp, c.Vd = b.Vd), c.Va = c.Va ? b.Va ? c.timestamp < b.timestamp ? b.Va : c.Va : c.Va || 0 : b.Va || 0, c.labels = $s(c.labels || [], b.labels || []), c.gd = $s(c.gd || [], b.gd || [])) : a.push(b)
    }

    function bt() {
        var a = tr("gclid");
        if (!a || a.error || !a.value || typeof a.value !== "object") return null;
        var b = a.value;
        try {
            if (!("value" in b && b.value) || typeof b.value !== "object") return null;
            var c = b.value,
                d = c.value;
            return d && d.match(Is) ? {
                version: "",
                Z: d,
                timestamp: Number(c.creationTimeMs) || 0,
                labels: [],
                Va: c.linkDecorationSource || 0,
                gd: [2]
            } : null
        } catch (e) {
            return null
        }
    }

    function ct(a) {
        for (var b = [], c = Uq(a, A.cookie, void 0, Ls()), d = l(c), e = d.next(); !e.done; e = d.next()) {
            var f = Ys(e.value);
            f != null && (f.Vd = void 0, f.Va = 0, f.gd = [1], at(b, f))
        }
        var g = bt();
        g && (g.Vd = void 0, g.Va = g.Va || 0, g.gd = g.gd || [2], at(b, g));
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return Zs(b)
    }

    function Ws(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function Ss(a) {
        return a && typeof a === "string" && a.match(Hs) ? a : "_gcl"
    }

    function dt(a, b, c) {
        var d = ik(a),
            e = ck(d, "query", !1, void 0, "gclsrc"),
            f = {
                value: ck(d, "query", !1, void 0, "gclid"),
                Va: c ? 4 : 2
            };
        if (b && (!f.value || !e)) {
            var g = d.hash.replace("#", "");
            f.value || (f.value = bk(g, "gclid", !1), f.Va = 3);
            e || (e = bk(g, "gclsrc", !1))
        }
        return !f.value || e !== void 0 && e !== "aw" && e !== "aw.ds" ? [] : [f]
    }

    function et(a, b) {
        var c = ik(a),
            d = ck(c, "query", !1, void 0, "gclid"),
            e = ck(c, "query", !1, void 0, "gclsrc"),
            f = ck(c, "query", !1, void 0, "wbraid");
        f = Bb(f);
        var g = ck(c, "query", !1, void 0, "gbraid"),
            k = ck(c, "query", !1, void 0, "gad_source"),
            m = ck(c, "query", !1, void 0, "dclid");
        if (b && !(d && e && f && g)) {
            var n = c.hash.replace("#", "");
            d = d || bk(n, "gclid", !1);
            e = e || bk(n, "gclsrc", !1);
            f = f || bk(n, "wbraid", !1);
            g = g || bk(n, "gbraid", !1);
            k = k || bk(n, "gad_source", !1)
        }
        return ft(d, e, m, f, g, k)
    }

    function gt() {
        return et(z.location.href, !0)
    }

    function ft(a, b, c, d, e, f) {
        var g = {},
            k = function(m, n) {
                g[n] || (g[n] = []);
                g[n].push(m)
            };
        g.gclid = a;
        g.gclsrc = b;
        g.dclid = c;
        if (a !== void 0 && a.match(Is)) switch (b) {
            case void 0:
                k(a, "aw");
                break;
            case "aw.ds":
                k(a, "aw");
                k(a, "dc");
                break;
            case "ds":
                k(a, "dc");
                break;
            case "3p.ds":
                k(a, "dc");
                break;
            case "gf":
                k(a, "gf");
                break;
            case "ha":
                k(a, "ha")
        }
        c && k(c, "dc");
        d !== void 0 && Is.test(d) && (g.wbraid = d, k(d, "gb"));
        e !== void 0 && Is.test(e) && (g.gbraid = e, k(e, "ag"));
        f !== void 0 && Is.test(f) && (g.gad_source = f, k(f, "gs"));
        return g
    }

    function ht(a) {
        for (var b = gt(), c = !0, d = l(Object.keys(b)), e = d.next(); !e.done; e = d.next())
            if (b[e.value] !== void 0) {
                c = !1;
                break
            }
        c && (b = et(z.document.referrer, !1), b.gad_source = void 0);
        it(b, !1, a)
    }

    function jt(a) {
        ht(a);
        var b = dt(z.location.href, !0, !1);
        b.length || (b = dt(z.document.referrer, !1, !0));
        if (b.length) {
            var c = b[0];
            a = a || {};
            var d = qb(),
                e = or(a, d, !0),
                f = Ls(),
                g = function() {
                    Ms(f) && e.expires !== void 0 && qr("gclid", {
                        value: {
                            value: c.value,
                            creationTimeMs: d,
                            linkDecorationSource: c.Va
                        },
                        expires: Number(e.expires)
                    })
                };
            Gm(function() {
                g();
                Ms(f) || Hm(g, f)
            }, f)
        }
    }

    function it(a, b, c, d, e) {
        c = c || {};
        e = e || [];
        var f = Ss(c.prefix),
            g = d || qb(),
            k = Math.round(g / 1E3),
            m = Ls(),
            n = !1,
            p = !1,
            q = function() {
                if (Ms(m)) {
                    var r = or(c, g, !0);
                    r.Qb = m;
                    for (var v = function(M, U) {
                            var F = Ts(M, f);
                            F && (er(F, U, r), M !== "gb" && (n = !0))
                        }, u = function(M) {
                            var U = ["GCL", k, M];
                            e.length > 0 && U.push(e.join("."));
                            return U.join(".")
                        }, t = l(["aw", "dc", "gf", "ha", "gp"]), w = t.next(); !w.done; w = t.next()) {
                        var x = w.value;
                        a[x] && v(x, u(a[x][0]))
                    }
                    if (!n && a.gb) {
                        var y = a.gb[0],
                            B = Ts("gb", f);
                        !b && Ps(B).some(function(M) {
                            return M.Z === y && M.labels && M.labels.length >
                                0
                        }) || v("gb", u(y))
                    }
                }
                if (!p && a.gbraid && Ms("ad_storage") && (p = !0, !n)) {
                    var D = a.gbraid,
                        E = Ts("ag", f);
                    if (b || !Us(E).some(function(M) {
                            return M.Z === D && M.labels && M.labels.length > 0
                        })) {
                        var H = {},
                            N = (H.k = D, H.i = "" + k, H.b = e, H);
                        Cs(E, N, 5, c, g)
                    }
                }
                kt(a, f, g, c)
            };
        Gm(function() {
            q();
            Ms(m) || Hm(q, m)
        }, m)
    }

    function kt(a, b, c, d) {
        if (a.gad_source !== void 0 && Ms("ad_storage")) {
            if (jg(4)) {
                var e = Kc();
                if (e === "r" || e === "h") return
            }
            var f = a.gad_source,
                g = Ts("gs", b);
            if (g) {
                var k = Math.floor((qb() - (Jc() || 0)) / 1E3),
                    m;
                if (jg(9)) {
                    var n = Gs(),
                        p = {};
                    m = (p.k = f, p.i = "" + k, p.u = n, p)
                } else {
                    var q = {};
                    m = (q.k = f, q.i = "" + k, q)
                }
                Cs(g, m, 5, d, c)
            }
        }
    }

    function lt(a, b) {
        var c = Rr(!0);
        Ns(function() {
            for (var d = Ss(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (Ks[f] !== void 0) {
                    var g = Ts(f, d),
                        k = c[g];
                    if (k) {
                        var m = Math.min(mt(k), qb()),
                            n;
                        b: {
                            for (var p = m, q = Uq(g, A.cookie, void 0, Ls()), r = 0; r < q.length; ++r)
                                if (mt(q[r]) > p) {
                                    n = !0;
                                    break b
                                }
                            n = !1
                        }
                        if (!n) {
                            var v = or(b, m, !0);
                            v.Qb = Ls();
                            er(g, k, v)
                        }
                    }
                }
            }
            it(ft(c.gclid, c.gclsrc), !1, b)
        }, Ls())
    }

    function nt(a) {
        var b = ["ag"],
            c = Rr(!0),
            d = Ss(a.prefix);
        Ns(function() {
            for (var e = 0; e < b.length; ++e) {
                var f = Ts(b[e], d);
                if (f) {
                    var g = c[f];
                    if (g) {
                        var k = ws(g, 5);
                        if (k) {
                            var m = Xs(k);
                            m || (m = qb());
                            var n;
                            a: {
                                for (var p = m, q = As(f, 5), r = 0; r < q.length; ++r)
                                    if (Xs(q[r]) > p) {
                                        n = !0;
                                        break a
                                    }
                                n = !1
                            }
                            if (n) break;
                            k.i = "" + Math.round(m / 1E3);
                            Cs(f, k, 5, a, m)
                        }
                    }
                }
            }
        }, ["ad_storage"])
    }

    function Ts(a, b) {
        var c = Ks[a];
        if (c !== void 0) return b + c
    }

    function mt(a) {
        return ot(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }

    function Xs(a) {
        return a ? (Number(a.i) || 0) * 1E3 : 0
    }

    function Ys(a) {
        var b = ot(a.split("."));
        return b.length === 0 ? null : {
            version: b[0],
            Z: b[2],
            timestamp: (Number(b[1]) || 0) * 1E3,
            labels: b.slice(3)
        }
    }

    function ot(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !Is.test(a[2]) ? [] : a
    }

    function pt(a, b, c, d, e) {
        if (Array.isArray(b) && Tq(z)) {
            var f = Ss(e),
                g = function() {
                    for (var k = {}, m = 0; m < a.length; ++m) {
                        var n = Ts(a[m], f);
                        if (n) {
                            var p = Uq(n, A.cookie, void 0, Ls());
                            p.length && (k[n] = p.sort()[p.length - 1])
                        }
                    }
                    return k
                };
            Ns(function() {
                Yr(g, b, c, d)
            }, Ls())
        }
    }

    function qt(a, b, c, d) {
        if (Array.isArray(a) && Tq(z)) {
            var e = ["ag"],
                f = Ss(d),
                g = function() {
                    for (var k = {}, m = 0; m < e.length; ++m) {
                        var n = Ts(e[m], f);
                        if (!n) return {};
                        var p = As(n, 5);
                        if (p.length) {
                            var q = p.sort(function(r, v) {
                                return Xs(v) - Xs(r)
                            })[0];
                            k[n] = xs(q, 5)
                        }
                    }
                    return k
                };
            Ns(function() {
                Yr(g, a, b, c)
            }, ["ad_storage"])
        }
    }

    function Zs(a) {
        return a.filter(function(b) {
            return Is.test(b.Z)
        })
    }

    function rt(a, b) {
        if (Tq(z)) {
            for (var c = Ss(b.prefix), d = {}, e = 0; e < a.length; e++) Ks[a[e]] && (d[a[e]] = Ks[a[e]]);
            Ns(function() {
                ib(d, function(f, g) {
                    var k = Uq(c + g, A.cookie, void 0, Ls());
                    k.sort(function(v, u) {
                        return mt(u) - mt(v)
                    });
                    if (k.length) {
                        var m = k[0],
                            n = mt(m),
                            p = ot(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
                            q = {},
                            r;
                        r = ot(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
                        q[f] = [r];
                        it(q, !0, b, n, p)
                    }
                })
            }, Ls())
        }
    }

    function st(a) {
        var b = ["ag"],
            c = ["gbraid"];
        Ns(function() {
            for (var d = Ss(a.prefix), e = 0; e < b.length; ++e) {
                var f = Ts(b[e], d);
                if (!f) break;
                var g = As(f, 5);
                if (g.length) {
                    var k = g.sort(function(q, r) {
                            return Xs(r) - Xs(q)
                        })[0],
                        m = Xs(k),
                        n = k.b,
                        p = {};
                    p[c[e]] = k.k;
                    it(p, !0, a, m, n)
                }
            }
        }, ["ad_storage"])
    }

    function tt(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }

    function ut(a) {
        function b(k, m, n) {
            n && (k[m] = n)
        }
        if (Dm()) {
            var c = gt(),
                d;
            a.includes("gad_source") && (d = c.gad_source !== void 0 ? c.gad_source : Rr(!1)._gs);
            if (tt(c, a) || d) {
                var e = {};
                b(e, "gclid", c.gclid);
                b(e, "dclid", c.dclid);
                b(e, "gclsrc", c.gclsrc);
                b(e, "wbraid", c.wbraid);
                b(e, "gbraid", c.gbraid);
                Zr(function() {
                    return e
                }, 3);
                var f = {},
                    g = (f._up = "1", f);
                b(g, "_gs", d);
                Zr(function() {
                    return g
                }, 1)
            }
        }
    }

    function vt(a) {
        if (!jg(1)) return null;
        var b = Rr(!0).gad_source;
        if (b != null) return z.location.hash = "", b;
        if (jg(2)) {
            var c = ik(z.location.href);
            b = ck(c, "query", !1, void 0, "gad_source");
            if (b != null) return b;
            var d = gt();
            if (tt(d, a)) return "0"
        }
        return null
    }

    function wt(a) {
        var b = vt(a);
        b != null && Zr(function() {
            var c = {};
            return c.gad_source = b, c
        }, 4)
    }

    function xt(a, b, c) {
        var d = [];
        if (b.length === 0) return d;
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                k = g.type ? g.type : "gcl";
            (g.labels || []).indexOf(c) === -1 ? (a.push(0), e[k] || d.push(g)) : a.push(1);
            e[k] = !0
        }
        return d
    }

    function zt(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!Ms(Ls())) return e;
        var f = Ps(a),
            g = xt(e, f, b);
        if (g.length && !d)
            for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
                var n = m.value,
                    p = n.timestamp,
                    q = [n.version, Math.round(p / 1E3), n.Z].concat(n.labels || [], [b]).join("."),
                    r = or(c, p, !0);
                r.Qb = Ls();
                er(a, q, r)
            }
        return e
    }

    function At(a, b) {
        var c = [];
        b = b || {};
        var d = Rs(b),
            e = xt(c, d, a);
        if (e.length)
            for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
                var k = g.value,
                    m = Ss(b.prefix),
                    n = Ts(k.type, m);
                if (!n) break;
                var p = k,
                    q = p.version,
                    r = p.Z,
                    v = p.labels,
                    u = p.timestamp,
                    t = Math.round(u / 1E3);
                if (k.type === "ag") {
                    var w = {},
                        x = (w.k = r, w.i = "" + t, w.b = (v || []).concat([a]), w);
                    Cs(n, x, 5, b, u)
                } else if (k.type === "gb") {
                    var y = [q, t, r].concat(v || [], [a]).join("."),
                        B = or(b, u, !0);
                    B.Qb = Ls();
                    er(n, y, B)
                }
            }
        return c
    }

    function Bt(a, b) {
        var c = Ss(b),
            d = Ts(a, c);
        if (!d) return 0;
        var e;
        e = a === "ag" ? Us(d) : Ps(d);
        for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function Ct(a) {
        for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            for (var e = a[d.value], f = 0; f < e.length; f++) b = Math.max(b, Number(e[f].timestamp));
        return b
    }

    function Dt(a) {
        var b = Math.max(Bt("aw", a), Ct(Ms(Ls()) ? Fs() : {})),
            c = Math.max(Bt("gb", a), Ct(Ms(Ls()) ? Fs("_gac_gb", !0) : {}));
        c = Math.max(c, Bt("ag", a));
        return c > b
    };
    var Et = function(a, b) {
            b = b === void 0 ? !1 : b;
            var c = qo("ads_pageview", function() {
                return {}
            });
            if (c[a]) return !1;
            b || (c[a] = !0);
            return !0
        },
        Ft = function(a) {
            return jk(a, "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "), "0")
        },
        Nt = function(a, b, c, d, e) {
            var f = Ss(a.prefix);
            if (Et(f, !0)) {
                var g = gt(),
                    k = [],
                    m = g.gclid,
                    n = g.dclid,
                    p = g.gclsrc || "aw",
                    q = Gt(),
                    r = q.rf,
                    v = q.Ck;
                !m || p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds" || k.push({
                    Z: m,
                    tf: p
                });
                n && k.push({
                    Z: n,
                    tf: "ds"
                });
                k.length === 2 && O(147);
                k.length === 0 && g.wbraid && k.push({
                    Z: g.wbraid,
                    tf: "gb"
                });
                k.length === 0 && p === "aw.ds" && k.push({
                    Z: "",
                    tf: "aw.ds"
                });
                Ht(function() {
                    var u = S(It());
                    if (u) {
                        es(a);
                        var t = [],
                            w = u ? cs[fs(a.prefix)] : void 0;
                        w && t.push("auid=" + w);
                        if (S(L.m.T)) {
                            e && t.push("userId=" + e);
                            var x = Ao(vo.Kh);
                            if (x === void 0) zo(vo.Lh, !0);
                            else {
                                var y = Ao(vo.bf);
                                t.push("ga_uid=" + y + "." + x)
                            }
                        }
                        var B = A.referrer ? ck(ik(A.referrer), "host") : "",
                            D = u || !d ? k : [];
                        D.length === 0 && (Jt.test(B) || Kt.test(B)) && D.push({
                            Z: "",
                            tf: ""
                        });
                        if (D.length !== 0 || r !== void 0) {
                            B && t.push("ref=" + encodeURIComponent(B));
                            var E = Lt();
                            t.push("url=" +
                                encodeURIComponent(E));
                            t.push("tft=" + qb());
                            var H = Jc();
                            H !== void 0 && t.push("tfd=" + Math.round(H));
                            var N = el(!0);
                            t.push("frm=" + N);
                            r !== void 0 && t.push("gad_source=" + encodeURIComponent(r));
                            v !== void 0 && t.push("gad_source_src=" + encodeURIComponent(v.toString()));
                            if (!c) {
                                var M = {};
                                c = pp(fp(new ep(0), (M[L.m.qa] = Mp.C[L.m.qa], M)))
                            }
                            t.push("gtm=" + Mq({
                                Da: b
                            }));
                            zq() && t.push("gcs=" + Aq());
                            t.push("gcd=" + Eq(c));
                            Hq() && t.push("dma_cps=" + Fq());
                            t.push("dma=" + Gq());
                            yq(c) ? t.push("npa=0") : t.push("npa=1");
                            Jq() && t.push("_ng=1");
                            dq(lq()) &&
                                t.push("tcfd=" + Iq());
                            var U = sq();
                            U && t.push("gdpr=" + U);
                            var F = rq();
                            F && t.push("gdpr_consent=" + F);
                            I(22) && t.push("apve=0");
                            I(112) && Rr(!1)._up && t.push("gtm_up=1");
                            Hj() && t.push("tag_exp=" + Hj());
                            if (D.length > 0)
                                for (var R = 0; R < D.length; R++) {
                                    var ba = D[R],
                                        ha = ba.Z,
                                        Y = ba.tf;
                                    if (!Mt(a.prefix, Y + "." + ha, w !== void 0)) {
                                        var Q = 'https://adservice.google.com/pagead/regclk?' + t.join("&");
                                        ha !== "" ? Q = Y === "gb" ? Q + "&wbraid=" + ha : Q + "&gclid=" + ha + "&gclsrc=" + Y : Y === "aw.ds" && (Q += "&gclsrc=aw.ds");
                                        Dc(Q)
                                    }
                                } else if (r !== void 0 && !Mt(a.prefix, "gad", w !==
                                        void 0)) {
                                    var ja = 'https://adservice.google.com/pagead/regclk?' + t.join("&");
                                    Dc(ja)
                                }
                        }
                    }
                })
            }
        },
        Mt = function(a, b, c) {
            var d = qo("joined_auid", function() {
                    return {}
                }),
                e = (c ? a || "_gcl" : "") + "." + b;
            if (d[e]) return !0;
            d[e] = !0;
            return !1
        },
        Gt = function() {
            var a = ik(z.location.href),
                b = void 0,
                c = void 0,
                d = ck(a, "query", !1, void 0, "gad_source"),
                e, f = a.hash.replace("#", "").match(Ot);
            e = f ? f[1] : void 0;
            d && e ? (b = d, c = 1) : d ? (b = d, c = 2) : e && (b = e, c = 3);
            return {
                rf: b,
                Ck: c
            }
        },
        Lt = function() {
            var a = el(!1) === 1 ? z.top.location.href : z.location.href;
            return a = a.replace(/[\?#].*$/,
                "")
        },
        Pt = function(a) {
            var b = [];
            ib(a, function(c, d) {
                d = Zs(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].Z);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        Rt = function(a, b) {
            return Qt("dc", a, b)
        },
        St = function(a, b) {
            return Qt("aw", a, b)
        },
        Qt = function(a, b, c) {
            if (a === "aw" || a === "dc" || a === "gb") {
                var d = kk("gcl" + a);
                if (d) return d.split(".")
            }
            var e = Ss(b);
            if (e === "_gcl") {
                var f = !S(It()) && c,
                    g;
                g = gt()[a] || [];
                if (g.length > 0) return f ? ["0"] : g
            }
            var k = Ts(a, e);
            return k ? Os(k) : []
        },
        Ht = function(a) {
            var b = It();
            io(function() {
                a();
                S(b) || Hm(a, b)
            }, b)
        },
        It = function() {
            return [L.m.R, L.m.T]
        },
        Jt = /^(?:www\.)?google(?:\.com?)?(?:\.[a-z]{2}t?)?$/,
        Kt = /^www\.googleadservices\.com$/,
        Ot = /^gad_source[_=](\d+)$/;

    function Tt() {
        return qo("dedupe_gclid", function() {
            return lr()
        })
    };
    var Ut = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        Vt = /^www.googleadservices.com$/;

    function Wt(a) {
        a || (a = Xt());
        return a.fo ? !1 : a.fn || a.gn || a.kn || a.hn || a.rf || a.Pm || a.jn || a.Um ? !0 : !1
    }

    function Xt() {
        var a = {},
            b = Rr(!0);
        a.fo = !!b._up;
        var c = gt();
        a.fn = c.aw !== void 0;
        a.gn = c.dc !== void 0;
        a.kn = c.wbraid !== void 0;
        a.hn = c.gbraid !== void 0;
        a.jn = c.gclsrc === "aw.ds";
        a.rf = Gt().rf;
        var d = A.referrer ? ck(ik(A.referrer), "host") : "";
        a.Um = Ut.test(d);
        a.Pm = Vt.test(d);
        return a
    };
    var Yt = ["https://www.google.com", "https://www.youtube.com"];

    function Zt() {
        if (I(108)) {
            if (Ao(vo.Ze)) return O(176), vo.Ze;
            if (Ao(vo.fk)) return O(170), vo.Ze;
            var a = gl();
            if (!a) O(171);
            else if (a.opener) {
                var b = function(e) {
                    if (Yt.includes(e.origin)) {
                        e.data.action === "gcl_transfer" && e.data.gadSource ? zo(vo.Ze, {
                            gadSource: e.data.gadSource
                        }) : O(173);
                        var f;
                        (f = e.stopImmediatePropagation) == null || f.call(e);
                        Ek(a, "message", b)
                    } else O(172)
                };
                if (Dk(a, "message", b)) {
                    zo(vo.fk, !0);
                    for (var c = l(Yt), d = c.next(); !d.done; d = c.next()) a.opener.postMessage({
                        action: "gcl_setup"
                    }, d.value);
                    O(174);
                    return vo.Ze
                }
                O(175)
            }
        }
    };
    var $t = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        au = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        bu = /^\d+\.fls\.doubleclick\.net$/,
        cu = /;gac=([^;?]+)/,
        du = /;gacgb=([^;?]+)/;

    function eu(a, b) {
        if (bu.test(A.location.host)) {
            var c = A.location.href.match(b),
                d;
            if (c && c.length === 2 && c[1].match($t)) {
                var e;
                a: {
                    try {
                        e = decodeURIComponent(c[1]);
                        break a
                    } catch (r) {}
                    e = void 0
                }
                d = e || ""
            } else d = "";
            return d
        }
        for (var f = [], g = l(Object.keys(a)), k = g.next(); !k.done; k = g.next()) {
            for (var m = k.value, n = [], p = a[m], q = 0; q < p.length; q++) n.push(p[q].Z);
            f.push(m + ":" + n.join(","))
        }
        return f.length > 0 ? f.join(";") : ""
    }

    function fu(a, b, c) {
        for (var d = Ms(Ls()) ? Fs("_gac_gb", !0) : {}, e = [], f = !1, g = l(Object.keys(d)), k = g.next(); !k.done; k = g.next()) {
            var m = k.value,
                n = zt("_gac_gb_" + m, a, b, c);
            f = f || n.length !== 0 && n.some(function(p) {
                return p === 1
            });
            e.push(m + ":" + n.join(","))
        }
        return {
            Om: f ? e.join(";") : "",
            Nm: eu(d, du)
        }
    }

    function gu(a) {
        var b = A.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
        return b && b.length === 2 && b[1].match(au) ? b[1] : void 0
    }

    function hu(a) {
        var b = jg(9),
            c = {},
            d, e, f;
        bu.test(A.location.host) && (d = gu("gclgs"), e = gu("gclst"), b && (f = gu("gcllp")));
        if (d && e && (!b || f)) c.yg = d, c.Ag = e, c.zg = f;
        else {
            var g = qb(),
                k = Us((a || "_gcl") + "_gs"),
                m = k.map(function(q) {
                    return q.Z
                }),
                n = k.map(function(q) {
                    return g - q.timestamp
                }),
                p = [];
            b && (p = k.map(function(q) {
                return q.Vd
            }));
            m.length > 0 && n.length > 0 && (!b || p.length > 0) && (c.yg = m.join("."), c.Ag = n.join("."), b && p.length > 0 && (c.zg = p.join(".")))
        }
        return c
    }

    function iu(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (bu.test(A.location.host)) {
            var e = gu(c);
            if (e) return [{
                Z: e
            }]
        } else {
            if (b === "gclid") {
                var f = (a || "_gcl") + "_aw";
                return d ? ct(f) : Ps(f)
            }
            if (b === "wbraid") return Ps((a || "_gcl") + "_gb");
            if (b === "braids") return Rs({
                prefix: a
            })
        }
        return []
    }

    function ju(a) {
        return iu(a, "gclid", "gclaw").map(function(b) {
            return b.Z
        }).join(".")
    }

    function ku(a) {
        var b = iu(a, "gclid", "gclaw", !0),
            c = b.map(function(f) {
                return f.Z
            }).join("."),
            d = b.map(function(f) {
                return f.Va || 0
            }).join("."),
            e = b.map(function(f) {
                for (var g = 0, k = l(f.gd || []), m = k.next(); !m.done; m = k.next()) {
                    var n = m.value;
                    n === 1 && (g |= 1);
                    n === 2 && (g |= 2)
                }
                return g.toString()
            }).join(".");
        return {
            Z: c,
            Dk: d,
            Ek: e
        }
    }

    function lu(a) {
        return iu(a, "braids", "gclgb").map(function(b) {
            return b.Z
        }).join(".")
    }

    function mu(a) {
        return bu.test(A.location.host) ? !(gu("gclaw") || gu("gac")) : Dt(a)
    }

    function nu(a, b, c) {
        var d;
        d = c ? At(a, b) : zt((b && b.prefix || "_gcl") + "_gb", a, b);
        return d.length === 0 || d.every(function(e) {
            return e === 0
        }) ? "" : d.join(".")
    };

    function ou() {
        var a = z.__uspapi;
        if (ab(a)) {
            var b = "";
            try {
                a("getUSPData", 1, function(c, d) {
                    if (d && c) {
                        var e = c.uspString;
                        e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e)
                    }
                })
            } catch (c) {}
            return b
        }
    };
    var tu = function(a) {
            if (a.eventName === L.m.ia && T(a, "hit_type") === "page_view")
                if (I(23)) {
                    V(a, "redact_click_ids", P(a.D, L.m.ka) != null && P(a.D, L.m.ka) !== !1 && !S([L.m.R, L.m.T]));
                    var b = pu(a),
                        c = P(a.D, L.m.za) !== !1;
                    c || W(a, L.m.Vg, "1");
                    var d = Ss(b.prefix),
                        e = T(a, "is_server_side_destination");
                    if (!T(a, "consent_updated") && !T(a, "user_id_updated") && !T(a, "tunnel_updated")) {
                        var f = P(a.D, L.m.ib),
                            g = P(a.D, L.m.Aa) || {};
                        qu({
                            Nd: c,
                            Wd: g,
                            ae: f,
                            Dc: b
                        });
                        if (!e && !Et(d)) {
                            a.isAborted = !0;
                            return
                        }
                    }
                    if (e) a.isAborted = !0;
                    else {
                        W(a, L.m.vc, L.m.oc);
                        if (T(a,
                                "consent_updated")) W(a, L.m.vc, L.m.wl), W(a, L.m.Sb, "1");
                        else if (T(a, "user_id_updated")) W(a, L.m.vc, L.m.Cl);
                        else if (T(a, "tunnel_updated")) W(a, L.m.vc, L.m.zl);
                        else {
                            var k = gt();
                            W(a, L.m.Kc, k.gclid);
                            W(a, L.m.Mc, k.dclid);
                            W(a, L.m.rj, k.gclsrc);
                            ru(a, L.m.Kc) || ru(a, L.m.Mc) || (W(a, L.m.md, k.wbraid), W(a, L.m.je, k.gbraid));
                            W(a, L.m.Ga, A.referrer ? ck(ik(A.referrer), "host") : "");
                            W(a, L.m.oa, Lt());
                            if (I(26) && jc) {
                                var m = ck(ik(jc), "host");
                                m && W(a, L.m.Nj, m)
                            }
                            if (!T(a, "tunnel_updated")) {
                                var n = Gt(),
                                    p = n.Ck;
                                W(a, L.m.he, n.rf);
                                W(a, L.m.ie, p)
                            }
                            W(a,
                                L.m.Xb, el(!0));
                            var q = Xt();
                            Wt(q) && W(a, L.m.Sc, "1");
                            W(a, L.m.tj, Tt());
                            Rr(!1)._up === "1" && W(a, L.m.Hj, "1")
                        }
                        kn = !0;
                        W(a, L.m.hb);
                        W(a, L.m.Db);
                        var r = S([L.m.R, L.m.T]);
                        r && (W(a, L.m.hb, su()), c && (es(b), W(a, L.m.Db, cs[fs(b.prefix)])));
                        W(a, L.m.Cb);
                        W(a, L.m.Qa);
                        if (!ru(a, L.m.Kc) && !ru(a, L.m.Mc) && mu(d)) {
                            var v = Qs(b);
                            v.length > 0 && W(a, L.m.Cb, v.join("."))
                        } else if (!ru(a, L.m.md) && r) {
                            var u = Os(d + "_aw");
                            u.length > 0 && W(a, L.m.Qa, u.join("."))
                        }
                        I(30) && W(a, L.m.Ij, Kc());
                        a.D.isGtmEvent && (a.D.C[L.m.qa] = Mp.C[L.m.qa]);
                        yq(a.D) ? W(a, L.m.bc, !1) : W(a,
                            L.m.bc, !0);
                        V(a, "add_tag_timing", !0);
                        var t = ou();
                        t !== void 0 && W(a, L.m.Jd, t || "error");
                        var w = sq();
                        w && W(a, L.m.wc, w);
                        if (I(127)) try {
                            var x = Intl.DateTimeFormat().resolvedOptions().timeZone;
                            W(a, L.m.zh, x || "-")
                        } catch (B) {
                            W(a, L.m.zh, "e")
                        }
                        var y = rq();
                        y && W(a, L.m.zc, y);
                        V(a, "speculative", !1)
                    }
                } else a.isAborted = !0
        },
        pu = function(a) {
            var b = {
                prefix: P(a.D, L.m.nb) || P(a.D, L.m.Ja),
                domain: P(a.D, L.m.Ra),
                Pb: P(a.D, L.m.Sa),
                flags: P(a.D, L.m.Xa)
            };
            a.D.isGtmEvent && (b.path = P(a.D, L.m.ob));
            return b
        },
        uu = function(a, b) {
            var c, d, e, f, g, k, m, n;
            c = a.Nd;
            d = a.Wd;
            e = a.ae;
            f = a.Da;
            g = a.D;
            k = a.Yd;
            m = a.Ho;
            n = a.jl;
            qu({
                Nd: c,
                Wd: d,
                ae: e,
                Dc: b
            });
            c && m !== !0 && (n != null ? n = String(n) : n = void 0, Nt(b, f, g, k, n))
        },
        vu = function(a, b) {
            if (!T(a, "tunnel_updated")) {
                var c = Zt();
                if (c) {
                    var d = Ao(c),
                        e = function(g) {
                            V(a, "tunnel_updated", !0);
                            var k = ru(a, L.m.he),
                                m = ru(a, L.m.ie);
                            W(a, L.m.he, String(g.gadSource));
                            W(a, L.m.ie, 4);
                            V(a, "consent_updated");
                            V(a, "user_id_updated");
                            W(a, L.m.Sb);
                            b();
                            W(a, L.m.he, k);
                            W(a, L.m.ie, m);
                            V(a, "tunnel_updated", !1)
                        };
                    if (d) e(d);
                    else {
                        var f = void 0;
                        f = Bo(c, function(g, k) {
                            e(k);
                            Co(c, f)
                        })
                    }
                }
            }
        },
        qu = function(a) {
            var b, c, d, e;
            b = a.Nd;
            c = a.Wd;
            d = a.ae;
            e = a.Dc;
            b && (as(c[L.m.Tc], !!c[L.m.aa]) && (lt(wu, e), nt(e), ns(e)), el() !== 2 ? jt(e) : ht(e), rt(wu, e), st(e));
            c[L.m.aa] && (pt(wu, c[L.m.aa], c[L.m.Zb], !!c[L.m.Hb], e.prefix), qt(c[L.m.aa], c[L.m.Zb], !!c[L.m.Hb], e.prefix), os(fs(e.prefix), c[L.m.aa], c[L.m.Zb], !!c[L.m.Hb], e), os("FPAU", c[L.m.aa], c[L.m.Zb], !!c[L.m.Hb], e));
            d && (I(91) ? ut(xu) : ut(yu));
            wt(yu)
        },
        zu = function(a, b, c, d) {
            var e, f, g;
            e = a.kl;
            f = a.callback;
            g = a.Hk;
            if (typeof f === "function")
                if (e === L.m.Qa && g === void 0) {
                    var k = d(b.prefix,
                        c);
                    k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k)
                } else e === L.m.Db ? (O(65), es(b, !1), f(cs[fs(b.prefix)])) : f(g)
        },
        Au = function(a, b) {
            Array.isArray(b) || (b = [b]);
            var c = T(a, "hit_type");
            return b.indexOf(c) >= 0
        },
        wu = ["aw", "dc", "gb"],
        yu = ["aw", "dc", "gb", "ag"],
        xu = ["aw", "dc", "gb", "ag", "gad_source"];

    function Bu(a) {
        var b = P(a.D, L.m.Yb),
            c = P(a.D, L.m.xc);
        b && !c ? (a.eventName !== L.m.ia && a.eventName !== L.m.Jc && O(131), a.isAborted = !0) : !b && c && (O(132), a.isAborted = !0)
    }

    function Cu(a) {
        var b = S(L.m.R) ? po.pscdl : "denied";
        b != null && W(a, L.m.Sf, b)
    }

    function Du(a) {
        var b = el(!0);
        W(a, L.m.Xb, b)
    }

    function Eu(a) {
        Jq() && W(a, L.m.Qc, 1)
    }

    function su() {
        var a = A.title;
        if (a === void 0 || a === "") return "";
        var b = function(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        };
        a = encodeURIComponent(a);
        for (var c = 256; c > 0 && !b(a.substring(0, c));) c--;
        return decodeURIComponent(a.substring(0, c))
    }

    function Fu(a) {
        Gu(a, "ce", P(a.D, L.m.Sa))
    }

    function Gu(a, b, c) {
        ru(a, L.m.Kd) || W(a, L.m.Kd, {});
        ru(a, L.m.Kd)[b] = c
    }

    function Hu(a) {
        I(101) && V(a, "transmission_type", 1)
    }

    function Iu(a) {
        var b = Ya("GTAG_EVENT_FEATURE_CHANNEL");
        b && (W(a, L.m.Fe, b), Wa.GTAG_EVENT_FEATURE_CHANNEL = kj)
    }

    function Ju(a) {
        if (I(79)) {
            var b = cp(a.D, L.m.Pc);
            b && W(a, L.m.Pc, b)
        }
    };
    var Ku = function(a) {
            var b = a && a[L.m.gh];
            return b && !!b[L.m.sj]
        },
        Lu = function(a) {
            if (a) switch (a._tag_mode) {
                case "CODE":
                    return "c";
                case "AUTO":
                    return "a";
                case "MANUAL":
                    return "m";
                default:
                    return "c"
            }
        };

    function Mu(a) {
        var b, c = z,
            d = [];
        try {
            c.navigation && c.navigation.entries && (d = c.navigation.entries())
        } catch (k) {}
        b = d;
        for (var e = b.length - 1; e >= 0; e--) {
            var f = b[e],
                g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
            if (g && g.length === 2) return g[1]
        }
    };
    var Nu = function(a) {
            if (S(L.m.R) && T(a, "conversion_linker_enabled")) {
                var b = T(a, "cookie_options"),
                    c = Ss(b.prefix);
                c === "_gcl" && (c = "");
                var d = hu(c);
                W(a, L.m.jd, d.yg);
                W(a, L.m.ld, d.Ag);
                I(125) && W(a, L.m.kd, d.zg);
                if (mu(c)) {
                    var e = b,
                        f = c,
                        g = lu(f);
                    g && W(a, L.m.Cb, g);
                    if (!f) {
                        var k = ru(a, L.m.Eb);
                        e = Yc(e, null);
                        e.prefix = f;
                        var m = fu(k, e, !0).Nm;
                        m && W(a, L.m.Oc, m)
                    }
                } else {
                    var n = c,
                        p = "";
                    if (T(a, "hit_type") === "conversion" && el() !== 2) {
                        var q = ku(n);
                        q.Z && (p = q.Z);
                        q.Dk && W(a, L.m.ee, q.Dk);
                        q.Ek && W(a, L.m.fe, q.Ek)
                    } else p = ju(n);
                    p && W(a, L.m.Qa, p);
                    if (!n) {
                        var r;
                        (r = eu(Ms(Ls()) ? Fs() : {}, cu)) && W(a, L.m.De, r)
                    }
                }
            }
        },
        Ou = function(a) {
            if (I(15)) {
                var b = P(a.D, L.m.oa);
                b || (b = el(!1) === 1 ? z.top.location.href : z.location.href);
                var c, d = ik(b),
                    e = ck(d, "query", !1, void 0, "gclid");
                if (!e) {
                    var f = d.hash.replace("#", "");
                    e = e || bk(f, "gclid", !1)
                }(c = e ? e.length : void 0) && W(a, L.m.lj, c)
            }
        },
        Pu = function(a) {
            if (I(20)) {
                var b = S(L.m.R) && S(L.m.T),
                    c = T(a, "redact_ads_data") && !b;
                W(a, L.m.qj, Mu("gclsrc"));
                W(a, L.m.nj, Mu("gad_source"));
                var d = Mu("gbraid");
                d && W(a, L.m.oj, c ? "0" : d);
                var e = Mu("gclid");
                e && W(a, L.m.pj, b ? e :
                    "0");
                var f = Mu("dclid");
                f && W(a, L.m.mj, b ? f : "0")
            }
        },
        Qu = function(a) {
            I(91) && Au(a, ["conversion"]) && W(a, L.m.Qj, Rr(!1)._gs)
        };
    var Ru = function(a, b) {
            var c = a && !S([L.m.R, L.m.T]);
            return b && c ? "0" : b
        },
        Uu = function(a) {
            var b = a.Dc === void 0 ? {} : a.Dc,
                c = Ss(b.prefix);
            Et(c) && io(function() {
                function d(x, y, B) {
                    var D = S([L.m.R, L.m.T]),
                        E = m && D,
                        H = b.prefix || "_gcl",
                        N = Su(),
                        M = (E ? H : "") + "." + (S(L.m.R) ? 1 : 0) + "." + (S(L.m.T) ? 1 : 0);
                    if (!N[M]) {
                        N[M] = !0;
                        var U = {},
                            F = function(ja, la) {
                                if (la || typeof la === "number") U[ja] = la.toString()
                            },
                            R = "https://www.google.com";
                        zq() && (F("gcs", Aq()), x && F("gcu", 1));
                        F("gcd", Eq(k));
                        Hj() && F("tag_exp", Hj());
                        if (Dm()) {
                            F("rnd", Tt());
                            if ((!p || q && q !==
                                    "aw.ds") && D) {
                                var ba = Os(H + "_aw");
                                F("gclaw", ba.join("."))
                            }
                            F("url", String(z.location).split(/[?#]/)[0]);
                            F("dclid", Ru(f, r));
                            D || (R = "https://pagead2.googlesyndication.com")
                        }
                        Hq() && F("dma_cps", Fq());
                        F("dma", Gq());
                        F("npa", yq(k) ? 0 : 1);
                        Jq() && F("_ng", 1);
                        dq(lq()) && F("tcfd", Iq());
                        F("gdpr_consent", rq() || "");
                        F("gdpr", sq() || "");
                        Rr(!1)._up === "1" && F("gtm_up", 1);
                        F("gclid", Ru(f, p));
                        F("gclsrc", q);
                        if (!(U.hasOwnProperty("gclid") || U.hasOwnProperty("dclid") || U.hasOwnProperty("gclaw")) && (F("gbraid", Ru(f, v)), !U.hasOwnProperty("gbraid") &&
                                Dm() && D)) {
                            var ha = Os(H + "_gb");
                            ha.length > 0 && F("gclgb", ha.join("."))
                        }
                        F("gtm", Mq({
                            Da: k.eventMetadata.source_canonical_id,
                            sg: !g
                        }));
                        m && S(L.m.R) && (es(b || {}), E && F("auid", cs[fs(b.prefix)] || ""));
                        Tu || a.zk && F("did", a.zk);
                        a.ii && F("gdid", a.ii);
                        a.fi && F("edid", a.fi);
                        a.mi !== void 0 && F("frm", a.mi);
                        I(22) && F("apve", "0");
                        var Y = Object.keys(U).map(function(ja) {
                                return ja + "=" + encodeURIComponent(U[ja])
                            }),
                            Q = R + "/pagead/landing?" + Y.join("&");
                        Dc(Q);
                        t && g !== void 0 && Sn({
                            targetId: g,
                            request: {
                                url: Q,
                                parameterEncoding: 3,
                                endpoint: D ? 12 : 13
                            },
                            Ka: {
                                eventId: k.eventId,
                                priorityId: k.priorityId
                            },
                            vg: y === void 0 ? void 0 : {
                                eventId: y,
                                priorityId: B
                            }
                        })
                    }
                }
                var e = !!a.Xh,
                    f = !!a.Yd,
                    g = a.targetId,
                    k = a.D,
                    m = a.Cg === void 0 ? !0 : a.Cg,
                    n = gt(),
                    p = n.gclid || "",
                    q = n.gclsrc,
                    r = n.dclid || "",
                    v = n.wbraid || "",
                    u = !e && ((!p || q && q !== "aw.ds" ? !1 : !0) || v),
                    t = Dm();
                if (u || t)
                    if (t) {
                        var w = [L.m.R, L.m.T, L.m.ya];
                        d();
                        (function() {
                            S(w) || ho(function(x) {
                                d(!0, x.consentEventId, x.consentPriorityId)
                            }, w)
                        })()
                    } else d()
            }, [L.m.R, L.m.T, L.m.ya])
        },
        Su = function() {
            return qo("reported_gclid", function() {
                return {}
            })
        },
        Tu = !1;

    function Vu(a, b, c, d) {
        var e = tc(),
            f;
        if (e === 1) a: {
            var g = yj;g = g.toLowerCase();
            for (var k = "https://" + g, m = "http://" + g, n = 1, p = A.getElementsByTagName("script"), q = 0; q < p.length && q < 100; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (r.indexOf(m) === 0) {
                        f = 3;
                        break a
                    }
                    n === 1 && r.indexOf(k) === 0 && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (f === 2 || d || "http:" !== z.location.protocol ? a : b) + c
    };

    function Wu(a) {
        return typeof a !== "object" || a === null ? {} : a
    }

    function Xu(a) {
        return a === void 0 || a === null ? "" : typeof a === "object" ? a.toString() : String(a)
    }

    function Yu(a) {
        if (a !== void 0 && a !== null) return Xu(a)
    }

    function Zu(a) {
        return typeof a === "number" ? a : Yu(a)
    };
    var dv = function(a, b) {
            if (a)
                if (Kq()) {} else if (a = bb(a) ? Ho(dm(a)) : Ho(dm(a.id))) {
                var c = void 0,
                    d = !1,
                    e = P(b, L.m.Lj);
                if (e && Array.isArray(e)) {
                    c = [];
                    for (var f = 0; f < e.length; f++) {
                        var g = Ho(e[f]);
                        g && (c.push(g), (a.id === g.id || a.id === a.destinationId && a.destinationId === g.destinationId) && (d = !0))
                    }
                }
                if (!c || d) {
                    var k = P(b, L.m.wh),
                        m;
                    if (k) {
                        m = Array.isArray(k) ? k : [k];
                        var n = P(b, L.m.uh),
                            p = P(b, L.m.vh),
                            q = P(b, L.m.xh),
                            r = Yu(P(b, L.m.Kj)),
                            v = n || p,
                            u = 1;
                        a.prefix !==
                            "UA" || c || (u = 5);
                        for (var t = 0; t < m.length; t++)
                            if (t < u)
                                if (c) $u(c, m[t], r, b, {
                                    kc: v,
                                    options: q
                                });
                                else if (a.prefix === "AW" && a.ids[Ko[1]]) I(146) ? $u([a], m[t], r || "US", b, {
                            kc: v,
                            options: q
                        }) : av(a.ids[Ko[0]], a.ids[Ko[1]], m[t], b, {
                            kc: v,
                            options: q
                        });
                        else if (a.prefix === "UA")
                            if (I(146)) $u([a], m[t], r || "US", b, {
                                kc: v
                            });
                            else {
                                var w = a.destinationId,
                                    x = m[t],
                                    y = {
                                        kc: v
                                    };
                                O(23);
                                if (x) {
                                    y = y || {};
                                    var B = bv(cv, y, w),
                                        D = {};
                                    y.kc !== void 0 ? D.receiver = y.kc : D.replace = x;
                                    D.ga_wpid = w;
                                    D.destination = x;
                                    B(2, pb(), D)
                                }
                            }
                    }
                }
            }
        },
        $u = function(a, b, c, d, e) {
            O(21);
            if (b && c) {
                e =
                    e || {};
                for (var f = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: pb()
                    }, g = 0; g < a.length; g++) {
                    var k = a[g];
                    ev[k.id] || (k && k.prefix === "AW" && !f.adData && k.ids.length >= 2 ? (f.adData = {
                        ak: k.ids[Ko[0]],
                        cl: k.ids[Ko[1]]
                    }, fv(f.adData, d), ev[k.id] = !0) : k && k.prefix === "UA" && !f.gaData && (f.gaData = {
                        gaWpid: k.destinationId
                    }, ev[k.id] = !0))
                }(f.gaData || f.adData) && bv(gv, e, void 0, d)(e.kc, f, e.options)
            }
        },
        av = function(a, b, c, d, e) {
            O(22);
            if (c) {
                e = e || {};
                var f = bv(hv, e, a, d),
                    g = {
                        ak: a,
                        cl: b
                    };
                e.kc === void 0 && (g.autoreplace = c);
                fv(g, d);
                f(2, e.kc,
                    g, c, 0, pb(), e.options)
            }
        },
        fv = function(a, b) {
            a.dma = Gq();
            Hq() && (a.dmaCps = Fq());
            yq(b) ? a.npa = "0" : a.npa = "1"
        },
        bv = function(a, b, c, d) {
            if (z[a.functionName]) return b.Ai && C(b.Ai), z[a.functionName];
            var e = iv();
            z[a.functionName] = e;
            if (a.additionalQueues)
                for (var f = 0; f < a.additionalQueues.length; f++) z[a.additionalQueues[f]] = z[a.additionalQueues[f]] || iv();
            a.idKey && z[a.idKey] === void 0 && (z[a.idKey] = c);
            Cl({
                destinationId: Wf.ctid,
                endpoint: 0,
                eventId: d == null ? void 0 : d.eventId,
                priorityId: d == null ? void 0 : d.priorityId
            }, Vu("https://",
                "http://", a.scriptUrl), b.Ai, b.Cn);
            return e
        },
        iv = function() {
            function a() {
                a.q = a.q || [];
                a.q.push(arguments)
            }
            return a
        },
        hv = {
            functionName: "_googWcmImpl",
            idKey: "_googWcmAk",
            scriptUrl: "www.gstatic.com/wcm/loader.js"
        },
        cv = {
            functionName: "_gaPhoneImpl",
            idKey: "ga_wpid",
            scriptUrl: "www.gstatic.com/gaphone/loader.js"
        },
        jv = {
            pl: "9",
            gm: "5"
        },
        gv = {
            functionName: "_googCallTrackingImpl",
            additionalQueues: [cv.functionName, hv.functionName],
            scriptUrl: "www.gstatic.com/call-tracking/call-tracking_" +
                (jv.pl || jv.gm) + ".js"
        },
        ev = {};

    function kv(a) {
        return {
            getDestinationId: function() {
                return a.target.destinationId
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return ru(a, b)
            },
            setHitData: function(b, c) {
                W(a, b, c)
            },
            setHitDataIfNotDefined: function(b, c) {
                ru(a, b) === void 0 && W(a, b, c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return T(a, b)
            },
            setMetadata: function(b, c) {
                V(a, b, c)
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return P(a.D, b)
            },
            hc: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.C)
            }
        }
    };
    var mv = function(a) {
            var b = lv[Pl ? a.target.destinationId : dm(a.target.destinationId)];
            if (!a.isAborted && b)
                for (var c = kv(a), d = 0; d < b.length; ++d) {
                    try {
                        b[d](c)
                    } catch (e) {
                        a.isAborted = !0
                    }
                    if (a.isAborted) break
                }
        },
        nv = function(a, b) {
            var c = lv[a];
            c || (c = lv[a] = []);
            c.push(b)
        },
        lv = {};
    var qv = function(a) {
            a = a || {};
            var b;
            if (S(ov)) {
                (b = pv(a)) || (b = lr());
                var c = a,
                    d = fs(c.prefix);
                is(c, b);
                delete cs[d];
                delete ds[d];
                hs(d, c.path, c.domain);
                return pv(a)
            }
        },
        pv = function(a) {
            if (S(ov)) {
                a = a || {};
                es(a, !1);
                var b = ds[fs(Ss(a.prefix))];
                if (b && !(qb() - b.Eg * 1E3 > 18E5)) {
                    var c = b.id,
                        d = c.split(".");
                    if (d.length === 2 && !(qb() - (Number(d[1]) || 0) * 1E3 > 864E5)) return c
                }
            }
        },
        ov = L.m.R;

    function rv(a, b) {
        return arguments.length === 1 ? sv("set", a) : sv("set", a, b)
    }

    function tv(a, b) {
        return arguments.length === 1 ? sv("config", a) : sv("config", a, b)
    }

    function uv(a, b, c) {
        c = c || {};
        c[L.m.yc] = a;
        return sv("event", b, c)
    }

    function sv() {
        return arguments
    };
    var vv = function() {
        var a = gc && gc.userAgent || "";
        if (a.indexOf("Safari") < 0 || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
        var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
        if (b === "") return !1;
        for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
            if (c[e] === void 0) return !0;
            if (d[e] !== c[e]) return Number(d[e]) > Number(c[e])
        }
        return d.length >= c.length
    };
    var wv = function() {
        this.messages = [];
        this.C = []
    };
    wv.prototype.enqueue = function(a, b, c) {
        var d = this.messages.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        var e = Object.assign({}, c, {
                eventId: b,
                priorityId: d,
                fromContainerExecution: !0
            }),
            f = {
                message: a,
                notBeforeEventId: b,
                priorityId: d,
                messageContext: e
            };
        this.messages.push(f);
        for (var g = 0; g < this.C.length; g++) try {
            this.C[g](f)
        } catch (k) {}
    };
    wv.prototype.listen = function(a) {
        this.C.push(a)
    };
    wv.prototype.get = function() {
        for (var a = {}, b = 0; b < this.messages.length; b++) {
            var c = this.messages[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    wv.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
            var e = this.messages[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.messages = c;
        return b
    };

    function xv(a, b, c) {
        c.eventMetadata = c.eventMetadata || {};
        c.eventMetadata.source_canonical_id = Wf.canonicalContainerId;
        yv().enqueue(a, b, c)
    }

    function zv() {
        var a = Av;
        yv().listen(a)
    }

    function yv() {
        return qo("mb", function() {
            return new wv
        })
    };
    var Bv, Cv = !1;

    function Dv() {
        Cv = !0;
        Bv = productSettings, productSettings = void 0;
        Bv = Bv || {}
    }

    function Ev(a) {
        Cv || Dv();
        return Bv[a]
    };

    function Fv() {
        var a = z.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }

    function Gv(a) {
        if (A.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top === b.bottom || b.left === b.right || !z.getComputedStyle) return !0;
        var c = z.getComputedStyle(a, null);
        if (c.visibility === "hidden") return !0;
        for (var d = a, e = c; d;) {
            if (e.display === "none") return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                k >= 0 && (g = g.substring(k + 8, g.indexOf(")", k)), g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)), f = String(Math.min(Number(g), Number(f))))
            }
            if (f !== void 0 && Number(f) <= 0) return !0;
            (d = d.parentElement) &&
            (e = z.getComputedStyle(d, null))
        }
        return !1
    }
    var Qv = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.ba.length + ":" + Pv.test(a.ba)
        },
        nw = function(a) {
            a = a || {
                Td: !0,
                Ud: !0,
                Ig: void 0
            };
            a.Lb = a.Lb || {
                email: !0,
                phone: !1,
                address: !1
            };
            var b = Rv(a),
                c = Sv[b];
            if (c && qb() - c.timestamp < 200) return c.result;
            var d = Tv(),
                e = d.status,
                f = [],
                g, k, m = [];
            if (!I(32)) {
                if (a.Lb && a.Lb.email) {
                    var n = Uv(d.elements);
                    f = Vv(n, a && a.lf);
                    g = Wv(f);
                    n.length > 10 && (e = "3")
                }!a.Ig && g && (f = [g]);
                for (var p = 0; p < f.length; p++) m.push(Xv(f[p], !!a.Td, !!a.Ud));
                m = m.slice(0, 10)
            } else if (a.Lb) {}
            g && (k = Xv(g, !!a.Td, !!a.Ud));
            var E = {
                elements: m,
                Ei: k,
                status: e
            };
            Sv[b] = {
                timestamp: qb(),
                result: E
            };
            return E
        },
        ow = function(a, b) {
            if (a) {
                var c = a.trim().replaceAll(/\s+/g, "").replaceAll(/(\d{2,})\./g, "$1").replaceAll(/-/g, "").replaceAll(/\((\d+)\)/g, "$1");
                if (b && c.match(/^\+?\d{3,7}$/)) return c;
                c.charAt(0) !== "+" && (c = "+" + c);
                if (c.match(/^\+\d{10,15}$/)) return c
            }
        },
        qw = function(a) {
            var b = pw(/^(\w|[- ])+$/)(a);
            if (!b) return b;
            var c = b.replaceAll(/[- ]+/g, "");
            return c.length > 10 ? void 0 : c
        },
        pw = function(a) {
            return function(b) {
                var c = b.match(a);
                return c ? c[0].trim().toLowerCase() :
                    void 0
            }
        },
        mw = function(a, b, c) {
            var d = a.element,
                e = {
                    ba: a.ba,
                    type: a.ma,
                    tagName: d.tagName
                };
            b && (e.querySelector = rw(d));
            c && (e.isVisible = !Gv(d));
            return e
        },
        Xv = function(a, b, c) {
            return mw({
                element: a.element,
                ba: a.ba,
                ma: lw.Tb
            }, b, c)
        },
        Rv = function(a) {
            var b = !(a == null || !a.Td) + "." + !(a == null || !a.Ud);
            a && a.lf && a.lf.length && (b += "." + a.lf.join("."));
            a && a.Lb && (b += "." + a.Lb.email + "." + a.Lb.phone + "." + a.Lb.address);
            return b
        },
        Wv = function(a) {
            if (a.length !== 0) {
                var b;
                b = sw(a, function(c) {
                    return !tw.test(c.ba)
                });
                b = sw(b, function(c) {
                    return c.element.tagName.toUpperCase() ===
                        "INPUT"
                });
                b = sw(b, function(c) {
                    return !Gv(c.element)
                });
                return b[0]
            }
        },
        Vv = function(a, b) {
            if (!b || b.length === 0) return a;
            for (var c = [], d = 0; d < a.length; d++) {
                for (var e = !0, f = 0; f < b.length; f++) {
                    var g = b[f];
                    if (g && si(a[d].element, g)) {
                        e = !1;
                        break
                    }
                }
                e && c.push(a[d])
            }
            return c
        },
        sw = function(a, b) {
            if (a.length <= 1) return a;
            var c = a.filter(b);
            return c.length === 0 ? a : c
        },
        rw = function(a) {
            var b;
            if (a === A.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] ===
                                        a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = rw(a.parentElement) + ">:nth-child(" + e.toString() + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        Uv = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.textContent;
                d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
                if (e) {
                    var f = e.match(uw);
                    if (f) {
                        var g = f[0],
                            k;
                        if (z.location) {
                            var m = ek(z.location, "host", !0);
                            k = g.toLowerCase().indexOf(m) >= 0
                        } else k = !1;
                        k || b.push({
                            element: d,
                            ba: g
                        })
                    }
                }
            }
            return b
        },
        Tv = function() {
            var a = [],
                b = A.body;
            if (!b) return {
                elements: a,
                status: "4"
            };
            for (var c = b.querySelectorAll("*"),
                    d = 0; d < c.length && d < 1E4; d++) {
                var e = c[d];
                if (!(vw.indexOf(e.tagName.toUpperCase()) >= 0) && e.children instanceof HTMLCollection) {
                    for (var f = !1, g = 0; g < e.childElementCount && g < 1E4; g++)
                        if (!(ww.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
                            f = !0;
                            break
                        }(!f || I(32) && xw.indexOf(e.tagName) !== -1) && a.push(e)
                }
            }
            return {
                elements: a,
                status: c.length > 1E4 ? "2" : "1"
            }
        },
        yw = !1;
    var uw = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        Pv = /@(gmail|googlemail)\./i,
        tw = /support|noreply/i,
        vw = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        ww = ["BR"],
        zw = gg('', 2),
        lw = {
            Tb: "1",
            Xc: "2",
            Vc: "3",
            Wc: "4",
            de: "5",
            Ye: "6",
            pg: "7",
            Nh: "8",
            Kg: "9",
            Gh: "10"
        },
        Sv = {},
        xw = ["INPUT", "SELECT"],
        Aw = pw(/^([^\x00-\x40\x5b-\x60\x7b-\xff]|[.-]|\s)+$/);
    var Sf;
    var ex = Number('') || 5,
        fx = Number('') || 50,
        gx = fb();
    var ix = function(a, b) {
            a && (hx("sid", a.targetId, b), hx("cc", a.clientCount, b), hx("tl", a.totalLifeMs, b), hx("hc", a.heartbeatCount, b), hx("cl", a.clientLifeMs, b))
        },
        hx = function(a, b, c) {
            b != null && c.push(a + "=" + b)
        },
        jx = function() {
            var a = A.referrer;
            if (a) {
                var b;
                return ck(ik(a), "host") === ((b = z.location) == null ? void 0 : b.host) ? 1 : 2
            }
            return 0
        },
        lx = function() {
            this.U = kx;
            this.N = 0
        };
    lx.prototype.H = function(a, b, c, d) {
        var e = jx(),
            f, g = [];
        f = z === z.top && e !== 0 && b ? (b == null ? void 0 : b.clientCount) >
            1 ? e === 2 ? 1 : 2 : e === 2 ? 0 : 3 : 4;
        a && hx("si", a.zf, g);
        hx("m", 0, g);
        hx("iss", f, g);
        hx("if", c, g);
        ix(b, g);
        d && hx("fm", encodeURIComponent(d.substring(0, fx)), g);
        this.O(g);
    };
    lx.prototype.C = function(a, b, c, d, e) {
        var f = [];
        hx("m", 1, f);
        hx("s", a, f);
        hx("po", jx(), f);
        b && (hx("st", b.state, f), hx("si", b.zf, f), hx("sm", b.Kf, f));
        ix(c, f);
        hx("c", d, f);
        e && hx("fm", encodeURIComponent(e.substring(0, fx)), f);
        this.O(f);
    };
    lx.prototype.O = function(a) {
        a = a === void 0 ? [] : a;
        !zk || this.N >= ex || (hx("pid", gx, a), hx("bc", ++this.N, a), a.unshift("ctid=" + Wf.ctid + "&t=s"), this.U("https://www.googletagmanager.com/a?" + a.join("&")))
    };
    var mx = Number('') || 500,
        nx = Number('') || 5E3,
        ox = Number('20') || 10,
        px = Number('') || 5E3;

    function qx(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var rx = function(a, b) {
        var c;
        var d = function(e, f, g) {
            g = g === void 0 ? {
                Kk: function() {},
                Lk: function() {},
                Jk: function() {},
                onFailure: function() {}
            } : g;
            this.km = e;
            this.C = f;
            this.N = g;
            this.da = this.Ca = this.heartbeatCount = this.jm = 0;
            this.hk = !1;
            this.H = {};
            this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
            this.state = 0;
            this.zf = qx(this.C);
            this.Kf = qx(this.C);
            this.U = 10
        };
        d.prototype.init = function() {
            this.O(1);
            this.jb()
        };
        d.prototype.getState = function() {
            return {
                state: this.state,
                zf: Math.round(qx(this.C) - this.zf),
                Kf: Math.round(qx(this.C) - this.Kf)
            }
        };
        d.prototype.O = function(e) {
            this.state !== e && (this.state = e, this.Kf = qx(this.C))
        };
        d.prototype.rk = function() {
            return String(this.jm++)
        };
        d.prototype.jb = function() {
            var e = this;
            this.heartbeatCount++;
            this.Bc({
                type: 0,
                clientId: this.id,
                requestId: this.rk(),
                maxDelay: this.nk()
            }, function(f) {
                if (f.type === 0) {
                    var g;
                    if (((g = f.failure) == null ? void 0 : g.failureType) != null)
                        if (f.stats && (e.stats = f.stats), e.da++, f.isDead || e.da > ox) {
                            var k = f.isDead && f.failure.failureType;
                            e.U = k || 10;
                            e.O(4);
                            e.hm();
                            var m, n;
                            (n = (m = e.N).Jk) == null || n.call(m, {
                                failureType: k || 10,
                                data: f.failure.data
                            })
                        } else e.O(3), e.sk();
                    else {
                        if (e.heartbeatCount > f.stats.heartbeatCount + ox) {
                            e.heartbeatCount = f.stats.heartbeatCount;
                            var p, q;
                            (q = (p = e.N).onFailure) == null || q.call(p, {
                                failureType: 13
                            })
                        }
                        e.stats = f.stats;
                        var r = e.state;
                        e.O(2);
                        if (r !== 2)
                            if (e.hk) {
                                var v, u;
                                (u = (v = e.N).Lk) == null || u.call(v)
                            } else {
                                e.hk = !0;
                                var t, w;
                                (w = (t = e.N).Kk) == null || w.call(t)
                            }
                        e.da = 0;
                        e.lm();
                        e.sk()
                    }
                }
            })
        };
        d.prototype.nk = function() {
            return this.state === 2 ?
                nx : mx
        };
        d.prototype.sk = function() {
            var e = this;
            this.C.setTimeout(function() {
                e.jb()
            }, Math.max(0, this.nk() - (qx(this.C) - this.Ca)))
        };
        d.prototype.qm = function(e, f, g) {
            var k = this;
            this.Bc({
                type: 1,
                clientId: this.id,
                requestId: this.rk(),
                command: e
            }, function(m) {
                if (m.type === 1)
                    if (m.result) f(m.result);
                    else {
                        var n, p, q, r = {
                                failureType: (q = (n = m.failure) == null ? void 0 : n.failureType) != null ? q : 12,
                                data: (p = m.failure) == null ? void 0 : p.data
                            },
                            v, u;
                        (u = (v = k.N).onFailure) == null || u.call(v, r);
                        g(r)
                    }
            })
        };
        d.prototype.Bc = function(e, f) {
            var g = this;
            if (this.state === 4) e.failure = {
                failureType: this.U
            }, f(e);
            else {
                var k = this.state !== 2 && e.type !== 0,
                    m = e.requestId,
                    n, p = this.C.setTimeout(function() {
                        var r = g.H[m];
                        r && g.ek(r, 7)
                    }, (n = e.maxDelay) != null ? n : px),
                    q = {
                        request: e,
                        Wk: f,
                        Rk: k,
                        yn: p
                    };
                this.H[m] = q;
                k || this.sendRequest(q)
            }
        };
        d.prototype.sendRequest = function(e) {
            this.Ca = qx(this.C);
            e.Rk = !1;
            this.km(e.request)
        };
        d.prototype.lm = function() {
            for (var e = l(Object.keys(this.H)), f = e.next(); !f.done; f = e.next()) {
                var g = this.H[f.value];
                g.Rk && this.sendRequest(g)
            }
        };
        d.prototype.hm = function() {
            for (var e =
                    l(Object.keys(this.H)), f = e.next(); !f.done; f = e.next()) this.ek(this.H[f.value], this.U)
        };
        d.prototype.ek = function(e, f) {
            this.qg(e);
            var g = e.request;
            g.failure = {
                failureType: f
            };
            e.Wk(g)
        };
        d.prototype.qg = function(e) {
            delete this.H[e.request.requestId];
            this.C.clearTimeout(e.yn)
        };
        d.prototype.bn = function(e) {
            this.Ca = qx(this.C);
            var f = this.H[e.requestId];
            if (f) this.qg(f), f.Wk(e);
            else {
                var g, k;
                (k = (g = this.N).onFailure) == null || k.call(g, {
                    failureType: 14
                })
            }
        };
        c = new d(a, z, b);
        return c
    };
    var sx;
    var tx = function() {
            sx || (sx = new lx);
            return sx
        },
        kx = function(a) {
            I(101) ? Pm(Rm(3), function() {
                wc(a)
            }) : wc(a)
        },
        ux = function(a) {
            var b = a.substring(0, a.indexOf("/_/service_worker"));
            return "&1p=1" + (b ? "&path=" + encodeURIComponent(b) : "")
        },
        vx = function(a) {
            var b = a,
                c = Fj.da;
            b ? (b.charAt(b.length - 1) !== "/" && (b += "/"), a = b + c) : a = "https://www.googletagmanager.com/static/service_worker/" + c + "/";
            var d;
            try {
                d = new URL(a)
            } catch (e) {
                return null
            }
            return d.protocol !== "https:" ? null : d
        },
        wx = function(a) {
            var b = Ao(vo.lk);
            return b && b[a]
        },
        xx = function(a,
            b, c, d, e) {
            var f = this;
            this.H = d;
            this.U = this.O = !1;
            this.da = null;
            this.initTime = c;
            this.C = 15;
            this.N = this.Am(a);
            z.setTimeout(function() {
                f.initialize()
            }, 1E3);
            C(function() {
                f.on(a, b, e)
            })
        };
    h = xx.prototype;
    h.delegate = function(a, b, c) {
        this.getState() !== 2 ? (this.H.C(this.C, {
            state: this.getState(),
            zf: this.initTime,
            Kf: Math.round(qb()) - this.initTime
        }, void 0, a.commandType), c({
            failureType: this.C
        })) : this.N.qm(a, b, c)
    };
    h.getState = function() {
        return this.N.getState().state
    };
    h.on = function(a, b, c) {
        var d = z.location.origin,
            e = this,
            f = uc();
        try {
            var g = f.contentDocument.createElement("iframe"),
                k = a.pathname,
                m = k[k.length - 1] === "/" ? a.toString() : a.toString() + "/",
                n = b ? ux(k) : "",
                p;
            I(123) && (p = {
                sandbox: "allow-same-origin allow-scripts"
            });
            uc(m + "sw_iframe.html?origin=" + encodeURIComponent(d) + n + (c ? "&e=1" : ""), void 0, p, void 0, g);
            var q = function() {
                f.contentDocument.body.appendChild(g);
                g.addEventListener("load", function() {
                    e.da = g.contentWindow;
                    f.contentWindow.addEventListener("message", function(r) {
                        r.origin === a.origin && e.N.bn(r.data)
                    });
                    e.initialize()
                })
            };
            f.contentDocument.readyState === "complete" ? q() : f.contentWindow.addEventListener("load", function() {
                q()
            })
        } catch (r) {
            f.parentElement.removeChild(f), this.C = 11, this.H.H(void 0, void 0, this.C, r.toString())
        }
    };
    h.Am = function(a) {
        var b = this,
            c = rx(function(d) {
                var e;
                (e = b.da) == null || e.postMessage(d, a.origin)
            }, {
                Kk: function() {
                    b.O = !0;
                    b.H.H(c.getState(), c.stats)
                },
                Lk: function() {},
                Jk: function(d) {
                    b.O ? (b.C = (d == null ? void 0 : d.failureType) || 10, b.H.C(b.C, c.getState(), c.stats, void 0, d == null ? void 0 : d.data)) : (b.C = (d == null ? void 0 :
                        d.failureType) || 4, b.H.H(c.getState(), c.stats, b.C, d == null ? void 0 : d.data))
                },
                onFailure: function(d) {
                    b.C = d.failureType;
                    b.H.C(b.C, c.getState(), c.stats, d.command, d.data)
                }
            });
        return c
    };
    h.initialize = function() {
        this.U || this.N.init();
        this.U = !0
    };

    function yx() {
        var a = Vf(Sf.C, "", function() {
            return {}
        });
        try {
            return a("internal_sw_allowed"), !0
        } catch (b) {
            return !1
        }
    }

    function zx(a, b, c) {
        c = c === void 0 ? !1 : c;
        var d = z.location.origin;
        if (!d || !yx()) return;
        Jj() && (a = "" + d + Ij() + "/_/service_worker");
        var e = vx(a);
        if (e === null || wx(e.origin)) return;
        if (!hc()) {
            tx().H(void 0, void 0, 6);
            return
        }
        var f = new xx(e, !!a, b || Math.round(qb()), tx(), c),
            g;
        a: {
            var k = vo.lk,
                m = {},
                n = yo(k);
            if (!n) {
                n = yo(k, !0);
                if (!n) {
                    g = void 0;
                    break a
                }
                n.set(m)
            }
            g = n.get()
        }
        g[e.origin] = f;
    }
    var Ax = function(a, b, c, d) {
        var e;
        if ((e = wx(a)) == null || !e.delegate) {
            var f = hc() ? 16 : 6;
            tx().C(f, void 0, void 0, b.commandType);
            d({
                failureType: f
            });
            return
        }
        wx(a).delegate(b, c, d);
    };

    function Bx(a, b, c, d, e) {
        var f = vx();
        if (f === null) {
            d(hc() ? 16 : 6);
            return
        }
        var g, k = (g = wx(f.origin)) == null ? void 0 : g.initTime,
            m = Math.round(qb()),
            n = {
                commandType: 0,
                params: {
                    url: a,
                    method: 0,
                    templates: b,
                    body: "",
                    processResponse: !1,
                    sinceInit: k ? m - k : void 0
                }
            };
        e && (n.params.encryptionKeyString = e);
        Ax(f.origin, n, function(p) {
            c(p)
        }, function(p) {
            d(p.failureType)
        });
    }

    function Cx(a, b, c, d) {
        var e = vx(a);
        if (e === null) {
            d("_is_sw=f" + (hc() ? 16 : 6) + "te");
            return
        }
        var f = b ? 1 : 0,
            g = Math.round(qb()),
            k, m = (k = wx(e.origin)) == null ? void 0 : k.initTime,
            n = m ? g - m : void 0;
        Ax(e.origin, {
            commandType: 0,
            params: {
                url: a,
                method: f,
                templates: c,
                body: b || "",
                processResponse: !0,
                sinceInit: n,
                attributionReporting: !0
            }
        }, function() {}, function(p) {
            var q = "_is_sw=f" + p.failureType,
                r, v = (r = wx(e.origin)) == null ? void 0 : r.getState();
            v !== void 0 && (q += "s" + v);
            d(n ? q + ("t" + n) : q + "te")
        });
    };
    var Dx = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Ex(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function Fx() {
        var a = z.google_tag_data,
            b;
        if (a != null && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Gx() {
        var a, b;
        return (b = (a = z.google_tag_data) == null ? void 0 : a.uach_promise) != null ? b : null
    }

    function Hx(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function Ix() {
        var a = z;
        if (!Hx(a)) return null;
        var b = Ex(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Dx).then(function(d) {
            b.uach != null || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var Kx = function(a, b) {
            if (a)
                for (var c = Jx(a), d = l(Object.keys(c)), e = d.next(); !e.done; e = d.next()) {
                    var f = e.value;
                    W(b, f, c[f])
                }
        },
        Jx = function(a) {
            var b = {};
            b[L.m.Ne] = a.architecture;
            b[L.m.Oe] = a.bitness;
            a.fullVersionList && (b[L.m.Pe] = a.fullVersionList.map(function(c) {
                return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
            }).join("|"));
            b[L.m.Qe] = a.mobile ? "1" : "0";
            b[L.m.Re] = a.model;
            b[L.m.Se] = a.platform;
            b[L.m.Te] = a.platformVersion;
            b[L.m.Ue] = a.wow64 ? "1" : "0";
            return b
        },
        Mx = function(a) {
            var b = Lx.eo,
                c = function(g, k) {
                    try {
                        a(g, k)
                    } catch (m) {}
                },
                d = Fx();
            if (d) c(d);
            else {
                var e = Gx();
                if (e) {
                    b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = z.setTimeout(function() {
                        c.Af || (c.Af = !0, O(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.Af || (c.Af = !0, O(104), z.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.Af || (c.Af = !0, O(105), z.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        Ox = function() {
            if (Hx(z) && (Nx = qb(), !Gx())) {
                var a = Ix();
                a && (a.then(function() {
                    O(95)
                }), a.catch(function() {
                    O(96)
                }))
            }
        },
        Nx;

    function Px(a) {
        var b = a.location.href;
        if (a === a.top) return {
            url: b,
            tn: !0
        };
        var c = !1,
            d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        var e = a.location.ancestorOrigins;
        if (e) {
            var f = e[e.length - 1];
            f && b.indexOf(f) === -1 && (c = !1, b = f)
        }
        return {
            url: b,
            tn: c
        }
    };
    var Qx = function() {
            return [L.m.R, L.m.T]
        },
        Rx = function(a) {
            I(23) && a.eventName === L.m.ia && Au(a, "page_view") && !T(a, "consent_updated") && !a.D.isGtmEvent ? dv(a.target, a.D) : Au(a, "call_conversion") && (dv(a.target, a.D), a.isAborted = !0)
        },
        Tx = function(a) {
            var b;
            if (a.eventName !== "gtag.config" && T(a, "send_user_data_hit")) switch (T(a, "hit_type")) {
                case "user_data_web":
                    b = 97;
                    Sx(a);
                    break;
                case "user_data_lead":
                    b = 98;
                    Sx(a);
                    break;
                case "conversion":
                    b = 99
            }!T(a, "speculative") && b && O(b);
            T(a, "speculative") === !0 && (a.isAborted = !0)
        },
        Ux = function(a) {
            if (!T(a,
                    "consent_updated") && I(29) && Au(a, ["conversion"])) {
                var b = Xt();
                Wt(b) && (W(a, L.m.Sc, "1"), V(a, "add_tag_timing", !0))
            }
        },
        Vx = function(a) {
            Au(a, ["conversion"]) && a.D.eventMetadata.is_external_event && W(a, L.m.Yj, !0)
        },
        Wx = function(a) {
            var b = S(Qx());
            switch (T(a, "hit_type")) {
                case "user_data_lead":
                case "user_data_web":
                    a.isAborted = !b || !!T(a, "consent_updated");
                    break;
                case "remarketing":
                    a.isAborted = !b;
                    break;
                case "conversion":
                    T(a, "consent_updated") && W(a, L.m.Sb, !0)
            }
        },
        Xx = function(a, b) {
            if (Jj()) {
                var c = function(m) {
                    var n = T(a, "extra_tag_experiment_ids");
                    n ? n.push(m) : V(a, "extra_tag_experiment_ids", [m])
                };
                I(60) && c(102696396);
                if (I(61)) {
                    c(102696397);
                    var d = T(a, "user_data");
                    V(a, "is_fpm_split", !0);
                    if (Gi(d)) {
                        c(102780931);
                        var e = b || lr(),
                            f = {},
                            g = {
                                eventMetadata: (f.hit_type_override = "user_data_web", f.user_data = d, f.transient_ecsid = e, f.is_fpm_encryption = !0, f.is_fpm_split = !0, f.extra_tag_experiment_ids = [102696397, 102780931], f),
                                noGtmEvent: !0
                            },
                            k = uv(a.target.destinationId, a.eventName, a.D.C);
                        xv(k, a.D.eventId, g);
                        V(a, "user_data");
                        return e
                    }
                    V(a, "is_fpm_encryption", !0)
                }
            }
        },
        Yx =
        function(a) {
            if (Au(a, ["conversion"])) {
                var b = T(a, "cookie_options"),
                    c = pv(b),
                    d = Xx(a, c),
                    e = c || d;
                if (e && !ru(a, L.m.Ha)) {
                    var f = lr(ru(a, L.m.Eb));
                    W(a, L.m.Ha, f);
                    Xa("GTAG_EVENT_FEATURE_CHANNEL", 12)
                }
                e && (W(a, L.m.Ib, e), V(a, "send_ccm_parallel_ping", !0))
            }
        },
        Zx = function(a) {
            Jj() || uj || qk(a.D) || zx(void 0, Math.round(qb()), I(121))
        },
        $x = function(a) {
            if (Au(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"]) && T(a, "conversion_linker_enabled") && S(L.m.R)) {
                var b = T(a, "hit_type") === "remarketing",
                    c = !I(3);
                if (!b || c) {
                    var d =
                        T(a, "hit_type") === "conversion" && a.eventName !== L.m.eb,
                        e = T(a, "cookie_options");
                    es(e, d);
                    S(L.m.T) && W(a, L.m.Db, cs[fs(e.prefix)])
                }
            }
        },
        ay = function(a) {
            Au(a, ["conversion", "user_data_lead", "user_data_web"]) && (Qu(a), Pu(a), Ou(a), Nu(a))
        },
        by = function(a) {
            Au(a, ["conversion"]) && V(a, "redact_click_ids", !!T(a, "redact_ads_data") && !S(Qx()))
        },
        cy = function(a) {
            Au(a, ["conversion"]) && Rr(!1)._up === "1" && W(a, L.m.Ge, !0)
        },
        dy = function(a) {
            if (Au(a, ["conversion", "remarketing"])) {
                var b = ou();
                b !== void 0 && W(a, L.m.Jd, b || "error");
                var c = sq();
                c && W(a, L.m.wc, c);
                var d = rq();
                d && W(a, L.m.zc, d)
            }
        },
        ey = function(a) {
            if (Au(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
                var b = z.__gsaExp.id;
                if (ab(b)) try {
                    var c = Number(b());
                    isNaN(c) || W(a, L.m.qh, c)
                } catch (d) {}
            }
        },
        fy = function(a) {
            mv(a);
        },
        gy = function(a) {
            I(44) && Au(a, "conversion") && (a.copyToHitData(L.m.Xg), a.copyToHitData(L.m.Yg), a.copyToHitData(L.m.Wg))
        },
        hy = function(a) {
            Au(a, "conversion") && (a.copyToHitData(L.m.Ed), a.copyToHitData(L.m.xd),
                a.copyToHitData(L.m.Id), a.copyToHitData(L.m.ye), a.copyToHitData(L.m.Lc), a.copyToHitData(L.m.Bd))
        },
        iy = function(a) {
            if (Au(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = a.D;
                if (Au(a, ["conversion", "remarketing"])) {
                    var c = P(b, L.m.rb);
                    c !== !0 && c !== !1 || W(a, L.m.rb, c)
                }
                yq(b) ? W(a, L.m.bc, !1) : (W(a, L.m.bc, !0), Au(a, "remarketing") && (a.isAborted = !0))
            }
        },
        jy = function(a) {
            if (Au(a, ["conversion", "remarketing"])) {
                var b = T(a, "hit_type") === "conversion";
                b && a.eventName !== L.m.Pa || (a.copyToHitData(L.m.ja),
                    b && (a.copyToHitData(L.m.te), a.copyToHitData(L.m.qe), a.copyToHitData(L.m.se), a.copyToHitData(L.m.pe), W(a, L.m.Tg, a.eventName), I(104) && (a.copyToHitData(L.m.dg), a.copyToHitData(L.m.Zf), a.copyToHitData(L.m.cg))))
            }
        },
        ky = function(a) {
            var b = I(7),
                c = a.D,
                d, e, f;
            if (!b) {
                var g = cp(c, L.m.la);
                d = zb(Xc(g) ? g : {})
            }
            var k = cp(c, L.m.la, 1),
                m = cp(c, L.m.la, 2);
            e = zb(Xc(k) ? k : {}, ".");
            f = zb(Xc(m) ? m : {}, ".");
            b || W(a, L.m.He, d);
            W(a, L.m.qb, e);
            W(a, L.m.pb, f)
        },
        ly = function(a) {
            if (a != null) {
                var b = String(a).substring(0, 512),
                    c = b.indexOf("#");
                return c ===
                    -1 ? b : b.substring(0, c)
            }
            return ""
        },
        my = function(a) {
            if (Au(a, "conversion") && S(L.m.R) && (ru(a, L.m.Cb) || ru(a, L.m.Oc))) {
                var b = ru(a, L.m.Eb),
                    c = Yc(T(a, "cookie_options"), null),
                    d = Ss(c.prefix);
                c.prefix = d === "_gcl" ? "" : d;
                if (ru(a, L.m.Cb)) {
                    var e = nu(b, c, !T(a, "gbraid_cookie_marked"));
                    V(a, "gbraid_cookie_marked", !0);
                    e && W(a, L.m.Bh, e)
                }
                if (ru(a, L.m.Oc)) {
                    var f = fu(b, c).Om;
                    f && W(a, L.m.lh, f)
                }
            }
        },
        ny = function(a) {
            if (a.eventName === L.m.eb && !a.D.isGtmEvent) {
                if (!T(a, "consent_updated") && Au(a, "conversion")) {
                    var b = P(a.D, L.m.Wb);
                    if (typeof b !==
                        "function") return;
                    var c = String(P(a.D, L.m.Gb)),
                        d = ru(a, c),
                        e = P(a.D, c);
                    c === L.m.Qa || c === L.m.Db ? zu({
                        kl: c,
                        callback: b,
                        Hk: e
                    }, T(a, "cookie_options"), T(a, "redact_ads_data"), St) : b(d || e)
                }
                a.isAborted = !0
            }
        },
        oy = function(a) {
            if (!$w(a, "hasPreAutoPiiCcdRule", !1) && Au(a, "conversion") && S(L.m.R)) {
                var b = P(a.D, L.m.xe) || {},
                    c = String(ru(a, L.m.Eb)),
                    d = b[c],
                    e = ru(a, L.m.wd),
                    f;
                if (!(f = Ku(d)))
                    if (An())
                        if (yw) f = !0;
                        else {
                            var g = Ev("AW-" + e);
                            f = !!g && !!g.preAutoPii
                        }
                else f = !1;
                if (f) {
                    var k = qb(),
                        m = nw({
                            Td: !0,
                            Ud: !0,
                            Ig: !0
                        });
                    if (m.elements.length !== 0) {
                        for (var n = [], p = 0; p < m.elements.length; ++p) {
                            var q = m.elements[p];
                            n.push(q.querySelector + "*" + Qv(q) + "*" + q.type)
                        }
                        W(a, L.m.lg, n.join("~"));
                        var r = m.Ei;
                        r && (W(a, L.m.mg, r.querySelector), W(a, L.m.kg, Qv(r)));
                        W(a, L.m.jg, String(qb() - k));
                        W(a, L.m.ng, m.status)
                    }
                }
            }
        },
        py = function(a) {
            if (a.eventName === L.m.ia && !T(a, "consent_updated") && (V(a, "is_config_command", !0), Au(a, "conversion") && V(a, "speculative", !0), Au(a, "remarketing") && (P(a.D, L.m.qc) === !1 || P(a.D, L.m.Ta) === !1) && V(a, "speculative", !0), Au(a, "landing_page"))) {
                var b = P(a.D, L.m.Aa) || {},
                    c = P(a.D, L.m.ib),
                    d = T(a, "conversion_linker_enabled"),
                    e = T(a, "source_canonical_id"),
                    f = T(a, "redact_ads_data"),
                    g = {
                        Nd: d,
                        Wd: b,
                        ae: c,
                        Da: e,
                        D: a.D,
                        Yd: f,
                        jl: P(a.D, L.m.Ba)
                    },
                    k = T(a, "cookie_options");
                uu(g, k);
                dv(a.target, a.D);
                var m = {
                    Xh: !1,
                    Yd: f,
                    targetId: a.target.id,
                    D: a.D,
                    Dc: d ? k : void 0,
                    Cg: d,
                    zk: ru(a, L.m.He),
                    ii: ru(a, L.m.qb),
                    fi: ru(a, L.m.pb),
                    mi: ru(a, L.m.Xb)
                };
                Uu(m);
                a.isAborted = !0
            }
        },
        qy = function(a) {
            Au(a, ["conversion", "remarketing"]) && (a.D.isGtmEvent ? T(a, "hit_type") !== "conversion" && a.eventName && W(a, L.m.vc, a.eventName) : W(a, L.m.vc,
                a.eventName), ib(a.D.C, function(b, c) {
                pi[b.split(".")[0]] || W(a, b, c)
            }))
        },
        ry = function(a) {
            if (!T(a, "is_fpm_split")) {
                var b = !T(a, "send_user_data_hit") && Au(a, ["conversion", "user_data_web"]),
                    c = !$w(a, "ccd_add_1p_data", !1) && Au(a, "user_data_lead");
                if ((b || c) && S(L.m.R)) {
                    var d = T(a, "hit_type") === "conversion",
                        e = a.D,
                        f = void 0,
                        g = P(e, L.m.Ia);
                    if (d) {
                        var k = P(e, L.m.oe) === !0;
                        if (a.D.isGtmEvent && k && !Pl) return;
                        var m = P(e, L.m.xe) || {},
                            n = String(ru(a, L.m.Eb)),
                            p = m[n];
                        if (k || p) {
                            var q;
                            var r;
                            p ? r = Xj(p, g) : (r = z.enhanced_conversion_data) &&
                                Xa("GTAG_EVENT_FEATURE_CHANNEL", 8);
                            var v = (p || {}).enhanced_conversions_mode,
                                u;
                            if (r) {
                                if (v === "manual") switch (r._tag_mode) {
                                    case "CODE":
                                        u = "c";
                                        break;
                                    case "AUTO":
                                        u = "a";
                                        break;
                                    case "MANUAL":
                                        u = "m";
                                        break;
                                    default:
                                        u = "c"
                                } else u = v === "automatic" ? Ku(p) ? "a" : "m" : "c";
                                q = {
                                    ba: r,
                                    il: u
                                }
                            } else q = {
                                ba: r,
                                il: void 0
                            };
                            var t = q,
                                w = t.il;
                            f = t.ba;
                            W(a, L.m.sb, w)
                        }
                    } else if (Pl && a.D.isGtmEvent) {
                        Sx(a);
                        V(a, "user_data", g);
                        W(a, L.m.sb, Lu(g));
                        return
                    }
                    V(a, "user_data", f)
                }
            }
        },
        sy = function(a) {
            if ($w(a, "ccd_add_1p_data", !1) && S(Qx())) {
                var b = a.D.H[L.m.Ve];
                if (Yj(b)) {
                    var c =
                        P(a.D, L.m.Ia);
                    c === null ? V(a, "user_data_from_code", null) : (b.enable_code && Xc(c) && V(a, "user_data_from_code", c), Xc(b.selectors) && V(a, "user_data_from_manual", Wj(b.selectors)))
                }
            }
        },
        ty = function(a) {
            V(a, "conversion_linker_enabled", P(a.D, L.m.za) !== !1);
            V(a, "cookie_options", pu(a));
            V(a, "redact_ads_data", P(a.D, L.m.ka) != null && P(a.D, L.m.ka) !== !1);
            V(a, "allow_ad_personalization", yq(a.D))
        },
        uy = function(a) {
            if (Au(a, ["conversion", "remarketing"]) && I(33)) {
                var b = function(d) {
                    return I(34) ? (Xa("fdr", d), !0) : !1
                };
                if (S(L.m.R) || b(0))
                    if (S(L.m.T) ||
                        b(1))
                        if (P(a.D, L.m.Ea) !== !1 || b(2))
                            if (yq(a.D) || b(3))
                                if (P(a.D, L.m.qc) !== !1 || b(4)) {
                                    var c;
                                    I(35) ? c = a.eventName === L.m.ia ? P(a.D, L.m.Ta) : void 0 : c = P(a.D, L.m.Ta);
                                    if (c !== !1 || b(5))
                                        if (il() || b(6)) I(34) && Za() ? (W(a, L.m.Aj, Ya("fdr")), delete Wa.fdr) : (W(a, L.m.hh, "1"), V(a, "send_fledge_experiment", !0))
                                }
            }
        },
        vy = function(a) {
            Au(a, ["conversion"]) && S(L.m.T) && (z._gtmpcm === !0 || vv() ? W(a, L.m.rc, "2") : I(37) && hl("attribution-reporting") && W(a, L.m.rc, "1"))
        },
        wy = function(a) {
            if (!Hx(z)) O(87);
            else if (Nx !== void 0) {
                O(85);
                var b = Fx();
                b ? Kx(b, a) :
                    O(86)
            }
        },
        xy = function(a) {
            var b = ["conversion", "remarketing"];
            b.push("page_view", "user_data_lead", "user_data_web");
            if (Au(a, b) && S(L.m.T)) {
                a.copyToHitData(L.m.Ba);
                var c = Ao(vo.Kh);
                if (c === void 0) zo(vo.Lh, !0);
                else {
                    var d = Ao(vo.bf);
                    W(a, L.m.Me, d + "." + c)
                }
            }
        },
        yy = function(a) {
            Au(a, ["conversion", "remarketing"]) && (a.copyToHitData(L.m.Ha), a.copyToHitData(L.m.ra), a.copyToHitData(L.m.Fa))
        },
        zy = function(a) {
            if (!T(a, "consent_updated") && Au(a, ["conversion", "remarketing"])) {
                var b = el(!1);
                W(a, L.m.Xb, b);
                var c = P(a.D, L.m.oa);
                c || (c =
                    b === 1 ? z.top.location.href : z.location.href);
                W(a, L.m.oa, ly(c));
                a.copyToHitData(L.m.Ga, A.referrer);
                W(a, L.m.hb, su());
                a.copyToHitData(L.m.Ya);
                var d = Fv();
                W(a, L.m.ac, d.width + "x" + d.height);
                var e = gl(),
                    f = Px(e);
                f.url && c !== f.url && W(a, L.m.hg, ly(f.url))
            }
        },
        Ay = function(a) {
            Au(a, ["conversion", "remarketing"])
        },
        Cy = function(a) {
            if (Au(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
                var b = ru(a, L.m.Eb),
                    c = P(a.D, L.m.Rf) === !0;
                c && V(a, "remarketing_only", !0);
                switch (T(a, "hit_type")) {
                    case "conversion":
                        !c && b && Sx(a);
                        By() && V(a, "is_gcp_conversion", !0);
                        (By() ? 0 : I(148)) && V(a, "is_fallback_aw_conversion_ping_allowed", !0);
                        break;
                    case "user_data_lead":
                    case "user_data_web":
                        !c && b && (a.isAborted = !0);
                        break;
                    case "remarketing":
                        !c && b || Sx(a)
                }
                Au(a, ["conversion", "remarketing"]) && (T(a, "is_gcp_conversion") ? W(a, L.m.Dh, "www.google.com") : W(a, L.m.Dh, "www.googleadservices.com"))
            }
        },
        By = function() {
            return gc.userAgent.toLowerCase().indexOf("firefox") !== -1 || oc()
        },
        Dy = function(a) {
            var b = a.target.ids[Ko[0]];
            if (b) {
                W(a, L.m.wd, b);
                var c = a.target.ids[Ko[1]];
                c && W(a, L.m.Eb, c)
            } else a.isAborted = !0
        },
        Sx = function(a) {
            T(a, "speculative_in_message") || V(a, "speculative", !1)
        };
    var Ey = function() {
            return [L.m.R, L.m.T]
        },
        Gy = function(a, b) {
            for (var c = {}, d = function(p, q) {
                    var r;
                    r = q === !0 ? "1" : q === !1 ? "0" : encodeURIComponent(String(q));
                    c[p] = r
                }, e = l(Object.keys(a.C)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value,
                    k = ru(a, g),
                    m = Fy[g];
                m && k !== void 0 && k !== "" && (!T(a, "redact_click_ids") || g !== L.m.Kc && g !== L.m.Mc && g !== L.m.md && g !== L.m.je || (k = "0"), d(m, k))
            }
            d("gtm", Mq({
                Da: T(a, "source_canonical_id")
            }));
            zq() && d("gcs", Aq());
            d("gcd", Eq(a.D));
            Hq() && d("dma_cps", Fq());
            d("dma", Gq());
            dq(lq()) && d("tcfd", Iq());
            Hj() &&
                d("tag_exp", Hj());
            if (T(a, "add_tag_timing")) {
                d("tft", qb());
                var n = Jc();
                n !== void 0 && d("tfd", Math.round(n))
            }
            I(23) && d("apve", "1");
            (I(24) || I(25)) && d("apvf", Hc() ? I(25) ? "f" : "sb" : "nf");
            I(101) && Jm[1] === 1 && !Mm[1].isConsentGranted() && (c.limited_ads = "1");
            b(c)
        },
        Hy = function(a, b, c) {
            var d = b.D;
            Sn({
                targetId: b.target.destinationId,
                request: {
                    url: a,
                    parameterEncoding: 2,
                    endpoint: c
                },
                Ka: {
                    eventId: d.eventId,
                    priorityId: d.priorityId
                },
                vg: {
                    eventId: T(b, "consent_event_id"),
                    priorityId: T(b, "consent_priority_id")
                }
            })
        },
        Iy = function(a, b,
            c) {
            var d = {
                destinationId: b.target.destinationId,
                endpoint: c,
                eventId: b.D.eventId,
                priorityId: b.D.priorityId
            };
            Hy(a, b, c);
            Bl(d, a, void 0, {
                wi: !0,
                method: "GET"
            }, function() {}, function() {
                Al(d, a + "&img=1")
            })
        },
        Jy = function(a) {
            var b = oc() || mc() ? "www.google.com" : "www.googleadservices.com",
                c = [];
            ib(a, function(d, e) {
                d === "dl" ? c.push("url=" + e) : d === "dr" ? c.push("ref=" + e) : d === "uid" ? c.push("userId=" + e) : c.push(d + "=" + e)
            });
            return "https://" + b + "/pagead/set_partitioned_cookie?" + c.join("&")
        },
        Ky = function() {
            var a = S(Ey()),
                b = a ? "https://www.google.com" :
                "https://pagead2.googlesyndication.com";
            return (I(75) ? a ? b : rk(b, !0) : rk(b, !0)) + "/ccm/collect"
        },
        Ly = function(a) {
            Gy(a, function(b) {
                if (T(a, "hit_type") === "page_view") {
                    var c = [];
                    I(27) && a.target.destinationId && c.push("tid=" + a.target.destinationId);
                    ib(b, function(r, v) {
                        c.push(r + "=" + v)
                    });
                    var d = Ky() + "?" + c.join("&"),
                        e = S(Ey()) ? 45 : 46;
                    Hy(d, a, e);
                    var f = a.D,
                        g = {
                            destinationId: a.target.destinationId,
                            endpoint: e,
                            eventId: f.eventId,
                            priorityId: f.priorityId
                        };
                    if (I(25) && Hc()) {
                        Bl(g, d, void 0, {
                            wi: !0
                        }, function() {}, function() {
                            Al(g, d + "&img=1")
                        });
                        var k = S(Ey()),
                            m = ru(a, L.m.Sc) === "1",
                            n = ru(a, L.m.Vg) === "1";
                        if (k && m && !n) {
                            var p = Jy(b),
                                q = oc() || mc() ? 58 : 57;
                            Iy(p, a, q)
                        }
                    } else zl(g, d) || Al(g, d + "&img=1");
                    if (ab(a.D.onSuccess)) a.D.onSuccess()
                }
            })
        },
        My = {},
        Fy = (My[L.m.Sb] = "gcu", My[L.m.Cb] = "gclgb", My[L.m.Qa] = "gclaw", My[L.m.he] = "gad_source", My[L.m.ie] = "gad_source_src", My[L.m.Kc] = "gclid", My[L.m.rj] = "gclsrc", My[L.m.je] = "gbraid", My[L.m.md] = "wbraid", My[L.m.Db] = "auid", My[L.m.tj] = "rnd", My[L.m.Vg] = "ncl", My[L.m.Zg] = "gcldc", My[L.m.Mc] = "dclid", My[L.m.pb] = "edid", My[L.m.vc] = "en",
            My[L.m.wc] = "gdpr", My[L.m.qb] = "gdid", My[L.m.Qc] = "_ng", My[L.m.Fe] = "_tu", My[L.m.Hj] = "gtm_up", My[L.m.Xb] = "frm", My[L.m.Sc] = "lps", My[L.m.He] = "did", My[L.m.Ij] = "navt", My[L.m.oa] = "dl", My[L.m.Ga] = "dr", My[L.m.hb] = "dt", My[L.m.Nj] = "scrsrc", My[L.m.Me] = "ga_uid", My[L.m.zc] = "gdpr_consent", My[L.m.zh] = "u_tz", My[L.m.Ba] = "uid", My[L.m.Jd] = "us_privacy", My[L.m.bc] = "npa", My);
    var Ny = {};
    Ny.M = Oq.M;
    var Oy = {
            vo: "L",
            fm: "S",
            Co: "Y",
            jo: "B",
            ro: "E",
            uo: "I",
            Bo: "TC",
            so: "HTC"
        },
        Py = {
            fm: "S",
            qo: "V",
            mo: "E",
            Ao: "tag"
        },
        Qy = {},
        Ry = (Qy[Ny.M.Ph] = "6", Qy[Ny.M.Qh] = "5", Qy[Ny.M.Oh] = "7", Qy);

    function Sy() {
        function a(c, d) {
            var e = Ya(d);
            e && b.push([c, e])
        }
        var b = [];
        a("u", "GTM");
        a("ut", "TAGGING");
        a("h", "HEALTH");
        return b
    };
    var Ty = !1;

    function iz(a) {}

    function jz(a) {}

    function kz() {}

    function lz(a) {}

    function mz(a) {}

    function nz(a) {}

    function oz() {}

    function pz(a, b) {}

    function qz(a, b, c) {}

    function rz() {};
    var sz = Object.freeze({
        cache: "no-store",
        credentials: "include",
        method: "GET",
        keepalive: !0,
        redirect: "follow"
    });

    function tz(a, b, c, d, e, f, g) {
        var k = Object.assign({}, sz);
        c && (k.body = c, k.method = "POST");
        Object.assign(k, e);
        z.fetch(b, k).then(function(m) {
            if (!m.ok) g == null || g();
            else if (m.body) {
                var n = m.body.getReader(),
                    p = new TextDecoder;
                return new Promise(function(q) {
                    function r() {
                        n.read().then(function(v) {
                            var u;
                            u = v.done;
                            var t = p.decode(v.value, {
                                stream: !u
                            });
                            uz(d, t);
                            u ? (f == null || f(), q()) : r()
                        }).catch(function() {
                            q()
                        })
                    }
                    r()
                })
            }
        }).catch(function() {
            g ? g() : I(118) && (b += "&_z=retryFetch", c ? zl(a, b, c) : yl(a, b))
        })
    };
    var vz = function(a) {
            this.N = a;
            this.C = ""
        },
        wz = function(a, b) {
            a.H = b;
            return a
        },
        uz = function(a, b) {
            b = a.C + b;
            for (var c = b.indexOf("\n\n"); c !== -1;) {
                var d = a,
                    e;
                a: {
                    var f = l(b.substring(0, c).split("\n")),
                        g = f.next().value,
                        k = f.next().value;
                    if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0) try {
                        e = JSON.parse(k.substring(k.indexOf(":") + 1));
                        break a
                    } catch (p) {}
                    e = void 0
                }
                var m = d,
                    n = e;
                n && (xz(n.send_pixel, n.options, m.N), xz(n.create_iframe, n.options, m.H), xz(n.fetch, n.options, m.O));
                b = b.substring(c + 2);
                c = b.indexOf("\n\n")
            }
            a.C =
                b
        };

    function yz(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }

    function xz(a, b, c) {
        if (a && c) {
            var d = a || [];
            if (Array.isArray(d))
                for (var e = Xc(b) ? b : {}, f = l(d), g = f.next(); !g.done; g = f.next()) c(g.value, e)
        }
    };
    var zz = function(a, b) {
            return T(a, "is_fallback_aw_conversion_ping_allowed") && (b === 3 || b === 6)
        },
        Az = function(a) {
            return new vz(function(b, c) {
                var d;
                if (c.fallback_url) {
                    var e = c.fallback_url,
                        f = c.fallback_url_method;
                    d = function() {
                        switch (f) {
                            case "send_pixel":
                                Al(a, e);
                                break;
                            default:
                                Bl(a, e)
                        }
                    }
                }
                Al(a, b, void 0, d)
            })
        },
        Bz = function(a, b) {
            if (Fj.C && b !== 0) {
                var c = Nq(a || "");
                if (c && c !== 1) {
                    if (c % 100 < b) return 102640489;
                    if (c % 100 >= 100 - b) return 102640488
                }
            }
        },
        Cz = function(a, b) {
            if (!Fj.C || b === 0) return !1;
            var c = Nq(a || "");
            return c && c !== 1 ? c % 100 <
                b : !1
        },
        Dz = function(a) {
            if (Fj.C && z.location.protocol === "https:") {
                var b = T(a, "hit_type"),
                    c = T(a, "user_data"),
                    d = T(a, "cookie_options");
                if (b === "user_data_web" && Ai.kf > 0 && Gi(c)) return T(a, "transient_ecsid") || qv(d);
                if (b === "conversion" && Ai.di > 0 || b === "user_data_web" && Ai.kf > 0) return pv(d)
            }
        },
        Ez = function(a) {
            if (a !== void 0) return Math.round(a / 10) * 10
        },
        Fz = function(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c],
                    e = void 0;
                if (d.hasOwnProperty("google_business_vertical")) {
                    e = d.google_business_vertical;
                    var f = {};
                    b[e] = b[e] || (f.google_business_vertical =
                        e, f)
                } else e = "", b.hasOwnProperty(e) || (b[e] = {});
                var g = b[e],
                    k;
                for (k in d) k !== "google_business_vertical" && (k in g || (g[k] = []), g[k].push(d[k]))
            }
            return Object.keys(b).map(function(m) {
                return b[m]
            })
        },
        ii = function(a) {
            a.item_id != null && (a.id != null ? (O(138), a.id !== a.item_id && O(148)) : O(153));
            return I(19) ? ji(a) : a.id
        },
        Hz = function(a) {
            if (!a || typeof a !== "object" || typeof a.join === "function") return "";
            var b = [];
            ib(a, function(c, d) {
                var e, f;
                if (Array.isArray(d)) {
                    for (var g = [], k = 0; k < d.length; ++k) {
                        var m = Gz(d[k]);
                        m !== void 0 && g.push(m)
                    }
                    f =
                        g.length !== 0 ? g.join(",") : void 0
                } else f = Gz(d);
                e = f;
                var n = Gz(c);
                n && e !== void 0 && b.push(n + "=" + e)
            });
            return b.join(";")
        },
        Gz = function(a) {
            var b = typeof a;
            if (a != null && b !== "object" && b !== "function") return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
        },
        Iz = function(a, b) {
            var c = [],
                d = function(g, k) {
                    var m = qg[g] === !0;
                    k == null || !m && k === "" || (k === !0 && (k = 1), k === !1 && (k = 0), c.push(g + "=" + encodeURIComponent(k)))
                },
                e = T(a, "hit_type");
            if (e === "conversion" || e === "remarketing" || e === "ga_conversion") {
                var f = T(a, "event_start_timestamp_ms");
                d("random", f)
            }
            ib(b, d);
            return c.join("&")
        },
        Jz = function(a, b, c) {
            if (Kq() || !T(a, "send_fledge_experiment")) return [];
            T(a, "hit_type") === "conversion" && (b.ct_cookie_present = 0);
            var d = ll(),
                e = Iz(a, b);
            return [{
                ub: "" + d + "/td/rul/" + c + "?" + e,
                format: 4,
                lb: !1,
                endpoint: 44
            }]
        },
        Kz = function(a, b, c) {
            var d = rk("https://googleads.g.doubleclick.net"),
                e = Iz(a, b);
            return [{
                ub: "" + d + "/pagead/viewthroughconversion/" + c + "/?" + e,
                format: Kq() ? 2 : 3,
                lb: !0,
                endpoint: 9
            }]
        },
        Mz = function(a) {
            var b = "/pagead/conversion",
                c = "https://www.googleadservices.com",
                d = 5;
            S(Lz) ? T(a, "is_gcp_conversion") && (c = "https://www.google.com", b = "/pagead/1p-conversion", d = 8) : (c = "https://pagead2.googlesyndication.com", d = 6);
            return {
                ai: c,
                wk: b,
                endpoint: d
            }
        },
        Nz = function(a) {
            return T(a, "is_gcp_conversion") ? "&gcp=1&sscte=1&ct_cookie_present=1" : ""
        },
        Oz = function(a, b) {
            var c = T(a, "hit_type"),
                d = ru(a, L.m.wd),
                e = [];
            switch (c) {
                case "conversion":
                    var f = e.push,
                        g = f.apply,
                        k = Mz(a),
                        m = k.ai,
                        n = k.wk,
                        p = k.endpoint,
                        q = S(Lz),
                        r = q ? m : rk(m, !0),
                        v = Iz(a, b),
                        u = Nz(a),
                        t = S(Lz),
                        w = {
                            ub: "" + r + n + "/" + d + "/?" + v + u,
                            format: I(36) ? Kq() ||
                                !Hc() ? 2 : t ? 6 : 5 : Kq() ? 2 : 3,
                            lb: !0,
                            endpoint: p
                        };
                    S(L.m.T) && (w.attributes = {
                        attributionsrc: ""
                    });
                    q && T(a, "is_fallback_aw_conversion_ping_allowed") && (w.Lm = "" + rk("https://www.google.com", !0) + "/pagead/1p-conversion/" + d + "/?" + v + "&gcp=1&sscte=1&ct_cookie_present=1", w.nf = 8);
                    g.call(f, e, ta([w]));
                    var x = e.push,
                        y = x.apply,
                        B;
                    if (Jj() && I(139) && S(Lz)) {
                        var D = Mz(a),
                            E = D.ai,
                            H = D.wk,
                            N = D.endpoint,
                            M = Iz(a, b),
                            U = Nz(a) + "&adtest=on";
                        B = [{
                            ub: "" + rk(E, !0, "/d") + H + "/" + d + "/?" + M + U,
                            format: 3,
                            lb: !0,
                            endpoint: N
                        }]
                    } else B = [];
                    y.call(x, e, ta(B));
                    var F = e.push,
                        R = F.apply,
                        ba;
                    if (T(a, "send_ccm_parallel_ping")) {
                        var ha = Mz(a).ai,
                            Y = 22;
                        T(a, "is_gcp_conversion") && (Y = 23);
                        var Q = T(a, "is_fpm_split") || Cz(String(b.ecsid || ""), Ai.di),
                            ja = rk(ha, !0, Q ? "/d" : void 0),
                            la = Iz(a, b),
                            na = Nz(a),
                            Ea = "" + ja + "/ccm/conversion/" + d + "/?" + ("" + la + na);
                        Q && (Ea = sk(Ea));
                        ba = [{
                            ub: Ea,
                            format: 2,
                            lb: !0,
                            endpoint: Y
                        }]
                    } else ba = [];
                    R.call(F, e, ta(ba));
                    var Ra = e.push,
                        Ha = Ra.apply,
                        Ua;
                    if (T(a, "is_gcp_conversion") && S(Lz)) {
                        var lb = rk("https://googleads.g.doubleclick.net"),
                            ac = Iz(a, b);
                        Ua = [{
                            ub: "" + lb + "/pagead/viewthroughconversion/" +
                                d + "/?" + ac + "&gcp=1&ct_cookie_present=1",
                            format: I(36) ? Kq() || !Hc() ? 2 : 6 : Kq() ? 2 : 3,
                            lb: !0,
                            endpoint: 9
                        }]
                    } else Ua = [];
                    Ha.call(Ra, e, ta(Ua));
                    e.push.apply(e, ta(Jz(a, b, d)));
                    break;
                case "remarketing":
                    var Uc;
                    var Pe = ru(a, L.m.ja);
                    if (Pe && Pe.length) {
                        for (var aw = [], Qo = 0; Qo < Pe.length; ++Qo) {
                            var Qe = Pe[Qo];
                            if (Qe) {
                                var Re = {};
                                aw.push((Re.id = ii(Qe), Re.origin = Qe.origin, Re.destination = Qe.destination, Re.start_date = Qe.start_date, Re.end_date = Qe.end_date, Re.location_id = Qe.location_id, Re.google_business_vertical = Qe.google_business_vertical,
                                    Re))
                            }
                        }
                        Uc = aw
                    } else Uc = [];
                    var Ro = Fz(Uc);
                    if (!Ro.length) {
                        e.push.apply(e, ta(Kz(a, b, d)));
                        e.push.apply(e, ta(Jz(a, b, d)));
                        break
                    }
                    for (var bw = e.push, pJ = bw.apply, ni = [], cw = b.data || "", So = 0; So < Ro.length; So++) {
                        var dw = Hz(Ro[So]);
                        b.data = "" + cw + (cw && dw ? ";" : "") + dw;
                        ni.push.apply(ni, ta(Kz(a, b, d)));
                        ni.push.apply(ni, ta(Jz(a, b, d)));
                        V(a, "event_start_timestamp_ms", T(a, "event_start_timestamp_ms") + 1)
                    }
                    pJ.call(bw, e, ta(ni));
                    break;
                case "user_data_lead":
                    var ew = e.push,
                        qJ = ew.apply,
                        rJ = rk(I(133) ? "https://www.google.com" : "https://google.com"),
                        sJ = Iz(a, b);
                    qJ.call(ew, e, ta([{
                        ub: "" + rJ + "/pagead/form-data/" + d + "?" + sJ,
                        format: 1,
                        lb: !0,
                        endpoint: 11
                    }]));
                    break;
                case "user_data_web":
                    var fw = e.push,
                        tJ = fw.apply,
                        gw, uJ = T(a, "is_fpm_split") || Cz(String(b.ecsid || ""), Ai.kf),
                        vJ = rk(I(133) ? "https://www.google.com" : "https://google.com", void 0, Fj.C && I(66) || uJ ? "/d" : void 0),
                        wJ = Iz(a, b);
                    gw = [{
                        ub: sk("" + vJ + "/ccm/form-data/" + d + "?" + wJ),
                        format: 1,
                        lb: !0,
                        endpoint: 21
                    }];
                    tJ.call(fw, e, ta(gw));
                    break;
                case "ga_conversion":
                    var hw = e.push,
                        xJ = hw.apply,
                        iw = "https://www.google.com",
                        jw = 54;
                    S(Lz) ||
                        (iw = "https://pagead2.googlesyndication.com", jw = 55);
                    var yJ = rk(iw, !0),
                        zJ = Iz(a, b);
                    xJ.call(hw, e, ta([{
                        ub: "" + yJ + "/measurement/conversion/?" + zJ,
                        format: 5,
                        lb: !0,
                        endpoint: jw
                    }]))
            }
            return {
                ln: e
            }
        },
        Qz = function(a, b, c, d, e, f, g, k) {
            var m = zz(c, b);
            m || Pz(a, c, e);
            jz(c.D.eventId);
            var n = function() {
                    f && (f(), m && Pz(a, c, e))
                },
                p = {
                    destinationId: c.target.destinationId,
                    endpoint: e,
                    priorityId: c.D.priorityId,
                    eventId: c.D.eventId
                };
            switch (b) {
                case 1:
                    yl(p, a);
                    f && f();
                    break;
                case 2:
                    Al(p, a, n, g, k);
                    break;
                case 3:
                    var q = !1;
                    try {
                        q = El(p, z, A, a, n, g, k)
                    } catch (t) {
                        q = !1
                    }
                    q || Qz(a, 2, c, d, e, n, g, k);
                    break;
                case 4:
                    var r = "AW-" + ru(c, L.m.wd),
                        v = ru(c, L.m.Eb);
                    v && (r = r + "/" + v);
                    Fl(p, a, r);
                    break;
                case 5:
                    Bl(p, a, void 0, void 0, f, g);
                    break;
                case 6:
                    var u = Zk(a, "fmt", 7);
                    I(53) && Ak && ul(p, 2, u);
                    tz(p, u, void 0, Az(p), {
                        attributionReporting: Rz
                    }, n, g)
            }
        },
        Pz = function(a, b, c) {
            var d = b.D;
            Sn({
                targetId: b.target.destinationId,
                request: {
                    url: a,
                    parameterEncoding: 3,
                    endpoint: c
                },
                Ka: {
                    eventId: d.eventId,
                    priorityId: d.priorityId
                },
                vg: {
                    eventId: T(b, "consent_event_id"),
                    priorityId: T(b, "consent_priority_id")
                }
            })
        },
        Sz = function(a,
            b) {
            var c = !0;
            switch (a) {
                case "conversion":
                case "user_data_web":
                    c = !1;
                    break;
                case "user_data_lead":
                    c = !I(8)
            }
            return c ? b.replace(/./g, "*") : b
        },
        Tz = function(a, b) {
            switch (a) {
                case "conversion":
                    return I(4) ? !1 : Fj.C && I(63) || !Fj.C && I(64) ? !0 : !1;
                case "user_data_lead":
                    return I(65);
                case "user_data_web":
                    return I(5) ? !1 : Fj.C && I(66) || !Fj.C && I(67) || Cz(b, Ai.kf) ? !0 : !1;
                default:
                    return !1
            }
        },
        Uz = function(a) {
            if (!ru(a, L.m.ee) || !ru(a, L.m.fe)) return "";
            var b = ru(a, L.m.ee).split("."),
                c = ru(a, L.m.fe).split(".");
            if (!b.length || !c.length || b.length !==
                c.length) return "";
            for (var d = [], e = 0; e < b.length; ++e) d.push(b[e] + "_" + c[e]);
            return d.join(".")
        },
        Yz = function(a, b, c) {
            var d = Fi(T(a, "user_data")),
                e = Ei(d, c),
                f = e.Li,
                g = e.Lf,
                k = e.La,
                m = e.Em,
                n = e.encryptionKeyString,
                p = [];
            Vz(c) || p.push("&em=" + f);
            var q = {
                Lo: function() {
                    return !0
                },
                Lf: g,
                Yn: p,
                Bn: d,
                La: k
            };
            c === 1 && (p.push("&eme=" + m), q.encryptionKeyString = n, q.Xk = function(r, v) {
                return function(u) {
                    var t;
                    var w = T(a, "user_data");
                    t = c === 0 ? Ri(w, !1) : c === 1 ? Ri(w, !0, !0) : void 0;
                    var x = Wz(v.ub, a, b, u);
                    var y = Xz(v, a, b, x, c, r);
                    t ? t.then(y) : y(void 0)
                }
            });
            return q
        },
        Xz = function(a, b, c, d, e, f) {
            return function(g) {
                if (!Vz(e)) {
                    var k = (g == null ? 0 : g.Za) ? g.Za : Pi({
                        Xd: []
                    }).Za;
                    d += "&em=" + encodeURIComponent(k)
                }
                Qz(d, a.format, b, c, a.endpoint, a.lb ? f : void 0, void 0, a.attributes)
            }
        },
        Vz = function(a) {
            return I(115) || Fj.C && I(18) && a !== 0
        },
        Wz = function(a,
            b, c, d) {
            var e = a;
            if (d) {
                var f = T(b, "source_canonical_id"),
                    g = Mq({
                        Da: f,
                        Yk: d
                    });
                e = e.replace(c.gtm, g)
            }
            return e
        },
        aA = function(a, b, c) {
            return function(d) {
                var e = d.Za;
                Vz(d.xa ? 1 : 0) || (b.em = e);
                I(59) && d.La && d.time !== void 0 && (b._ht = Zz(Ez(d.time), e));
                d.La && $z(a, b, c);
            }
        },
        Zz = function(a, b) {
            return ["t." + (a != null ? a : ""), "l." + Ez(b.length)].join("~")
        },
        $z = function(a, b, c) {
            if (a ===
                "user_data_web") {
                var d = T(c, "cookie_options"),
                    e = T(c, "transient_ecsid") || qv(d);
                b.ecsid = e
            }
        },
        bA = function(a, b, c, d, e) {
            if (a) try {
                a.then(aA(c, d, b)).then(function() {
                    e(d)
                });
                return
            } catch (f) {}
            e(d)
        },
        cA = function(a, b, c, d, e) {
            var f = b.ub,
                g = b.format,
                k = b.lb,
                m = b.attributes,
                n = b.endpoint;
            return function(p) {
                Oi(c.Bn).then(function(q) {
                    var r = Pi(q),
                        v = Wz(f, e, d, p);
                    I(115) || (v += "&em=" + encodeURIComponent(r.Za));
                    Qz(v, g, e, d, n, k ? a : void 0, void 0, m)
                })
            }
        },
        fA = function(a) {
            if (T(a, "hit_type") === "page_view") Ly(a);
            else {
                var b = I(21) ? sb(a.D.onFailure) :
                    void 0;
                dA(a, function(c, d) {
                    I(115) && delete c.em;
                    for (var e = Oz(a, c).ln, f = ((d == null ? void 0 : d.No) || new eA(a)).H(e.filter(function(B) {
                            return B.lb
                        }).length), g = {}, k = 0; k < e.length; g = {
                            hi: void 0,
                            nf: void 0,
                            be: void 0,
                            Sh: void 0,
                            ei: void 0
                        }, k++) {
                        var m = e[k],
                            n = m.ub,
                            p = m.format;
                        g.be = m.lb;
                        g.Sh = m.attributes;
                        g.ei = m.endpoint;
                        g.hi = m.Lm;
                        g.nf = m.nf;
                        var q = void 0,
                            r = (q = d) == null ? void 0 : q.serviceWorker;
                        if (r) {
                            var v = r.Xk ? r.Xk(f, e[k]) : cA(f, e[k], r, c, a),
                                u = r,
                                t = u.Lf,
                                w = u.encryptionKeyString,
                                x = "" + n + u.Yn.join("");
                            Bx(x, t, function(B) {
                                return function(D) {
                                    Pz(D.data,
                                        a, B.ei);
                                    B.be && typeof f === "function" && f()
                                }
                            }(g), v, w)
                        } else {
                            var y = b;
                            g.hi && g.nf && (y = function(B) {
                                return function() {
                                    Qz(B.hi, 5, a, c, B.nf, B.be ? f : void 0, B.be ? b : void 0, B.Sh)
                                }
                            }(g));
                            Qz(n, p, a, c, g.ei, g.be ? f : void 0, g.be ? y : void 0, g.Sh)
                        }
                    }
                })
            }
        },
        Rz = {
            eventSourceEligible: !1,
            triggerEligible: !0
        },
        eA = function(a) {
            this.C = 1;
            this.onSuccess = a.D.onSuccess
        };
    eA.prototype.H = function(a) {
        var b = this;
        return Ab(function() {
            b.N()
        }, a || 1)
    };
    eA.prototype.N = function() {
        this.C--;
        if (ab(this.onSuccess) && this.C === 0) this.onSuccess()
    };
    var Lz = [L.m.R, L.m.T],
        dA = function(a, b) {
            var c = T(a, "hit_type"),
                d = {},
                e = {},
                f = T(a, "event_start_timestamp_ms");
            c === "conversion" || c === "remarketing" ? (d.cv = "11", d.fst = f, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1") : c === "ga_conversion" && (d.cv = "11", d.tid = a.target.destinationId, d.fst = f, d.fmt = 6, d.en = a.eventName);
            if (c === "conversion") {
                var g = vr();
                g > 0 && (d.gcl_ctr = g)
            }
            var k = vt(["aw", "dc"]);
            k != null && (d.gad_source = k);
            d.gtm = Mq({
                Da: T(a, "source_canonical_id")
            });
            c !== "remarketing" && zq() && (d.gcs = Aq());
            d.gcd = Eq(a.D);
            Hq() && (d.dma_cps = Fq());
            d.dma =
                Gq();
            dq(lq()) && (d.tcfd = Iq());
            var m = T(a, "extra_tag_experiment_ids");
            if (Hj() || m) d.tag_exp = Hj(m || []);
            I(101) && Jm[1] === 1 && !Mm[1].isConsentGranted() && (d.limited_ads = "1");
            ru(a, L.m.ac) && fi(ru(a, L.m.ac), d);
            if (ru(a, L.m.Ya)) {
                var n = ru(a, L.m.Ya);
                n && (n.length === 2 ? gi(d, "hl", n) : n.length === 5 && (gi(d, "hl", n.substring(0, 2)), gi(d, "gl", n.substring(3, 5))))
            }
            var p = T(a, "redact_click_ids"),
                q = function(na, Ea) {
                    var Ra = ru(a, Ea);
                    Ra && (d[na] = p ? Ft(Ra) : Ra)
                };
            q("url", L.m.oa);
            q("ref", L.m.Ga);
            q("top", L.m.hg);
            var r = Uz(a);
            r && (d.gclaw_src =
                r);
            for (var v = l(Object.keys(a.C)), u = v.next(); !u.done; u = v.next()) {
                var t = u.value,
                    w = ru(a, t);
                if (ei.hasOwnProperty(t)) {
                    var x = ei[t];
                    x && (d[x] = w)
                } else e[t] = w
            }
            Eo(d, ru(a, L.m.Kd));
            var y = ru(a, L.m.Ed);
            y !== void 0 && y !== "" && (d.vdnc = String(y));
            var B = ru(a, L.m.Bd);
            B !== void 0 && (d.shf = B);
            var D = ru(a, L.m.Lc);
            D !== void 0 && (d.delc = D);
            if (I(29) && T(a, "add_tag_timing")) {
                d.tft = qb();
                var E = Jc();
                E !== void 0 && (d.tfd = Math.round(E))
            }
            c !== "ga_conversion" && (d.data = Hz(e));
            var H = ru(a, L.m.ja);
            !H || c !== "conversion" && c !== "ga_conversion" || (d.iedeld =
                mi(H), d.item = hi(H));
            var N = ru(a, L.m.Pc);
            if (N && typeof N === "object")
                for (var M = l(Object.keys(N)), U = M.next(); !U.done; U = M.next()) {
                    var F = U.value;
                    d["gap." + F] = N[F]
                }
            if (c !== "conversion" && c !== "user_data_lead" && c !== "user_data_web") b(d);
            else if (S(L.m.T) && S(L.m.R)) {
                var R = Dz(a);
                if (c === "conversion" || c === "user_data_web") {
                    var ba = Bz(R, c === "conversion" ? Ai.di : Ai.kf);
                    ba && (d.tag_exp = Hj(Array.from(m || []).concat(ba)))
                }
                if (T(a, "user_data"))
                    if (c !== "conversion") {
                        d.gtm = Mq({
                            Da: T(a, "source_canonical_id"),
                            Yk: 3
                        });
                        var ha = !!T(a, "is_fpm_encryption") ||
                            Tz(c, R),
                            Y = Yz(a, d, ha ? 1 : 0);
                        Y.La && $z(c, d, a);
                        b(d, {
                            serviceWorker: Y
                        })
                    } else {
                        var Q = T(a, "user_data"),
                            ja = !!T(a, "is_fpm_encryption") || Tz(c, R),
                            la = Ri(Q, ja);
                        bA(la, a, c, d, b)
                    }
                else b(d)
            } else d.ec_mode = void 0, b(d)
        };

    function gA(a, b) {
        if (data.entities) {
            var c = data.entities[a];
            if (c) return c[b]
        }
    };

    function hA(a, b, c) {
        c = c === void 0 ? !1 : c;
        iA().addRestriction(0, a, b, c)
    }

    function jA(a, b, c) {
        c = c === void 0 ? !1 : c;
        iA().addRestriction(1, a, b, c)
    }

    function kA() {
        var a = $l();
        return iA().getRestrictions(1, a)
    }
    var lA = function() {
            this.container = {};
            this.C = {}
        },
        mA = function(a, b) {
            var c = a.container[b];
            c || (c = {
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.container[b] = c);
            return c
        };
    lA.prototype.addRestriction = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        if (!d || !this.C[b]) {
            var e = mA(this, b);
            a === 0 ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : a === 1 && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    lA.prototype.getRestrictions = function(a, b) {
        var c = mA(this, b);
        if (a === 0) {
            var d, e;
            return [].concat(ta((c == null ? void 0 : (d = c._entity) == null ? void 0 : d.internal) || []), ta((c == null ? void 0 : (e = c._entity) == null ? void 0 : e.external) || []))
        }
        if (a === 1) {
            var f, g;
            return [].concat(ta((c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) || []), ta((c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) || []))
        }
        return []
    };
    lA.prototype.getExternalRestrictions = function(a, b) {
        var c = mA(this, b),
            d, e;
        return a === 0 ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) || [] : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) || []
    };
    lA.prototype.removeExternalRestrictions = function(a) {
        var b = mA(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.C[a] = !0
    };

    function iA() {
        return qo("r", function() {
            return new lA
        })
    };
    var nA = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        oA = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        pA = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        qA = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");

    function rA() {
        var a = Pj("gtm.allowlist") || Pj("gtm.whitelist");
        a && O(9);
        sj && (a = ["google", "gtagfl", "lcl", "zone"], I(45) && a.push("cmpPartners"));
        nA.test(z.location && z.location.hostname) && (sj ? O(116) : (O(117), sA && (a = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
        var b = a && ub(nb(a), oA),
            c = Pj("gtm.blocklist") || Pj("gtm.blacklist");
        c || (c = Pj("tagTypeBlacklist")) && O(3);
        c ? O(8) : c = [];
        nA.test(z.location && z.location.hostname) && (c = nb(c), c.push("nonGooglePixels", "nonGoogleScripts",
            "sandboxedScripts"));
        nb(c).indexOf("google") >= 0 && O(2);
        var d = c && ub(nb(c), pA),
            e = {};
        return function(f) {
            var g = f && f[Se.wa];
            if (!g || typeof g !== "string") return !0;
            g = g.replace(/^_*/, "");
            if (e[g] !== void 0) return e[g];
            var k = Cj[g] || [],
                m = !0;
            if (a) {
                var n;
                if (n = m) a: {
                    if (b.indexOf(g) < 0) {
                        if (I(45) && sj && k.indexOf("cmpPartners") >= 0) {
                            n = !0;
                            break a
                        }
                        if (k && k.length > 0)
                            for (var p = 0; p < k.length; p++) {
                                if (b.indexOf(k[p]) < 0) {
                                    O(11);
                                    n = !1;
                                    break a
                                }
                            } else {
                                n = !1;
                                break a
                            }
                    }
                    n = !0
                }
                m = n
            }
            var q = !1;
            if (c) {
                var r = d.indexOf(g) >= 0;
                if (r) q = r;
                else {
                    var v = gb(d, k || []);
                    v && O(10);
                    q = v
                }
            }
            var u = !m || q;
            !u && (k.indexOf("sandboxedScripts") === -1 ? 0 : I(45) && sj && k.indexOf("cmpPartners") >= 0 ? !tA() : b && b.indexOf("sandboxedScripts") !== -1 ? 0 : gb(d, qA)) && (u = !0);
            return e[g] = u
        }
    }

    function tA() {
        var a = Vf(Sf.C, Yl(), function() {
            return {}
        });
        try {
            return a("inject_cmp_banner"), !0
        } catch (b) {
            return !1
        }
    }
    var sA = !1;
    sA = !0;

    function uA() {
        Pl && hA($l(), function(a) {
            var b = Df(a.entityId),
                c;
            if (Gf(b)) {
                var d = b[Se.wa];
                if (!d) throw Error("Error: No function name given for function call.");
                var e = uf[d];
                c = !!e && !!e.runInSiloedMode
            } else c = !!gA(b[Se.wa], 4);
            return c
        })
    };

    function vA(a, b, c, d, e) {
        if (!wA()) {
            var f = d.siloed ? Vl(a) : a;
            if (!im(f)) {
                km(f, d, e);
                var g = xA(a),
                    k = function() {
                        Ll().container[f] && (Ll().container[f].state = 3);
                        yA()
                    },
                    m = {
                        destinationId: f,
                        endpoint: 0
                    };
                if (Jj()) Cl(m, Ij() + "/" + g, void 0, k);
                else {
                    var n = vb(a, "GTM-"),
                        p = pk(),
                        q = c ? "/gtag/js" : "/gtm.js",
                        r = ok(b, q + g);
                    if (!r) {
                        var v = mj.Qf + q;
                        p && jc && n && (v = jc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                        r = Vu("https://", "http://", v + g)
                    }
                    Cl(m, r, void 0, k)
                }
            }
        }
    }

    function yA() {
        mm() || ib(nm(), function(a, b) {
            zA(a, b.transportUrl, b.context);
            O(92)
        })
    }

    function zA(a, b, c, d) {
        if (!wA()) {
            var e = c.siloed ? Vl(a) : a;
            if (!jm(e))
                if (mm()) Ll().destination[e] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: cm()
                }, Kl({
                    ctid: e,
                    isDestination: !0
                }, d), O(91);
                else {
                    c.siloed && lm({
                        ctid: e,
                        isDestination: !0
                    });
                    Ll().destination[e] = {
                        state: 1,
                        context: c,
                        parent: cm()
                    };
                    Kl({
                        ctid: e,
                        isDestination: !0
                    }, d);
                    var f = {
                        destinationId: e,
                        endpoint: 0
                    };
                    if (Jj()) Cl(f, Ij() + ("/gtd" + xA(a, !0)));
                    else {
                        var g = "/gtag/destination" + xA(a, !0),
                            k = ok(b, g);
                        k || (k = Vu("https://", "http://", mj.Qf + g));
                        Cl(f, k)
                    }
                }
        }
    }

    function xA(a, b) {
        b = b === void 0 ? !1 : b;
        var c = "?id=" + encodeURIComponent(a);
        I(114) && mj.zb === "dataLayer" || (c += "&l=" + mj.zb);
        if (!vb(a, "GTM-") || b) c = I(120) ? c + (Jj() ? "&sc=1" : "&cx=c") : c + "&cx=c";
        c += "&gtm=" + Mq();
        pk() && (c += "&sign=" + mj.Jh);
        var d = Fj.H;
        d === 1 ? c += "&fps=fc" : d === 2 && (c += "&fps=fe");
        I(69) && Hj() && (c += "&tag_exp=" + Hj());
        return c
    }

    function wA() {
        if (Kq()) {
            return !0
        }
        return !1
    };
    var AA = function() {
        this.H = 0;
        this.C = {}
    };
    AA.prototype.addListener = function(a, b, c) {
        var d = ++this.H;
        this.C[a] = this.C[a] || {};
        this.C[a][String(d)] = {
            listener: b,
            Rb: c
        };
        return d
    };
    AA.prototype.removeListener = function(a, b) {
        var c = this.C[a],
            d = String(b);
        if (!c || !c[d]) return !1;
        delete c[d];
        return !0
    };
    var CA = function(a, b) {
        var c = [];
        ib(BA.C[a], function(d, e) {
            c.indexOf(e.listener) < 0 && (e.Rb === void 0 || b.indexOf(e.Rb) >= 0) && c.push(e.listener)
        });
        return c
    };

    function DA(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Yl()
        }
    };
    var FA = function(a, b) {
            this.C = !1;
            this.O = [];
            this.eventData = {
                tags: []
            };
            this.U = !1;
            this.H = this.N = 0;
            EA(this, a, b)
        },
        GA = function(a, b, c, d) {
            if (oj.hasOwnProperty(b) || b === "__zone") return -1;
            var e = {};
            Xc(d) && (e = Yc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.eventData.tags.push(e) - 1
        },
        HA = function(a, b, c, d) {
            var e = a.eventData.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        IA = function(a) {
            if (!a.C) {
                for (var b = a.O, c = 0; c < b.length; c++) b[c]();
                a.C = !0;
                a.O.length = 0
            }
        },
        EA = function(a, b, c) {
            b !== void 0 && a.cf(b);
            c && z.setTimeout(function() {
                    IA(a)
                },
                Number(c))
        };
    FA.prototype.cf = function(a) {
        var b = this,
            c = sb(function() {
                C(function() {
                    a(Yl(), b.eventData)
                })
            });
        this.C ? c() : this.O.push(c)
    };
    var JA = function(a) {
            a.N++;
            return sb(function() {
                a.H++;
                a.U && a.H >= a.N && IA(a)
            })
        },
        KA = function(a) {
            a.U = !0;
            a.H >= a.N && IA(a)
        };
    var LA = {};

    function MA() {
        return z[NA()]
    }

    function NA() {
        return z.GoogleAnalyticsObject || "ga"
    }

    function QA() {
        var a = Yl();
    }

    function RA(a, b) {
        return function() {
            var c = MA(),
                d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload"),
                        k = f.get("hitCallback"),
                        m = g.indexOf("&tid=" + b) < 0;
                    m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                    e(f);
                    m && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f))
                })
            }
        }
    };
    var XA = ["es", "1"],
        YA = {},
        ZA = {};

    function $A(a, b) {
        if (zk) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            YA[a] = [
                ["e", c],
                ["eid", a]
            ];
            Ep(a)
        }
    }

    function aB(a) {
        var b = a.eventId,
            c = a.hd;
        if (!YA[b]) return [];
        var d = [];
        ZA[b] || d.push(XA);
        d.push.apply(d, ta(YA[b]));
        c && (ZA[b] = !0);
        return d
    };
    var bB = {},
        cB = {},
        dB = {};

    function eB(a, b, c, d) {
        zk && I(109) && ((d === void 0 ? 0 : d) ? (dB[b] = dB[b] || 0, ++dB[b]) : c !== void 0 ? (cB[a] = cB[a] || {}, cB[a][b] = Math.round(c)) : (bB[a] = bB[a] || {}, bB[a][b] = (bB[a][b] || 0) + 1))
    }

    function fB(a) {
        var b = a.eventId,
            c = a.hd,
            d = bB[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete bB[b];
        return e.length ? [
            ["md", e.join(".")]
        ] : []
    }

    function gB(a) {
        var b = a.eventId,
            c = a.hd,
            d = cB[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete cB[b];
        return e.length ? [
            ["mtd", e.join(".")]
        ] : []
    }

    function hB() {
        for (var a = [], b = l(Object.keys(dB)), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            a.push("" + d + dB[d])
        }
        return a.length ? [
            ["mec", a.join(".")]
        ] : []
    };
    var iB = {},
        jB = {};

    function kB(a, b, c) {
        if (zk && b) {
            var d = tk(b);
            iB[a] = iB[a] || [];
            iB[a].push(c + d);
            var e = (Gf(b) ? "1" : "2") + d;
            jB[a] = jB[a] || [];
            jB[a].push(e);
            Ep(a)
        }
    }

    function lB(a) {
        var b = a.eventId,
            c = a.hd,
            d = [],
            e = iB[b] || [];
        e.length && d.push(["tr", e.join(".")]);
        var f = jB[b] || [];
        f.length && d.push(["ti", f.join(".")]);
        c && (delete iB[b], delete jB[b]);
        return d
    };

    function mB(a, b, c, d) {
        var e = sf[a],
            f = nB(a, b, c, d);
        if (!f) return null;
        var g = Hf(e[Se.mk], c, []);
        if (g && g.length) {
            var k = g[0];
            f = mB(k.index, {
                onSuccess: f,
                onFailure: k.Bk === 1 ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function nB(a, b, c, d) {
        function e() {
            function w() {
                rn(3);
                var N = qb() - H;
                kB(c.id, f, "7");
                HA(c.Cc, D, "exception", N);
                I(97) && qz(c, f, Ny.M.Oh);
                E || (E = !0, k())
            }
            if (f[Se.Xl]) k();
            else {
                var x = Ff(f, c, []),
                    y = x[Se.ql];
                if (y != null)
                    for (var B = 0; B < y.length; B++)
                        if (!S(y[B])) {
                            k();
                            return
                        }
                var D = GA(c.Cc, String(f[Se.wa]), Number(f[Se.rg]), x[Se.METADATA]),
                    E = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!E) {
                        E = !0;
                        var N = qb() - H;
                        kB(c.id, sf[a], "5");
                        HA(c.Cc, D, "success", N);
                        I(97) && qz(c, f, Ny.M.Qh);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!E) {
                        E = !0;
                        var N = qb() -
                            H;
                        kB(c.id, sf[a], "6");
                        HA(c.Cc, D, "failure", N);
                        I(97) && qz(c, f, Ny.M.Ph);
                        k()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                kB(c.id, f, "1");
                I(97) && pz(c, f);
                var H = qb();
                try {
                    If(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (N) {
                    w(N)
                }
                I(97) && qz(c, f, Ny.M.pk)
            }
        }
        var f = sf[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = Hf(f[Se.qk], c, []);
        if (n && n.length) {
            var p = n[0],
                q = mB(p.index, {
                    onSuccess: g,
                    onFailure: k,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            k = p.Bk ===
                2 ? m : q
        }
        if (f[Se.dk] || f[Se.Zl]) {
            var r = f[Se.dk] ? tf : c.Wn,
                v = g,
                u = k;
            if (!r[a]) {
                var t = oB(a, r, sb(e));
                g = t.onSuccess;
                k = t.onFailure
            }
            return function() {
                r[a](v, u)
            }
        }
        return e
    }

    function oB(a, b, c) {
        var d = [],
            e = [];
        b[a] = pB(d, e, c);
        return {
            onSuccess: function() {
                b[a] = qB;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = rB;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function pB(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function qB(a) {
        a()
    }

    function rB(a, b) {
        b()
    };
    var uB = function(a, b) {
        for (var c = [], d = 0; d < sf.length; d++)
            if (a[d]) {
                var e = sf[d];
                var f = JA(b.Cc);
                try {
                    var g = mB(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var k = e[Se.wa];
                        if (!k) throw Error("Error: No function name given for function call.");
                        var m = uf[k];
                        c.push({
                            bl: d,
                            priorityOverride: (m ? m.priorityOverride || 0 : 0) || gA(e[Se.wa], 1) || 0,
                            execute: g
                        })
                    } else sB(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(tB);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return c.length > 0
    };

    function vB(a, b) {
        if (!BA) return !1;
        var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
            d = CA(a.event, c ? String(c).split(",") : []);
        if (!d.length) return !1;
        for (var e = 0; e < d.length; ++e) {
            var f = JA(b);
            try {
                d[e](a, f)
            } catch (g) {
                f()
            }
        }
        return !0
    }

    function tB(a, b) {
        var c, d = b.priorityOverride,
            e = a.priorityOverride;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (c !== 0) f = c;
        else {
            var g = a.bl,
                k = b.bl;
            f = g > k ? 1 : g < k ? -1 : 0
        }
        return f
    }

    function sB(a, b) {
        if (zk) {
            var c = function(d) {
                var e = b.isBlocked(sf[d]) ? "3" : "4",
                    f = Hf(sf[d][Se.mk], b, []);
                f && f.length && c(f[0].index);
                kB(b.id, sf[d], e);
                var g = Hf(sf[d][Se.qk], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var wB = !1,
        BA;

    function xB() {
        BA || (BA = new AA);
        return BA
    }

    function yB(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (I(97)) {}
        if (d === "gtm.js") {
            if (wB) return !1;
            wB = !0
        }
        var e = !1,
            f = kA(),
            g = Yc(a, null);
        if (!f.every(function(v) {
                return v({
                    originalEventData: g
                })
            })) {
            if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent") return !1;
            e = !0
        }
        $A(b, d);
        var k = a.eventCallback,
            m = a.eventTimeout,
            n = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: zB(g, e),
                Wn: [],
                logMacroError: function() {
                    O(6);
                    rn(0)
                },
                cachedModelValues: AB(),
                Cc: new FA(function() {
                    if (I(97)) {}
                    k && k.apply(k, Array.prototype.slice.call(arguments, 0))
                }, m),
                originalEventData: g
            };
        I(109) && zk && (n.reportMacroDiscrepancy = eB);
        I(97) && mz(n.id);
        var p = Nf(n);
        I(97) && nz(n.id);
        e && (p = BB(p));
        I(97) && lz(b);
        var q = uB(p, n),
            r = vB(a, n.Cc);
        KA(n.Cc);
        d !== "gtm.js" && d !== "gtm.sync" || QA();
        return CB(p, q) || r
    }

    function AB() {
        var a = {};
        a.event = Uj("event", 1);
        a.ecommerce = Uj("ecommerce", 1);
        a.gtm = Uj("gtm");
        a.eventModel = Uj("eventModel");
        return a
    }

    function zB(a, b) {
        var c = rA();
        return function(d) {
            if (c(d)) return !0;
            var e = d && d[Se.wa];
            if (!e || typeof e !== "string") return !0;
            e = e.replace(/^_*/, "");
            var f, g = $l();
            f = iA().getRestrictions(0, g);
            var k = a;
            b && (k = Yc(a, null), k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER);
            for (var m = Cj[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                try {
                    if (!q({
                            entityId: e,
                            securityGroups: m,
                            originalEventData: k
                        })) return !0
                } catch (r) {
                    return !0
                }
            }
            return !1
        }
    }

    function BB(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(sf[c][Se.wa]);
                if (nj[d] || sf[c][Se.am] !== void 0 || gA(d, 2)) b[c] = !0
            }
        return b
    }

    function CB(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && sf[c] && !oj[String(sf[c][Se.wa])]) return !0;
        return !1
    };

    function DB() {
        xB().addListener("gtm.init", function(a, b) {
            Fj.U = !0;
            bn();
            b()
        })
    };
    var EB = !1,
        FB = 0,
        GB = [];

    function HB(a) {
        if (!EB) {
            var b = A.createEventObject,
                c = A.readyState === "complete",
                d = A.readyState === "interactive";
            if (!a || a.type !== "readystatechange" || c || !b && d) {
                EB = !0;
                for (var e = 0; e < GB.length; e++) C(GB[e])
            }
            GB.push = function() {
                for (var f = xa.apply(0, arguments), g = 0; g < f.length; g++) C(f[g]);
                return 0
            }
        }
    }

    function IB() {
        if (!EB && FB < 140) {
            FB++;
            try {
                var a, b;
                (b = (a = A.documentElement).doScroll) == null || b.call(a, "left");
                HB()
            } catch (c) {
                z.setTimeout(IB, 50)
            }
        }
    }

    function JB() {
        EB = !1;
        FB = 0;
        if (A.readyState === "interactive" && !A.createEventObject || A.readyState === "complete") HB();
        else {
            xc(A, "DOMContentLoaded", HB);
            xc(A, "readystatechange", HB);
            if (A.createEventObject && A.documentElement.doScroll) {
                var a = !0;
                try {
                    a = !z.frameElement
                } catch (b) {}
                a && IB()
            }
            xc(z, "load", HB)
        }
    }

    function KB(a) {
        EB ? a() : GB.push(a)
    };
    var LB = 0;
    var MB = {},
        NB = {};

    function OB(a, b) {
        for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                Di: void 0,
                ji: void 0
            }, f++) {
            var g = a[f];
            if (g.indexOf("-") >= 0) {
                if (e.Di = Ho(g, b), e.Di) {
                    var k = Ql ? Ql : Xl();
                    eb(k, function(r) {
                        return function(v) {
                            return r.Di.destinationId === v
                        }
                    }(e)) ? c.push(g) : d.push(g)
                }
            } else {
                var m = MB[g] || [];
                e.ji = {};
                m.forEach(function(r) {
                    return function(v) {
                        r.ji[v] = !0
                    }
                }(e));
                for (var n = Tl(), p = 0; p < n.length; p++)
                    if (e.ji[n[p]]) {
                        c = c.concat(Wl());
                        break
                    }
                var q = NB[g] || [];
                q.length && (c = c.concat(q))
            }
        }
        return {
            xn: c,
            An: d
        }
    }

    function PB(a) {
        ib(MB, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    }

    function QB(a) {
        ib(NB, function(b, c) {
            var d = c.indexOf(a);
            d >= 0 && c.splice(d, 1)
        })
    };
    var RB = !1,
        SB = !1;

    function TB(a, b) {
        var c = {},
            d = (c.event = a, c);
        b && (d.eventModel = Yc(b, null), b[L.m.Cd] && (d.eventCallback = b[L.m.Cd]), b[L.m.Ae] && (d.eventTimeout = b[L.m.Ae]));
        return d
    }

    function UB(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: uo()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }

    function VB(a, b) {
        var c = a && a[L.m.yc];
        c === void 0 && (c = Pj(L.m.yc, 2), c === void 0 && (c = "default"));
        if (bb(c) || Array.isArray(c)) {
            var d;
            d = b.isGtmEvent ? bb(c) ? [c] : c : c.toString().replace(/\s+/g, "").split(",");
            var e = OB(d, b.isGtmEvent),
                f = e.xn,
                g = e.An;
            if (g.length)
                for (var k = WB(a), m = 0; m < g.length; m++) {
                    var n = Ho(g[m], b.isGtmEvent);
                    if (n) {
                        var p = n.destinationId,
                            q;
                        if (!(q = vb(p, "siloed_"))) {
                            var r = n.destinationId,
                                v = Ll().destination[r];
                            q = !!v && v.state === 0
                        }
                        q || zA(p, k, {
                            source: 3,
                            fromContainerExecution: b.fromContainerExecution
                        })
                    }
                }
            return Io(f,
                b.isGtmEvent)
        }
    }
    var XB = void 0,
        YB = void 0;

    function ZB(a, b, c) {
        var d = Yc(a, null);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return b[f] !== void 0
        }) && O(136);
        var e = Yc(b, null);
        Yc(c, e);
        xv(tv(Tl()[0], e), a.eventId, d)
    }

    function WB(a) {
        for (var b = l([L.m.Uc, L.m.Jb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || Mp.C[d];
            if (e) return e
        }
    }
    var $B = {
            config: function(a, b) {
                var c = UB(a, b);
                if (!(a.length < 2) && bb(a[1])) {
                    var d = {};
                    if (a.length > 2) {
                        if (a[2] !== void 0 && !Xc(a[2]) || a.length > 3) return;
                        d = a[2]
                    }
                    var e = Ho(a[1], b.isGtmEvent);
                    if (e) {
                        var f, g, k;
                        a: {
                            if (!Ol.We) {
                                var m = bm(cm());
                                if (om(m)) {
                                    var n = m.parent,
                                        p = n.isDestination;
                                    k = {
                                        En: bm(n),
                                        wn: p
                                    };
                                    break a
                                }
                            }
                            k = void 0
                        }
                        var q = k;
                        q && (f = q.En, g = q.wn);
                        $A(c.eventId, "gtag.config");
                        var r = e.destinationId,
                            v = e.id !== r;
                        if (v ? Wl().indexOf(r) === -1 : Tl().indexOf(r) === -1) {
                            if (!b.inheritParentConfig && !d[L.m.Yb]) {
                                var u = WB(d);
                                if (v) zA(r, u, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                                    var t = d;
                                    XB ? ZB(b, t, XB) : YB || (YB = Yc(t, null))
                                } else vA(r, u, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (f && (O(128), g && O(130), b.inheritParentConfig)) {
                                var w;
                                var x = d;
                                YB ? (ZB(b, YB, x), w = !1) : (!x[L.m.Ac] && qj && XB || (XB = Yc(x, null)), w = !0);
                                w && f.containers && f.containers.join(",");
                                return
                            }
                            Ak && (LB === 1 && (Vm.mcc = !1), LB = 2);
                            if (qj && !v && !d[L.m.Ac]) {
                                var y = SB;
                                SB = !0;
                                if (y) return
                            }
                            RB || O(43);
                            if (!b.noTargetGroup)
                                if (v) {
                                    QB(e.id);
                                    var B = e.id,
                                        D = d[L.m.Ee] || "default";
                                    D = String(D).split(",");
                                    for (var E = 0; E < D.length; E++) {
                                        var H = NB[D[E]] || [];
                                        NB[D[E]] = H;
                                        H.indexOf(B) < 0 && H.push(B)
                                    }
                                } else {
                                    PB(e.id);
                                    var N = e.id,
                                        M = d[L.m.Ee] || "default";
                                    M = M.toString().split(",");
                                    for (var U = 0; U < M.length; U++) {
                                        var F = MB[M[U]] || [];
                                        MB[M[U]] = F;
                                        F.indexOf(N) < 0 && F.push(N)
                                    }
                                }
                            delete d[L.m.Ee];
                            var R = b.eventMetadata || {};
                            R.hasOwnProperty("is_external_event") || (R.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = R;
                            delete d[L.m.Cd];
                            for (var ba = v ? [e.id] : Wl(), ha = 0; ha < ba.length; ha++) {
                                var Y =
                                    d,
                                    Q = ba[ha],
                                    ja = Yc(b, null),
                                    la = Ho(Q, ja.isGtmEvent);
                                la && Mp.push("config", [Y], la, ja)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (a.length === 3) {
                    O(39);
                    var c = UB(a, b),
                        d = a[1],
                        e;
                    if (I(129)) {
                        var f = {},
                            g = Wu(a[2]),
                            k;
                        for (k in g)
                            if (g.hasOwnProperty(k)) {
                                var m = g[k];
                                f[k] = k === L.m.ce ? Array.isArray(m) ? NaN : Number(m) : k === L.m.yb ? (Array.isArray(m) ? m : [m]).map(Xu) : Yu(m)
                            }
                        e = f
                    } else e = a[2];
                    var n = e;
                    b.fromContainerExecution || (n[L.m.T] && O(139), n[L.m.ya] && O(140));
                    d === "default" ? bo(n) : d === "update" ? eo(n, c) : d === "declare" && b.fromContainerExecution && ao(n)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(a.length < 2) && bb(c)) {
                    var d = void 0;
                    if (a.length > 2) {
                        if (!Xc(a[2]) && a[2] !== void 0 || a.length > 3) return;
                        d = a[2]
                    }
                    var e = TB(c, d),
                        f = UB(a, b),
                        g = f.eventId,
                        k = f.priorityId;
                    e["gtm.uniqueEventId"] = g;
                    k && (e["gtm.priorityId"] = k);
                    if (c === "optimize.callback") return e.eventModel = e.eventModel || {}, e;
                    var m = VB(d, b);
                    if (m) {
                        $A(g, c);
                        for (var n = m.map(function(x) {
                                return x.id
                            }), p = m.map(function(x) {
                                return x.destinationId
                            }), q = l(n), r = q.next(); !r.done; r = q.next()) {
                            var v = r.value,
                                u = Yc(b, null),
                                t = Yc(d, null);
                            delete t[L.m.Cd];
                            var w = u.eventMetadata || {};
                            w.hasOwnProperty("is_external_event") || (w.is_external_event = !u.fromContainerExecution);
                            w.send_to_targets = n.slice();
                            w.send_to_destinations = p.slice();
                            u.eventMetadata = w;
                            Np(c, t, v, u);
                            Ak && w.source_canonical_id === void 0 && LB === 0 && (Ym("mcc", "1"), LB = 1)
                        }
                        e.eventModel = e.eventModel || {};
                        n.length > 0 ? e.eventModel[L.m.yc] = n.join(",") : delete e.eventModel[L.m.yc];
                        RB || O(43);
                        b.noGtmEvent === void 0 && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        e.eventModel[L.m.xc] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : e
                    }
                }
            },
            get: function(a, b) {
                O(53);
                if (a.length === 4 && bb(a[1]) && bb(a[2]) && ab(a[3])) {
                    var c = Ho(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        RB || O(43);
                        var f = WB();
                        if (eb(Wl(), function(k) {
                                return c.destinationId === k
                            })) {
                            UB(a, b);
                            var g = {};
                            Yc((g[L.m.Gb] = d, g[L.m.Wb] = e, g), null);
                            Op(d, function(k) {
                                C(function() {
                                    e(k)
                                })
                            }, c.id, b)
                        } else zA(c.destinationId, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        })
                    }
                }
            },
            js: function(a, b) {
                if (a.length === 2 && a[1].getTime) {
                    RB = !0;
                    var c = UB(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (a.length === 3 && bb(a[1]) && ab(a[2])) {
                    if (Tf(a[1], a[2]), O(74), a[1] === "all") {
                        O(75);
                        var b = !1;
                        try {
                            b = a[2](Yl(), "unknown", {})
                        } catch (c) {}
                        b || O(76)
                    }
                } else O(73)
            },
            set: function(a, b) {
                var c = void 0;
                a.length === 2 && Xc(a[1]) ? c = Yc(a[1], null) : a.length === 3 && bb(a[1]) && (c = {}, Xc(a[2]) || Array.isArray(a[2]) ? c[a[1]] = Yc(a[2], null) : c[a[1]] = a[2]);
                if (c) {
                    var d = UB(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    Yc(c, null);
                    var g = Yc(c, null);
                    Mp.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        aC = {
            policy: !0
        };
    var cC = function(a) {
        if (bC(a)) return a;
        this.value = a
    };
    cC.prototype.getUntrustedMessageValue = function() {
        return this.value
    };
    var bC = function(a) {
        return !a || Vc(a) !== "object" || Xc(a) ? !1 : "getUntrustedMessageValue" in a
    };
    cC.prototype.getUntrustedMessageValue = cC.prototype.getUntrustedMessageValue;
    var dC = !1,
        eC = [];

    function fC() {
        if (!dC) {
            dC = !0;
            for (var a = 0; a < eC.length; a++) C(eC[a])
        }
    }

    function gC(a) {
        dC ? C(a) : eC.push(a)
    };
    var hC = 0,
        iC = {},
        jC = [],
        kC = [],
        lC = !1,
        mC = !1;

    function nC(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }

    function oC(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return pC(a)
    }

    function qC(a, b) {
        if (!cb(b) || b < 0) b = 0;
        var c = po[mj.zb],
            d = 0,
            e = !1,
            f = void 0;
        f = z.setTimeout(function() {
            e || (e = !0, a());
            f = void 0
        }, b);
        return function() {
            var g = c ? c.subscribers : 1;
            ++d === g && (f && (z.clearTimeout(f), f = void 0), e || (a(), e = !0))
        }
    }

    function rC(a, b) {
        var c = a._clear || b.overwriteModelFields;
        ib(a, function(e, f) {
            e !== "_clear" && (c && Sj(e), Sj(e, f))
        });
        zj || (zj = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        typeof d !== "number" && (d = uo(), a["gtm.uniqueEventId"] = d, Sj("gtm.uniqueEventId", d));
        return yB(a)
    }

    function sC(a) {
        if (a == null || typeof a !== "object") return !1;
        if (a.event) return !0;
        if (jb(a)) {
            var b = a[0];
            if (b === "config" || b === "event" || b === "js" || b === "get") return !0
        }
        return !1
    }

    function tC() {
        var a;
        if (kC.length) a = kC.shift();
        else if (jC.length) a = jC.shift();
        else return;
        var b;
        var c = a;
        if (lC || !sC(c.message)) b = c;
        else {
            lC = !0;
            var d = c.message["gtm.uniqueEventId"],
                e, f;
            typeof d === "number" ? (e = d - 2, f = d - 1) : (e = uo(), f = uo(), c.message["gtm.uniqueEventId"] = uo());
            var g = {},
                k = {
                    message: (g.event = "gtm.init_consent", g["gtm.uniqueEventId"] = e, g),
                    messageContext: {
                        eventId: e
                    }
                },
                m = {},
                n = {
                    message: (m.event = "gtm.init", m["gtm.uniqueEventId"] = f, m),
                    messageContext: {
                        eventId: f
                    }
                };
            jC.unshift(n, c);
            b = k
        }
        return b
    }

    function uC() {
        for (var a = !1, b; !mC && (b = tC());) {
            mC = !0;
            delete Mj.eventModel;
            Oj();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (d == null) mC = !1;
            else {
                e.fromContainerExecution && Tj();
                try {
                    if (ab(d)) try {
                        d.call(Qj)
                    } catch (u) {} else if (Array.isArray(d)) {
                        if (bb(d[0])) {
                            var f = d[0].split("."),
                                g = f.pop(),
                                k = d.slice(1),
                                m = Pj(f.join("."), 2);
                            if (m != null) try {
                                m[g].apply(m, k)
                            } catch (u) {}
                        }
                    } else {
                        var n = void 0;
                        if (jb(d)) a: {
                            if (d.length && bb(d[0])) {
                                var p = $B[d[0]];
                                if (p && (!e.fromContainerExecution || !aC[d[0]])) {
                                    n = p(d, e);
                                    break a
                                }
                            }
                            n = void 0
                        }
                        else n =
                            d;
                        n && (a = rC(n, e) || a)
                    }
                } finally {
                    e.fromContainerExecution && Oj(!0);
                    var q = d["gtm.uniqueEventId"];
                    if (typeof q === "number") {
                        for (var r = iC[String(q)] || [], v = 0; v < r.length; v++) kC.push(vC(r[v]));
                        r.length && kC.sort(nC);
                        delete iC[String(q)];
                        q > hC && (hC = q)
                    }
                    mC = !1
                }
            }
        }
        return !a
    }

    function wC() {
        if (I(97)) {
            var a = !Fj.N;
        }
        var c = uC();
        if (I(97)) {}
        try {
            var e = Yl(),
                f = z[mj.zb].hide;
            if (f && f[e] !== void 0 && f.end) {
                f[e] = !1;
                var g = !0,
                    k;
                for (k in f)
                    if (f.hasOwnProperty(k) && f[k] === !0) {
                        g = !1;
                        break
                    }
                g && (f.end(), f.end = null)
            }
        } catch (m) {}
        return c
    }

    function Av(a) {
        if (hC < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            iC[b] = iC[b] || [];
            iC[b].push(a)
        } else kC.push(vC(a)), kC.sort(nC), C(function() {
            mC || uC()
        })
    }

    function vC(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }

    function xC() {
        function a(f) {
            var g = {};
            if (bC(f)) {
                var k = f;
                f = bC(k) ? k.getUntrustedMessageValue() : void 0;
                g.fromContainerExecution = !0
            }
            return {
                message: f,
                messageContext: g
            }
        }
        var b = kc(mj.zb, []),
            c = to();
        c.pruned === !0 && O(83);
        iC = yv().get();
        zv();
        KB(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var f = {};
                b.push((f.event = "gtm.dom", f))
            }
        });
        gC(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var f = {};
                b.push((f.event = "gtm.load", f))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var f;
            if (po.SANDBOXED_JS_SEMAPHORE > 0) {
                f = [];
                for (var g = 0; g < arguments.length; g++) f[g] = new cC(arguments[g])
            } else f = [].slice.call(arguments, 0);
            var k = f.map(function(q) {
                return a(q)
            });
            jC.push.apply(jC, k);
            var m = d.apply(b, f),
                n = Math.max(100, Number("1000") || 300);
            if (this.length > n)
                for (O(4), c.pruned = !0; this.length > n;) this.shift();
            var p = typeof m !== "boolean" || m;
            return uC() && p
        };
        var e = b.slice(0).map(function(f) {
            return a(f)
        });
        jC.push.apply(jC, e);
        if (!Fj.N) {
            if (I(97)) {}
            C(wC)
        }
    }
    var pC = function(a) {
        return z[mj.zb].push(a)
    };

    function yC() {
        var a, b = ik(z.location.href);
        (a = b.hostname + b.pathname) && Ym("dl", encodeURIComponent(a));
        var c;
        var d = Wf.ctid;
        if (d) {
            var e = Ol.We ? 1 : 0,
                f, g = bm(cm());
            f = g && g.context;
            c = d + ";" + Wf.canonicalContainerId + ";" + (f && f.fromContainerExecution ? 1 : 0) + ";" + (f && f.source || 0) + ";" + e
        } else c = void 0;
        var k = c;
        k && Ym("tdp", k);
        var m = el(!0);
        m !== void 0 && Ym("frm", String(m))
    };

    function zC() {
        I(53) && Ak && z.addEventListener("securitypolicyviolation", function(a) {
            if (a.disposition === "enforce") {
                var b = xl(a.effectiveDirective);
                if (b) {
                    var c;
                    var d = vl(b, a.blockedURI);
                    c = d ? tl[b][d] : void 0;
                    var e;
                    if (e = c) a: {
                        try {
                            var f = new URL(a.blockedURI),
                                g = f.pathname.indexOf(";");
                            e = g >= 0 ? f.origin + f.pathname.substring(0, g) : f.origin + f.pathname;
                            break a
                        } catch (q) {}
                        e = void 0
                    }
                    if (e) {
                        for (var k = l(c), m = k.next(); !m.done; m = k.next()) {
                            var n = m.value;
                            if (!n.Uk) {
                                n.Uk = !0;
                                var p = String(n.endpoint);
                                cn.hasOwnProperty(p) || (cn[p] = !0, Ym("csp", Object.keys(cn).join("~")))
                            }
                        }
                        wl(b, a.blockedURI)
                    }
                }
            }
        })
    };

    function AC() {
        var a;
        var b = am();
        if (b)
            if (b.canonicalContainerId) a = b.canonicalContainerId;
            else {
                var c, d = b.scriptContainerId || ((c = b.destinations) == null ? void 0 : c[0]);
                a = d ? "_" + d : void 0
            }
        else a = void 0;
        var e = a;
        e && Ym("pcid", e)
    };
    var BC = /^(https?:)?\/\//;

    function CC() {
        var a;
        var b = bm(cm());
        if (b) {
            for (; b.parent;) {
                var c = bm(b.parent);
                if (!c) break;
                b = c
            }
            a = b
        } else a = void 0;
        var d = a;
        if (d) {
            var e;
            a: {
                var f, g = (f = d.scriptElement) == null ? void 0 : f.src;
                if (g) {
                    var k;
                    try {
                        var m;
                        k = (m = Lc()) == null ? void 0 : m.getEntriesByType("resource")
                    } catch (u) {}
                    if (k) {
                        for (var n = -1, p = l(k), q = p.next(); !q.done; q = p.next()) {
                            var r = q.value;
                            if (r.initiatorType === "script" && (n += 1, r.name.replace(BC, "") === g.replace(BC, ""))) {
                                e = n;
                                break a
                            }
                        }
                        O(146)
                    } else O(145)
                }
                e = void 0
            }
            var v = e;
            v !== void 0 && (d.canonicalContainerId &&
                Ym("rtg", String(d.canonicalContainerId)), Ym("slo", String(v)), Ym("hlo", d.htmlLoadOrder || "-1"), Ym("lst", String(d.loadScriptType || "0")))
        } else O(144)
    };

    function XC() {};
    var YC = function() {};
    YC.prototype.toString = function() {
        return "undefined"
    };
    var ZC = new YC;

    function fD(a, b) {
        function c(g) {
            var k = ik(g),
                m = ck(k, "protocol"),
                n = ck(k, "host", !0),
                p = ck(k, "port"),
                q = ck(k, "path").toLowerCase().replace(/\/$/, "");
            if (m === void 0 || m === "http" && p === "80" || m === "https" && p === "443") m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function gD(a) {
        return hD(a) ? 1 : 0
    }

    function hD(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = Yc(a, {});
                Yc({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (gD(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return Eg(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < zg.length; g++) {
                            var k = zg[g];
                            if (b[k] != null) {
                                f = b[k](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return Ag(b, c);
            case "_eq":
                return Fg(b, c);
            case "_ge":
                return Gg(b, c);
            case "_gt":
                return Ig(b, c);
            case "_lc":
                return Bg(b, c);
            case "_le":
                return Hg(b,
                    c);
            case "_lt":
                return Jg(b, c);
            case "_re":
                return Dg(b, c, a.ignore_case);
            case "_sw":
                return Kg(b, c);
            case "_um":
                return fD(b, c)
        }
        return !1
    };

    function iD() {
        var a;
        a = a === void 0 ? "" : a;
        var b, c;
        return ((b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)) ? String(data.blob[1]) : a
    };

    function jD() {
        var a = [
            ["cv", I(132) ? iD() : "2"],
            ["rv", mj.Ih],
            ["tc", sf.filter(function(b) {
                return b
            }).length]
        ];
        mj.Hh && a.push(["x", mj.Hh]);
        Hj() && a.push(["tag_exp", Hj()]);
        return a
    };
    var kD = {},
        lD = {};

    function mD(a) {
        var b = a.eventId,
            c = a.hd,
            d = [],
            e = kD[b] || [];
        e.length && d.push(["hf", e.join(".")]);
        var f = lD[b] || [];
        f.length && d.push(["ht", f.join(".")]);
        c && (delete kD[b], delete lD[b]);
        return d
    };

    function nD() {
        return !1
    }

    function oD() {
        var a = {};
        return function(b, c, d) {}
    };

    function pD() {
        var a = qD;
        return function(b, c, d) {
            var e = d && d.event;
            rD(c);
            var f = oh(b) ? void 0 : 1,
                g = new Na;
            ib(c, function(r, v) {
                var u = nd(v, void 0, f);
                u === void 0 && v !== void 0 && O(44);
                g.set(r, u)
            });
            a.C.C.H = Lf();
            var k = {
                vk: $f(b),
                eventId: e == null ? void 0 : e.id,
                priorityId: e !== void 0 ? e.priorityId : void 0,
                cf: e !== void 0 ? function(r) {
                    e.Cc.cf(r)
                } : void 0,
                vb: function() {
                    return b
                },
                log: function() {},
                Km: {
                    index: d == null ? void 0 : d.index,
                    type: d == null ? void 0 : d.type,
                    name: d == null ? void 0 : d.name
                },
                On: !!gA(b, 3),
                originalEventData: e == null ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (k.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (nD()) {
                var m = oD(),
                    n, p;
                k.cb = {
                    Mi: [],
                    df: {},
                    Nb: function(r, v, u) {
                        v === 1 && (n = r);
                        v === 7 && (p = u);
                        m(r, v, u)
                    },
                    Gg: Gh()
                };
                k.log = function(r) {
                    var v = xa.apply(1, arguments);
                    n && m(n, 4, {
                        level: r,
                        source: p,
                        message: v
                    })
                }
            }
            var q =
                Je(a, k, [b, g]);
            a.C.C.H = void 0;
            q instanceof za && (q.type === "return" ? q = q.data : q = void 0);
            return md(q, void 0, f)
        }
    }

    function rD(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        ab(b) && (a.gtmOnSuccess = function() {
            C(b)
        });
        ab(c) && (a.gtmOnFailure = function() {
            C(c)
        })
    };

    function sD(a) {}
    sD.K = "internal.addAdsClickIds";

    function tD(a, b) {
        var c = this;
    }
    tD.publicName = "addConsentListener";
    var uD = !1;

    function vD(a) {
        for (var b = 0; b < a.length; ++b)
            if (uD) try {
                a[b]()
            } catch (c) {
                O(77)
            } else a[b]()
    }

    function wD(a, b, c) {
        var d = this,
            e;
        if (!ah(a) || !Xg(b) || !bh(c)) throw J(this.getName(), ["string", "function", "string|undefined"], arguments);
        vD([function() {
            K(d, "listen_data_layer", a)
        }]);
        e = xB().addListener(a, md(b), c === null ? void 0 : c);
        return e
    }
    wD.K = "internal.addDataLayerEventListener";

    function xD(a, b, c) {}
    xD.publicName = "addDocumentEventListener";

    function yD(a, b, c, d) {}
    yD.publicName = "addElementEventListener";

    function zD(a) {
        return a.J.C
    };

    function AD(a) {}
    AD.publicName = "addEventCallback";
    var BD = function(a) {
            return typeof a === "string" ? a : String(uo())
        },
        ED = function(a, b) {
            CD(a, "init", !1) || (DD(a, "init", !0), b())
        },
        CD = function(a, b, c) {
            var d = FD(a);
            return rb(d, b, c)
        },
        GD = function(a, b, c, d) {
            var e = FD(a),
                f = rb(e, b, d);
            e[b] = c(f)
        },
        DD = function(a, b, c) {
            FD(a)[b] = c
        },
        FD = function(a) {
            var b = qo("autoEventsSettings", function() {
                return {}
            });
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        HD = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Ic(a, "className"),
                "gtm.elementId": a.for || zc(a, "id") || "",
                "gtm.elementTarget": a.formTarget ||
                    Ic(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Ic(a, "href") || a.src || a.code || a.codebase || "";
            return d
        };
    var JD = function(a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
                var g = a.elements[e];
                if (ID(g)) {
                    if (g.dataset[c] === d) return f;
                    f++
                }
            }
            return 0
        },
        KD = function(a) {
            if (a.form) {
                var b;
                return ((b = a.form) == null ? 0 : b.tagName) ? a.form : A.getElementById(a.form)
            }
            return Cc(a, ["form"], 100)
        },
        ID = function(a) {
            var b = a.tagName.toLowerCase();
            return LD.indexOf(b) < 0 || b === "input" && MD.indexOf(a.type.toLowerCase()) >= 0 ? !1 : !0
        },
        LD = ["input", "select", "textarea"],
        MD = ["button", "hidden", "image", "reset",
            "submit"
        ];

    function QD(a) {}
    QD.K = "internal.addFormAbandonmentListener";

    function RD(a, b, c, d) {}
    RD.K = "internal.addFormData";
    var SD = {},
        TD = [],
        UD = {},
        VD = 0,
        WD = 0;
    var YD = function() {
            xc(A, "change", function(a) {
                for (var b = 0; b < TD.length; b++) TD[b](a)
            });
            xc(z, "pagehide", function() {
                XD()
            })
        },
        XD = function() {
            ib(UD, function(a, b) {
                var c = SD[a];
                c && ib(b, function(d, e) {
                    ZD(e, c)
                })
            })
        },
        bE = function(a, b) {
            var c = "" + a;
            if (SD[c]) SD[c].push(b);
            else {
                var d = [b];
                SD[c] = d;
                var e = UD[c];
                e || (e = {}, UD[c] = e);
                TD.push(function(f) {
                    var g = f.target;
                    if (g) {
                        var k = KD(g);
                        if (k) {
                            var m = $D(k, "gtmFormInteractId", function() {
                                    return VD++
                                }),
                                n = $D(g, "gtmFormInteractFieldId", function() {
                                    return WD++
                                }),
                                p = e[m];
                            p ? (p.mc && (z.clearTimeout(p.mc),
                                p.Ob.dataset.gtmFormInteractFieldId !== n && ZD(p, d)), p.Ob = g, aE(p, d, a)) : (e[m] = {
                                form: k,
                                Ob: g,
                                sequenceNumber: 0,
                                mc: null
                            }, aE(e[m], d, a))
                        }
                    }
                })
            }
        },
        ZD = function(a, b) {
            var c = a.form,
                d = a.Ob,
                e = HD(c, "gtm.formInteract"),
                f = c.action;
            f && f.tagName && (f = c.cloneNode(!1).action);
            e["gtm.elementUrl"] = f;
            e["gtm.interactedFormName"] = c.getAttribute("name");
            e["gtm.interactedFormLength"] = c.length;
            e["gtm.interactedFormField"] = d;
            e["gtm.interactedFormFieldPosition"] = JD(c, d, "gtmFormInteractFieldId");
            e["gtm.interactSequenceNumber"] = a.sequenceNumber;
            e["gtm.interactedFormFieldId"] = d.id;
            e["gtm.interactedFormFieldName"] = d.getAttribute("name");
            e["gtm.interactedFormFieldType"] = d.getAttribute("type");
            for (var g = 0; g < b.length; g++) b[g](e);
            a.sequenceNumber++;
            a.mc = null
        },
        aE = function(a, b, c) {
            c ? a.mc = z.setTimeout(function() {
                ZD(a, b)
            }, c) : ZD(a, b)
        },
        $D = function(a, b, c) {
            var d = a.dataset[b];
            if (d) return d;
            d = String(c());
            return a.dataset[b] = d
        };

    function cE(a, b) {
        if (!Xg(a) || !Vg(b)) throw J(this.getName(), ["function", "Object|undefined"], arguments);
        var c = md(b) || {},
            d = Number(c.interval);
        if (!d || d < 0) d = 0;
        var e = md(a),
            f;
        CD("pix.fil", "init") ? f = CD("pix.fil", "reg") : (YD(), f = bE, DD("pix.fil", "reg", bE), DD("pix.fil", "init", !0));
        f(d, e);
    }
    cE.K = "internal.addFormInteractionListener";
    var eE = function(a, b, c) {
            var d = HD(a, "gtm.formSubmit");
            d["gtm.interactedFormName"] = a.getAttribute("name");
            d["gtm.interactedFormLength"] = a.length;
            d["gtm.willOpenInCurrentWindow"] = !b && dE(a);
            c && c.value && (d["gtm.formSubmitButtonText"] = c.value);
            var e = a.action;
            e && e.tagName && (e = a.cloneNode(!1).action);
            d["gtm.elementUrl"] = e;
            d["gtm.formCanceled"] = b;
            return d
        },
        fE = function(a, b) {
            var c = CD("pix.fsl", a ? "nv.mwt" : "mwt", 0);
            z.setTimeout(b, c)
        },
        gE = function(a, b, c, d, e) {
            var f = CD("pix.fsl", c ? "nv.mwt" : "mwt", 0),
                g = CD("pix.fsl",
                    c ? "runIfCanceled" : "runIfUncanceled", []);
            if (!g.length) return !0;
            var k = eE(a, c, e);
            O(121);
            if (k["gtm.elementUrl"] === "https://www.facebook.com/tr/") return O(122), !0;
            if (d && f) {
                for (var m = Ab(b, g.length), n = 0; n < g.length; ++n) g[n](k, m);
                return m.done
            }
            for (var p = 0; p < g.length; ++p) g[p](k, function() {});
            return !0
        },
        hE = function() {
            var a = [],
                b = function(c) {
                    return eb(a, function(d) {
                        return d.form === c
                    })
                };
            return {
                store: function(c, d) {
                    var e = b(c);
                    e ? e.button = d : a.push({
                        form: c,
                        button: d
                    })
                },
                get: function(c) {
                    var d = b(c);
                    return d ? d.button : null
                }
            }
        },
        dE = function(a) {
            var b = Ic(a, "target");
            return b && b !== "_self" && b !== "_parent" && b !== "_top" ? !1 : !0
        },
        iE = function() {
            var a = hE(),
                b = HTMLFormElement.prototype.submit;
            xc(A, "click", function(c) {
                var d = c.target;
                if (d) {
                    var e = Cc(d, ["button", "input"], 100);
                    if (e && (e.type === "submit" || e.type === "image") && e.name && zc(e, "value")) {
                        var f = KD(e);
                        f && a.store(f, e)
                    }
                }
            }, !1);
            xc(A, "submit", function(c) {
                var d = c.target;
                if (!d) return c.returnValue;
                var e = c.defaultPrevented || c.returnValue === !1,
                    f = dE(d) && !e,
                    g = a.get(d),
                    k = !0,
                    m = function() {
                        if (k) {
                            var n,
                                p = {};
                            g && (n = A.createElement("input"), n.type = "hidden", n.name = g.name, n.value = g.value, d.appendChild(n), g.getAttribute("formaction") && (p.action = d.getAttribute("action"), Xb(d, g.getAttribute("formaction"))), g.hasAttribute("formenctype") && (p.enctype = d.getAttribute("enctype"), d.setAttribute("enctype", g.getAttribute("formenctype"))), g.hasAttribute("formmethod") && (p.method = d.getAttribute("method"), d.setAttribute("method", g.getAttribute("formmethod"))), g.hasAttribute("formvalidate") && (p.validate = d.getAttribute("validate"),
                                d.setAttribute("validate", g.getAttribute("formvalidate"))), g.hasAttribute("formtarget") && (p.target = d.getAttribute("target"), d.setAttribute("target", g.getAttribute("formtarget"))));
                            b.call(d);
                            n && (d.removeChild(n), p.hasOwnProperty("action") && Xb(d, p.action), p.hasOwnProperty("enctype") && d.setAttribute("enctype", p.enctype), p.hasOwnProperty("method") && d.setAttribute("method", p.method), p.hasOwnProperty("validate") && d.setAttribute("validate", p.validate), p.hasOwnProperty("target") && d.setAttribute("target",
                                p.target))
                        }
                    };
                if (gE(d, m, e, f, g)) return k = !1, c.returnValue;
                fE(e, m);
                e || (c.preventDefault && c.preventDefault(), c.returnValue = !1);
                return !1
            }, !1);
            HTMLFormElement.prototype.submit = function() {
                var c = this,
                    d = !0,
                    e = function() {
                        d && b.call(c)
                    };
                gE(c, e, !1, dE(c)) ? (b.call(c), d = !1) : fE(!1, e)
            }
        };

    function jE(a, b) {
        if (!Xg(a) || !Vg(b)) throw J(this.getName(), ["function", "Object|undefined"], arguments);
        var c = md(b, this.J, 1) || {},
            d = c.waitForCallbacks,
            e = c.waitForCallbacksTimeout,
            f = c.checkValidation;
        e = e && e > 0 ? e : 2E3;
        var g = md(a, this.J, 1);
        if (d) {
            var k = function(n) {
                return Math.max(e, n)
            };
            GD("pix.fsl", "mwt", k, 0);
            f || GD("pix.fsl", "nv.mwt", k, 0)
        }
        var m = function(n) {
            n.push(g);
            return n
        };
        GD("pix.fsl", "runIfUncanceled", m, []);
        f || GD("pix.fsl", "runIfCanceled",
            m, []);
        CD("pix.fsl", "init") || (iE(), DD("pix.fsl", "init", !0));
    }
    jE.K = "internal.addFormSubmitListener";

    function oE(a) {}
    oE.K = "internal.addGaSendListener";

    function pE(a) {
        if (!a) return {};
        var b = a.Km;
        return DA(b.type, b.index, b.name)
    }

    function qE(a) {
        return a ? {
            originatingEntity: pE(a)
        } : {}
    };

    function yE(a) {
        var b = po.zones;
        return b ? b.getIsAllowedFn(Tl(), a) : function() {
            return !0
        }
    }

    function zE() {
        var a = po.zones;
        a && a.unregisterChild(Tl())
    }

    function AE() {
        jA($l(), function(a) {
            var b = a.originalEventData["gtm.uniqueEventId"],
                c = po.zones;
            return c ? c.isActive(Tl(), b) : !0
        });
        hA($l(), function(a) {
            var b, c;
            b = a.entityId;
            c = a.securityGroups;
            return yE(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c)
        })
    };
    var BE = function(a, b) {
        this.tagId = a;
        this.ff = b
    };

    function CE(a, b) {
        var c = this,
            d = void 0;
        return d
    }
    CE.K = "internal.loadGoogleTag";

    function DE(a) {
        return new ed("", function(b) {
            var c = this.evaluate(b);
            if (c instanceof ed) return new ed("", function() {
                var d = xa.apply(0, arguments),
                    e = this,
                    f = Yc(zD(this), null);
                f.eventId = a.eventId;
                f.priorityId = a.priorityId;
                f.originalEventData = a.originalEventData;
                var g = d.map(function(m) {
                        return e.evaluate(m)
                    }),
                    k = Ga(this.J);
                k.C = f;
                return c.kb.apply(c, [k].concat(ta(g)))
            })
        })
    };

    function EE(a, b, c) {
        var d = this;
    }
    EE.K = "internal.addGoogleTagRestriction";
    var FE = {},
        GE = [];

    function NE(a, b) {}
    NE.K = "internal.addHistoryChangeListener";

    function OE(a, b, c) {}
    OE.publicName = "addWindowEventListener";

    function PE(a, b) {
        return !0
    }
    PE.publicName = "aliasInWindow";

    function QE(a, b, c) {}
    QE.K = "internal.appendRemoteConfigParameter";

    function RE(a) {
        var b;
        return b
    }
    RE.publicName = "callInWindow";

    function SE(a) {}
    SE.publicName = "callLater";

    function TE(a) {}
    TE.K = "callOnDomReady";

    function UE(a) {}
    UE.K = "callOnWindowLoad";

    function VE(a, b) {
        var c;
        return c
    }
    VE.K = "internal.computeGtmParameter";

    function WE(a, b) {
        var c = this;
    }
    WE.K = "internal.consentScheduleFirstTry";

    function XE(a, b) {
        var c = this;
    }
    XE.K = "internal.consentScheduleRetry";

    function YE(a) {
        var b;
        return b
    }
    YE.K = "internal.copyFromCrossContainerData";

    function ZE(a, b) {
        var c;
        var d = nd(c, this.J, oh(zD(this).vb()) ? 2 : 1);
        d === void 0 && c !== void 0 && O(45);
        return d
    }
    ZE.publicName = "copyFromDataLayer";

    function $E(a) {
        var b = void 0;
        return b
    }
    $E.K = "internal.copyFromDataLayerCache";

    function aF(a) {
        var b;
        return b
    }
    aF.publicName = "copyFromWindow";

    function bF(a) {
        var b = void 0;
        return nd(b, this.J, 1)
    }
    bF.K = "internal.copyKeyFromWindow";
    var cF = function(a) {
            this.C = a
        },
        dF = function(a, b, c, d) {
            var e;
            return (e = a.C[b]) != null && e[c] ? a.C[b][c].some(function(f) {
                return f(d)
            }) : !1
        },
        eF = function(a) {
            return a === 1 && Jm[a] === 1 && !S(L.m.R)
        };
    var fF = function() {
            return "0"
        },
        gF = function(a) {
            if (typeof a !== "string") return "";
            var b = ["gclid", "dclid", "wbraid", "_gl"];
            I(94) && b.push("gbraid");
            return jk(a, b, "0")
        };
    var hF = {},
        iF = {},
        jF = {},
        kF = {},
        lF = {},
        mF = {},
        nF = {},
        oF = {},
        pF = {},
        qF = {},
        rF = {},
        sF = {},
        tF = {},
        uF = {},
        vF = {},
        wF = {},
        xF = {},
        yF = {},
        zF = {},
        AF = {},
        BF = {},
        CF = {},
        DF = {},
        EF = {},
        FF = {},
        GF = {},
        HF = (GF[L.m.Ba] = (hF[2] = [eF], hF), GF[L.m.Me] = (iF[2] = [eF], iF), GF[L.m.Ce] = (jF[2] = [eF], jF), GF[L.m.jg] = (kF[2] = [eF], kF), GF[L.m.kg] = (lF[2] = [eF], lF), GF[L.m.lg] = (mF[2] = [eF], mF), GF[L.m.mg] = (nF[2] = [eF], nF), GF[L.m.ng] = (oF[2] = [eF], oF), GF[L.m.sb] = (pF[2] = [eF], pF), GF[L.m.Ne] = (qF[2] = [eF], qF), GF[L.m.Oe] = (rF[2] = [eF], rF), GF[L.m.Pe] = (sF[2] = [eF], sF), GF[L.m.Qe] = (tF[2] = [eF], tF), GF[L.m.Re] = (uF[2] = [eF], uF), GF[L.m.Se] = (vF[2] = [eF], vF), GF[L.m.Te] = (wF[2] = [eF], wF), GF[L.m.Ue] = (xF[2] = [eF], xF), GF[L.m.Qa] = (yF[1] = [eF], yF), GF[L.m.Kc] = (zF[1] = [eF], zF), GF[L.m.Mc] = (AF[1] = [eF], AF), GF[L.m.md] = (BF[1] = [eF], BF), GF[L.m.je] = (CF[1] = [function(a) {
            return I(94) && eF(a)
        }], CF), GF[L.m.uc] = (DF[1] = [eF], DF), GF[L.m.oa] = (EF[1] = [eF], EF), GF[L.m.Ga] = (FF[1] = [eF], FF), GF),
        IF = {},
        JF = (IF[L.m.Qa] = fF, IF[L.m.Kc] = fF, IF[L.m.Mc] = fF, IF[L.m.md] = fF, IF[L.m.je] = fF, IF[L.m.uc] = function(a) {
            if (!Xc(a)) return {};
            var b = Yc(a, null);
            delete b.match_id;
            return b
        }, IF[L.m.oa] = gF, IF[L.m.Ga] = gF, IF),
        KF = {},
        LF = {},
        MF = (LF.user_data = (KF[2] = [eF], KF), LF),
        NF = {};
    var OF = function(a, b) {
            this.conditions = a;
            this.C = b
        },
        PF = function(a, b, c, d) {
            return dF(a.conditions, b, 2, d) ? {
                status: 2
            } : dF(a.conditions, b, 1, d) ? a.C[b] === void 0 ? {
                status: 2
            } : {
                status: 1,
                value: a.C[b](c, d)
            } : {
                status: 0,
                value: c
            }
        },
        QF = new OF(new cF(HF), JF),
        RF = new OF(new cF(MF), NF);

    function SF(a, b, c) {
        return PF(QF, a, b, c)
    }

    function TF(a, b, c) {
        return PF(RF, a, b, c)
    }
    var UF = function(a, b, c, d) {
        this.C = a;
        this.N = b;
        this.O = c;
        this.U = d
    };
    UF.prototype.getValue = function(a) {
        a = a === void 0 ? 0 : a;
        if (!this.N.some(function(b) {
                return b(a)
            })) return this.O.some(function(b) {
            return b(a)
        }) ? this.U(this.C) : this.C
    };
    UF.prototype.H = function() {
        return Vc(this.C) === "array" || Xc(this.C) ? Yc(this.C, null) : this.C
    };
    var VF = function() {},
        WF = function(a, b) {
            this.conditions = a;
            this.C = b
        },
        XF = function(a, b, c) {
            var d, e = ((d = a.conditions[b]) == null ? void 0 : d[2]) || [],
                f, g = ((f = a.conditions[b]) == null ? void 0 : f[1]) || [];
            return new UF(c, e, g, a.C[b] || VF)
        },
        YF, ZF;

    function $F(a, b, c, d, e) {
        if (I(101) && b !== void 0) {
            var f = d(a, b, e);
            f.status === 2 ? delete c[a] : c[a] = f.value
        } else c[a] = b
    }
    var aG = function(a, b, c) {
            this.eventName = b;
            this.D = c;
            this.C = {};
            this.isAborted = !1;
            this.target = a;
            if (I(55)) {
                this.metadata = {};
                for (var d = c.eventMetadata || {}, e = l(Object.keys(d)), f = e.next(); !f.done; f = e.next()) {
                    var g = f.value;
                    V(this, g, d[g])
                }
            } else this.metadata = Yc(c.eventMetadata || {}, {})
        },
        ru = function(a, b) {
            if (I(55)) {
                var c, d;
                return (c = a.C[b]) == null ? void 0 : (d = c.getValue) == null ? void 0 : d.call(c, T(a, "transmission_type"))
            }
            return a.C[b]
        },
        W = function(a, b, c) {
            if (I(55)) {
                var d = a.C,
                    e;
                c === void 0 ? e = void 0 : (YF != null || (YF = new WF(HF,
                    JF)), e = XF(YF, b, c));
                d[b] = e
            } else $F(b, c, a.C, SF, T(a, "transmission_type"))
        },
        bG = function(a, b) {
            b = b === void 0 ? {} : b;
            if (I(55)) {
                for (var c = l(Object.keys(a.C)), d = c.next(); !d.done; d = c.next()) {
                    var e = d.value,
                        f = void 0,
                        g = void 0,
                        k = void 0;
                    b[e] = (f = a.C[e]) == null ? void 0 : (k = (g = f).H) == null ? void 0 : k.call(g)
                }
                return b
            }
            return Yc(a.C, b)
        };
    aG.prototype.copyToHitData = function(a, b, c) {
        var d = P(this.D, a);
        d === void 0 && (d = b);
        if (d !== void 0 && c !== void 0 && bb(d) && I(82)) try {
            d = c(d)
        } catch (e) {}
        d !== void 0 && W(this, a, d)
    };
    var T = function(a, b) {
            if (I(55)) {
                var c = a.metadata[b];
                if (b === "transmission_type") {
                    var d;
                    return c == null ? void 0 : (d = c.H) == null ? void 0 : d.call(c)
                }
                var e;
                return c == null ? void 0 : (e = c.getValue) == null ? void 0 : e.call(c, T(a, "transmission_type"))
            }
            return a.metadata[b]
        },
        V = function(a, b, c) {
            if (I(55)) {
                var d = a.metadata,
                    e;
                c === void 0 ? e = void 0 : (ZF != null || (ZF = new WF(MF, NF)), e = XF(ZF, b, c));
                d[b] = e
            } else if ($F(b, c, a.metadata, TF, T(a, "transmission_type")), I(101) && b === "transmission_type") {
                for (var f = l(Object.keys(a.metadata)), g = f.next(); !g.done; g =
                    f.next()) {
                    var k = g.value;
                    k !== "transmission_type" && V(a, k, T(a, k))
                }
                for (var m = l(Object.keys(a.C)), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    W(a, p, ru(a, p))
                }
            }
        },
        cG = function(a, b) {
            b = b === void 0 ? {} : b;
            if (I(55)) {
                for (var c = l(Object.keys(a.metadata)), d = c.next(); !d.done; d = c.next()) {
                    var e = d.value,
                        f = void 0,
                        g = void 0,
                        k = void 0;
                    b[e] = (f = a.metadata[e]) == null ? void 0 : (k = (g = f).H) == null ? void 0 : k.call(g)
                }
                return b
            }
            return Yc(a.metadata, b)
        },
        $w = function(a, b, c) {
            var d = a.target.destinationId;
            Pl || (d = dm(d));
            var e = Ev(d);
            return e && e[b] !==
                void 0 ? e[b] : c
        };

    function dG(a, b) {
        var c;
        return c
    }
    dG.K = "internal.copyPreHit";

    function eG(a, b) {
        var c = null;
        return nd(c, this.J, 2)
    }
    eG.publicName = "createArgumentsQueue";

    function fG(a) {
        return nd(function(c) {
            var d = MA();
            if (typeof c === "function") d(function() {
                c(function(f, g, k) {
                    var m =
                        MA(),
                        n = m && m.getByName && m.getByName(f);
                    return (new z.gaplugins.Linker(n)).decorate(g, k)
                })
            });
            else if (Array.isArray(c)) {
                var e = String(c[0]).split(".");
                b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c)
            } else if (c === "isLoaded") return !!d.loaded
        }, this.J, 1)
    }
    fG.K = "internal.createGaCommandQueue";

    function gG(a) {
        return nd(function() {
                if (!ab(e.push)) throw Error("Object at " + a + " in window is not an array.");
                e.push.apply(e, Array.prototype.slice.call(arguments, 0))
            }, this.J,
            oh(zD(this).vb()) ? 2 : 1)
    }
    gG.publicName = "createQueue";

    function hG(a, b) {
        var c = null;
        return c
    }
    hG.K = "internal.createRegex";

    function iG() {
        var a = {};
        return a
    };

    function jG(a) {}
    jG.K = "internal.declareConsentState";

    function kG(a) {
        var b = "";
        return b
    }
    kG.K = "internal.decodeUrlHtmlEntities";

    function lG(a, b, c) {
        var d;
        return d
    }
    lG.K = "internal.decorateUrlWithGaCookies";

    function mG() {}
    mG.K = "internal.deferCustomEvents";

    function nG(a) {
        var b;
        K(this, "detect_user_provided_data", "auto");
        var c = md(a) || {},
            d = nw({
                Td: !!c.includeSelector,
                Ud: !!c.includeVisibility,
                lf: c.excludeElementSelectors,
                Lb: c.fieldFilters,
                Ig: !!c.selectMultipleElements
            });
        b = new Na;
        var e = new ad;
        b.set("elements", e);
        for (var f = d.elements, g = 0; g < f.length; g++) e.push(oG(f[g]));
        d.Ei !== void 0 && b.set("preferredEmailElement", oG(d.Ei));
        b.set("status", d.status);
        if (I(119) && c.performDataLayerSearch && !/Mobile|iPhone|iPad|iPod|Android|IEMobile/.test(gc &&
                gc.userAgent || "")) {}
        return b
    }
    var pG = function(a) {
            switch (a) {
                case lw.Tb:
                    return "email";
                case lw.Xc:
                    return "phone_number";
                case lw.Vc:
                    return "first_name";
                case lw.Wc:
                    return "last_name";
                case lw.Nh:
                    return "street";
                case lw.Kg:
                    return "city";
                case lw.Gh:
                    return "region";
                case lw.Ye:
                    return "postal_code";
                case lw.de:
                    return "country"
            }
        },
        oG = function(a) {
            var b = new Na;
            b.set("userData", a.ba);
            b.set("tagName", a.tagName);
            a.querySelector !== void 0 && b.set("querySelector", a.querySelector);
            a.isVisible !== void 0 && b.set("isVisible", a.isVisible);
            if (I(32)) {} else switch (a.type) {
                case lw.Tb:
                    b.set("type", "email")
            }
            return b
        };
    nG.K = "internal.detectUserProvidedData";

    function sG(a, b) {
        return f
    }
    sG.K = "internal.enableAutoEventOnClick";

    function AG(a, b) {
        return p
    }
    AG.K = "internal.enableAutoEventOnElementVisibility";

    function BG() {}
    BG.K = "internal.enableAutoEventOnError";
    var CG = {},
        DG = [],
        EG = {},
        FG = 0,
        GG = 0;
    var IG = function() {
            ib(EG, function(a, b) {
                var c = CG[a];
                c && ib(b, function(d, e) {
                    HG(e, c)
                })
            })
        },
        LG = function(a, b) {
            var c = "" + b;
            if (CG[c]) CG[c].push(a);
            else {
                var d = [a];
                CG[c] = d;
                var e = EG[c];
                e || (e = {}, EG[c] = e);
                DG.push(function(f) {
                    var g = f.target;
                    if (g) {
                        var k = KD(g);
                        if (k) {
                            var m = JG(k, "gtmFormInteractId", function() {
                                    return FG++
                                }),
                                n = JG(g, "gtmFormInteractFieldId", function() {
                                    return GG++
                                });
                            if (m !== null && n !== null) {
                                var p = e[m];
                                p ? (p.mc && (z.clearTimeout(p.mc), p.Ob.getAttribute("data-gtm-form-interact-field-id") !== n && HG(p, d)), p.Ob = g, KG(p,
                                    d, b)) : (e[m] = {
                                    form: k,
                                    Ob: g,
                                    sequenceNumber: 0,
                                    mc: null
                                }, KG(e[m], d, b))
                            }
                        }
                    }
                })
            }
        },
        HG = function(a, b) {
            var c = a.form,
                d = a.Ob,
                e = HD(c, "gtm.formInteract", b),
                f = c.action;
            f && f.tagName && (f = c.cloneNode(!1).action);
            e["gtm.elementUrl"] = f;
            e["gtm.interactedFormName"] = c.getAttribute("name") != null ? c.getAttribute("name") : void 0;
            e["gtm.interactedFormLength"] = c.length;
            e["gtm.interactedFormField"] = d;
            e["gtm.interactedFormFieldId"] = d.id;
            e["gtm.interactedFormFieldName"] = d.getAttribute("name") != null ? d.getAttribute("name") : void 0;
            e["gtm.interactedFormFieldPosition"] =
                JD(c, d, "gtmFormInteractFieldId");
            e["gtm.interactedFormFieldType"] = d.getAttribute("type") != null ? d.getAttribute("type") : void 0;
            e["gtm.interactSequenceNumber"] = a.sequenceNumber;
            pC(e);
            a.sequenceNumber++;
            a.mc = null
        },
        KG = function(a, b, c) {
            c ? a.mc = z.setTimeout(function() {
                HG(a, b)
            }, c) : HG(a, b)
        },
        JG = function(a, b, c) {
            var d;
            try {
                if (d = a.dataset[b]) return d;
                d = String(c());
                a.dataset[b] = d
            } catch (e) {
                d = null
            }
            return d
        };

    function MG(a, b) {
        var c = this;
        if (!Vg(a)) throw J(this.getName(), ["Object|undefined", "any"], arguments);
        vD([function() {
            K(c, "detect_form_interaction_events")
        }]);
        var d = BD(b),
            e = a && Number(a.get("interval"));
        e > 0 && isFinite(e) || (e = 0);
        if (CD("fil", "init", !1)) {
            var f = CD("fil", "reg");
            if (f) f(d, e);
            else throw Error("Failed to register trigger: " + d);
        } else xc(A, "change", function(g) {
                for (var k = 0; k < DG.length; k++) DG[k](g)
            }), xc(z, "pagehide", function() {
                IG()
            }),
            LG(d, e), DD("fil", "reg", LG), DD("fil", "init", !0);
        return d
    }
    MG.K = "internal.enableAutoEventOnFormInteraction";
    var NG = function(a, b, c, d, e) {
            var f = CD("fsl", c ? "nv.mwt" : "mwt", 0),
                g;
            g = c ? CD("fsl", "nv.ids", []) : CD("fsl", "ids", []);
            if (!g.length) return !0;
            var k = HD(a, "gtm.formSubmit", g),
                m = a.action;
            m && m.tagName && (m = a.cloneNode(!1).action);
            O(121);
            if (m === "https://www.facebook.com/tr/") return O(122), !0;
            k["gtm.elementUrl"] = m;
            k["gtm.formCanceled"] = c;
            a.getAttribute("name") != null && (k["gtm.interactedFormName"] = a.getAttribute("name"));
            e && (k["gtm.formSubmitElement"] = e, k["gtm.formSubmitElementText"] = e.value);
            if (d && f) {
                if (!oC(k, qC(b,
                        f), f)) return !1
            } else oC(k, function() {}, f || 2E3);
            return !0
        },
        OG = function() {
            var a = [],
                b = function(c) {
                    return eb(a, function(d) {
                        return d.form === c
                    })
                };
            return {
                store: function(c, d) {
                    var e = b(c);
                    e ? e.button = d : a.push({
                        form: c,
                        button: d
                    })
                },
                get: function(c) {
                    var d = b(c);
                    if (d) return d.button
                }
            }
        },
        PG = function(a) {
            var b = a.target;
            return b && b !== "_self" && b !== "_parent" && b !== "_top" ? !1 : !0
        },
        QG = function() {
            var a = OG(),
                b = HTMLFormElement.prototype.submit;
            xc(A, "click", function(c) {
                var d = c.target;
                if (d) {
                    var e = Cc(d, ["button", "input"], 100);
                    if (e && (e.type ===
                            "submit" || e.type === "image") && e.name && zc(e, "value")) {
                        var f = KD(e);
                        f && a.store(f, e)
                    }
                }
            }, !1);
            xc(A, "submit", function(c) {
                var d = c.target;
                if (!d) return c.returnValue;
                var e = c.defaultPrevented || c.returnValue === !1,
                    f = PG(d) && !e,
                    g = a.get(d),
                    k = !0;
                if (NG(d, function() {
                        if (k) {
                            var m = null,
                                n = {};
                            g && (m = A.createElement("input"), m.type = "hidden", m.name = g.name, m.value = g.value, d.appendChild(m), g.hasAttribute("formaction") && (n.action = d.getAttribute("action"), Xb(d, g.getAttribute("formaction"))), g.hasAttribute("formenctype") && (n.enctype =
                                d.getAttribute("enctype"), d.setAttribute("enctype", g.getAttribute("formenctype"))), g.hasAttribute("formmethod") && (n.method = d.getAttribute("method"), d.setAttribute("method", g.getAttribute("formmethod"))), g.hasAttribute("formvalidate") && (n.validate = d.getAttribute("validate"), d.setAttribute("validate", g.getAttribute("formvalidate"))), g.hasAttribute("formtarget") && (n.target = d.getAttribute("target"), d.setAttribute("target", g.getAttribute("formtarget"))));
                            b.call(d);
                            m && (d.removeChild(m), n.hasOwnProperty("action") &&
                                Xb(d, n.action), n.hasOwnProperty("enctype") && d.setAttribute("enctype", n.enctype), n.hasOwnProperty("method") && d.setAttribute("method", n.method), n.hasOwnProperty("validate") && d.setAttribute("validate", n.validate), n.hasOwnProperty("target") && d.setAttribute("target", n.target))
                        }
                    }, e, f, g)) k = !1;
                else return e || (c.preventDefault && c.preventDefault(), c.returnValue = !1), !1;
                return c.returnValue
            }, !1);
            HTMLFormElement.prototype.submit = function() {
                var c = this,
                    d = !0;
                NG(c, function() {
                    d && b.call(c)
                }, !1, PG(c)) && (b.call(c), d = !1)
            }
        };

    function RG(a, b) {
        var c = this;
        if (!Vg(a)) throw J(this.getName(), ["Object|undefined", "any"], arguments);
        var d = a && a.get("waitForTags");
        vD([function() {
            K(c, "detect_form_submit_events", {
                waitForTags: !!d
            })
        }]);
        var e = a && a.get("checkValidation"),
            f = BD(b);
        if (d) {
            var g = Number(a.get("waitForTagsTimeout"));
            g > 0 && isFinite(g) || (g = 2E3);
            var k = function(n) {
                return Math.max(g, n)
            };
            GD("fsl", "mwt", k, 0);
            e || GD("fsl", "nv.mwt", k, 0)
        }
        var m = function(n) {
            n.push(f);
            return n
        };
        GD("fsl", "ids", m, []);
        e || GD("fsl", "nv.ids", m, []);
        CD("fsl", "init", !1) || (QG(), DD("fsl", "init", !0));
        return f
    }
    RG.K = "internal.enableAutoEventOnFormSubmit";

    function WG() {
        var a = this;
    }
    WG.K = "internal.enableAutoEventOnGaSend";
    var XG = {},
        YG = [];

    function eH(a, b) {
        var c = this;
        return f
    }
    eH.K = "internal.enableAutoEventOnHistoryChange";
    var fH = ["http://", "https://", "javascript:", "file://"];

    function jH(a, b) {
        var c = this;
        return k
    }
    jH.K = "internal.enableAutoEventOnLinkClick";
    var kH, lH;

    function wH(a, b) {
        var c = this;
        return d
    }
    wH.K = "internal.enableAutoEventOnScroll";

    function xH(a) {
        return function() {
            if (a.limit && a.yi >= a.limit) a.Dg && z.clearInterval(a.Dg);
            else {
                a.yi++;
                var b = qb();
                pC({
                    event: a.eventName,
                    "gtm.timerId": a.Dg,
                    "gtm.timerEventNumber": a.yi,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.limit,
                    "gtm.timerStartTime": a.al,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.al,
                    "gtm.triggers": a.co
                })
            }
        }
    }

    function yH(a, b) {
        return f
    }
    yH.K = "internal.enableAutoEventOnTimer";
    var $b = va(["data-gtm-yt-inspected-"]),
        AH = ["www.youtube.com", "www.youtube-nocookie.com"],
        BH, CH = !1;

    function MH(a, b) {
        var c = this;
        return e
    }
    MH.K = "internal.enableAutoEventOnYouTubeActivity";
    CH = !1;

    function NH(a, b) {
        if (!ah(a) || !Vg(b)) throw J(this.getName(), ["string", "Object|undefined"], arguments);
        var c = b ? md(b) : {},
            d = a,
            e = !1;
        var f = JSON.parse(d);
        if (!f) throw Error("Invalid boolean expression string was given.");
        e = vh(f, c);
        return e
    }
    NH.K = "internal.evaluateBooleanExpression";
    var OH;

    function PH(a) {
        var b = !1;
        return b
    }
    PH.K = "internal.evaluateMatchingRules";
    var QH = function(a) {
            switch (a) {
                case "page_view":
                    return [Hu, Fu, Eu, Rx, tu, xy, ky, Ju, Zx, fy, Iu];
                case "call_conversion":
                    return [Hu, Eu, Rx];
                case "conversion":
                    return [Bu, Hu, Eu, ty, Dy, qy, Cy, Ay, zy, yy, xy, ky, jy, hy, gy, ey, Vx, Ux, iy, Zx, py, dy, cy, ay, sy, oy, Fu, Cu, Ju, ny, $x, wy, fy, ry, Tx, Yx, my, by, uy, vy, Wx, Iu];
                case "landing_page":
                    return [Bu, Hu, Eu, ty, Dy, ky, Du, Zx, py, sy, Cu, Fu, Ju, ny, wy, fy, ry, Tx, Wx, Iu];
                case "remarketing":
                    return [Bu, Hu, Eu, ty, Dy, qy, Cy, Ay, zy, yy, xy, ky, jy, ey, iy, Zx, py, dy, sy, Cu, Fu, Ju, ny, $x, wy, fy, ry, Tx, uy, Wx, Iu];
                case "user_data_lead":
                    return [Bu,
                        Hu, Eu, ty, Dy, Cy, xy, ky, iy, Zx, Du, py, ay, sy, Cu, Fu, Ju, ny, $x, wy, fy, ry, Tx, Wx, Iu
                    ];
                case "user_data_web":
                    return [Bu, Hu, Eu, ty, Dy, Cy, xy, ky, iy, Zx, Du, py, ay, sy, Cu, Fu, Ju, ny, $x, wy, fy, ry, Tx, Wx, Iu];
                default:
                    return [Bu, Hu, Eu, ty, Dy, qy, Cy, Ay, zy, yy, xy, ky, jy, hy, gy, ey, Vx, Ux, iy, Zx, py, dy, cy, ay, sy, oy, Cu, Fu, Ju, ny, $x, wy, fy, ry, Tx, Yx, my, by, uy, vy, Wx, Iu]
            }
        },
        RH = function(a) {
            for (var b = QH(T(a, "hit_type")), c = 0; c < b.length && (b[c](a), !a.isAborted); c++);
        },
        SH = function(a, b, c, d) {
            var e = new aG(b, c, d);
            V(e, "hit_type", a);
            V(e, "speculative", !0);
            V(e, "event_start_timestamp_ms",
                qb());
            V(e, "speculative_in_message", d.eventMetadata.speculative);
            return e
        },
        TH = function(a, b, c, d) {
            function e(v, u) {
                for (var t = l(k), w = t.next(); !w.done; w = t.next()) {
                    var x = w.value;
                    x.isAborted = !1;
                    V(x, "speculative", !0);
                    V(x, "consent_updated", !0);
                    V(x, "event_start_timestamp_ms", qb());
                    V(x, "consent_event_id", v);
                    V(x, "consent_priority_id", u)
                }
            }

            function f(v) {
                for (var u = {}, t = 0; t < k.length; u = {
                        Ua: void 0
                    }, t++)
                    if (u.Ua = k[t], !v || v(T(u.Ua, "hit_type")))
                        if (!T(u.Ua, "consent_updated") || T(u.Ua, "hit_type") === "page_view" || S(q)) RH(k[t]),
                            T(u.Ua, "speculative") || u.Ua.isAborted || (fA(u.Ua), T(u.Ua, "hit_type") === "page_view" && (vu(u.Ua, function() {
                                f(function(w) {
                                    return w === "page_view"
                                })
                            }), ru(u.Ua, L.m.Me) === void 0 && r === void 0 && (r = Bo(vo.bf, function(w) {
                                return function() {
                                    S(L.m.T) && (V(w.Ua, "user_id_updated", !0), V(w.Ua, "consent_updated", !1), W(w.Ua, L.m.Sb), f(function(x) {
                                        return x === "page_view"
                                    }), V(w.Ua, "user_id_updated", !1), Co(vo.bf, r), r = void 0)
                                }
                            }(u)))))
            }
            var g = d.isGtmEvent && a === "" ? {
                id: "",
                prefix: "",
                destinationId: "",
                ids: []
            } : Ho(a, d.isGtmEvent);
            if (g) {
                var k = [];
                if (d.eventMetadata.hit_type_override) {
                    var m = d.eventMetadata.hit_type_override;
                    Array.isArray(m) || (m = [m]);
                    for (var n = 0; n < m.length; n++) {
                        var p = SH(m[n], g, b, d);
                        V(p, "speculative", !1);
                        k.push(p)
                    }
                } else b === L.m.ia && (I(23) ? k.push(SH("page_view", g, b, d)) : k.push(SH("landing_page", g, b, d))), k.push(SH("conversion", g, b, d)), k.push(SH("user_data_lead", g, b, d)), k.push(SH("user_data_web", g, b, d)), k.push(SH("remarketing", g, b, d));
                var q = [L.m.R, L.m.T],
                    r = void 0;
                io(function() {
                    f();
                    var v = I(28) && !S([L.m.ya]);
                    if (!S(q) || v) {
                        var u =
                            q;
                        v && (u = [].concat(ta(u), [L.m.ya]));
                        ho(function(t) {
                            var w, x, y;
                            w = t.consentEventId;
                            x = t.consentPriorityId;
                            y = t.consentTypes;
                            e(w, x);
                            y && y.length === 1 && y[0] === L.m.ya ? f(function(B) {
                                return B === "remarketing"
                            }) : f()
                        }, u)
                    }
                }, q)
            }
        };

    function xI() {
        return tq(7) && tq(9) && tq(10)
    };

    function DJ(a, b, c, d) {}
    DJ.K = "internal.executeEventProcessor";

    function EJ(a) {
        var b;
        return nd(b, this.J, 1)
    }
    EJ.K = "internal.executeJavascriptString";

    function FJ(a) {
        var b;
        return b
    };

    function GJ(a) {
        var b = {};
        return nd(b)
    }
    GJ.K = "internal.getAdsCookieWritingOptions";

    function HJ(a) {
        var b = !1;
        return b
    }
    HJ.K = "internal.getAllowAdPersonalization";

    function IJ(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    IJ.K = "internal.getAuid";
    var JJ = null;

    function KJ() {
        var a = new Na;
        K(this, "read_container_data"), I(47) && JJ ? a = JJ : (a.set("containerId", 'AW-959136034'), a.set("version", '2'), a.set("environmentName", ''), a.set("debugMode", ag), a.set("previewMode", bg.fl), a.set("environmentMode", bg.Gm), a.set("firstPartyServing", Jj() || uj), a.set("containerUrl", jc), a.Ma(), I(47) && (JJ = a));
        return a
    }
    KJ.publicName = "getContainerVersion";

    function LJ(a, b) {
        b = b === void 0 ? !0 : b;
        var c;
        return c
    }
    LJ.publicName = "getCookieValues";

    function MJ() {
        return vn()
    }
    MJ.K = "internal.getCountryCode";

    function NJ() {
        var a = [];
        a = Wl();
        return nd(a)
    }
    NJ.K = "internal.getDestinationIds";

    function OJ(a) {
        var b = new Na;
        return b
    }
    OJ.K = "internal.getDeveloperIds";

    function PJ(a, b) {
        var c = null;
        return c
    }
    PJ.K = "internal.getElementAttribute";

    function QJ(a) {
        var b = null;
        return b
    }
    QJ.K = "internal.getElementById";

    function RJ(a) {
        var b = "";
        return b
    }
    RJ.K = "internal.getElementInnerText";

    function SJ(a, b) {
        var c = null;
        return nd(c)
    }
    SJ.K = "internal.getElementProperty";

    function TJ(a) {
        var b;
        return b
    }
    TJ.K = "internal.getElementValue";

    function UJ(a) {
        var b = 0;
        return b
    }
    UJ.K = "internal.getElementVisibilityRatio";

    function VJ(a) {
        var b = null;
        return b
    }
    VJ.K = "internal.getElementsByCssSelector";

    function WJ(a) {
        var b;
        if (!ah(a)) throw J(this.getName(), ["string"], arguments);
        K(this, "read_event_data", a);
        var c;
        a: {
            var d = a,
                e = zD(this).originalEventData;
            if (e) {
                for (var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0; q < p.length; q++) {
                    for (var r = p[q].split("\\."), v = 0; v < r.length; v++) {
                        for (var u = r[v].split("."), t = 0; t < u.length; t++) n.push(u[t]), t !== u.length - 1 && n.push(m);
                        v !== r.length - 1 && n.push(k)
                    }
                    q !== p.length - 1 && n.push(g)
                }
                for (var w = [], x = "", y = l(n), B = y.next(); !B.done; B =
                    y.next()) {
                    var D = B.value;
                    D === m ? (w.push(x), x = "") : x = D === g ? x + "\\" : D === k ? x + "." : x + D
                }
                x && w.push(x);
                for (var E = l(w), H = E.next(); !H.done; H = E.next()) {
                    if (f == null) {
                        c = void 0;
                        break a
                    }
                    f = f[H.value]
                }
                c = f
            } else c = void 0
        }
        b = nd(c, this.J, 1);
        return b
    }
    WJ.K = "internal.getEventData";
    var XJ = {};
    XJ.enableAWFledge = I(33);
    XJ.enableAdsConversionValidation = I(17);
    XJ.enableAdsSupernovaParams = I(29);
    XJ.enableAutoPhoneAndAddressDetection = I(31);
    XJ.enableAutoPiiOnPhoneAndAddress = I(32);
    XJ.enableCachedEcommerceData = I(38);
    XJ.enableCloudRecommentationsErrorLogging = I(39);
    XJ.enableCloudRecommentationsSchemaIngestion = I(40);
    XJ.enableCloudRetailInjectPurchaseMetadata = I(42);
    XJ.enableCloudRetailLogging = I(41);
    XJ.enableCloudRetailPageCategories = I(43);
    XJ.enableConsentDisclosureActivity = I(46);
    XJ.enableDCFledge = I(54);
    XJ.enableDataLayerSearchExperiment = I(119);
    XJ.enableDecodeUri = I(82);
    XJ.enableDeferAllEnhancedMeasurement = I(56);
    XJ.enableFormSkipValidation = I(74);
    XJ.enableGa4OutboundClicksFix = I(86);
    XJ.enableGaAdsConversions = I(111);
    XJ.enableGaAdsConversionsClientId = I(110);
    XJ.enableLimitedDataModes = I(101);
    XJ.enableMerchantRenameForBasketData = I(104);
    XJ.enableCatchPredetectPermissionFailure = I(128);
    XJ.enableUrlDecodeEventUsage = I(131);
    XJ.enableZoneConfigInChildContainers = I(134);
    XJ.useEnableAutoEventOnFormApis = I(147);

    function YJ() {
        return nd(XJ)
    }
    YJ.K = "internal.getFlags";

    function ZJ() {
        return new jd(ZC)
    }
    ZJ.K = "internal.getHtmlId";

    function $J(a) {
        var b;
        return b
    }
    $J.K = "internal.getIframingState";

    function aK(a, b) {
        var c = {};
        return nd(c)
    }
    aK.K = "internal.getLinkerValueFromLocation";

    function bK() {
        var a = new Na;
        return a
    }
    bK.K = "internal.getPrivacyStrings";

    function cK(a, b) {
        var c;
        if (!ah(a) || !ah(b)) throw J(this.getName(), ["string", "string"], arguments);
        var d = Ev(a) || {};
        c = nd(d[b], this.J);
        return c
    }
    cK.K = "internal.getProductSettingsParameter";

    function dK(a, b) {
        var c;
        return c
    }
    dK.publicName = "getQueryParameters";

    function eK(a, b) {
        var c;
        return c
    }
    eK.publicName = "getReferrerQueryParameters";

    function fK(a) {
        var b = "";
        return b
    }
    fK.publicName = "getReferrerUrl";

    function gK() {
        return wn()
    }
    gK.K = "internal.getRegionCode";

    function hK(a, b) {
        var c;
        return c
    }
    hK.K = "internal.getRemoteConfigParameter";

    function iK() {
        var a = new Na;
        a.set("width", 0);
        a.set("height", 0);
        return a
    }
    iK.K = "internal.getScreenDimensions";

    function jK() {
        var a = "";
        return a
    }
    jK.K = "internal.getTopSameDomainUrl";

    function kK() {
        var a = "";
        return a
    }
    kK.K = "internal.getTopWindowUrl";

    function lK(a) {
        var b = "";
        return b
    }
    lK.publicName = "getUrl";

    function mK() {
        K(this, "get_user_agent");
        return gc.userAgent
    }
    mK.K = "internal.getUserAgent";

    function nK() {
        var a;
        return a ? nd(Jx(a)) : a
    }
    nK.K = "internal.getUserAgentClientHints";

    function vK() {
        return z.gaGlobal = z.gaGlobal || {}
    }

    function wK() {
        var a = vK();
        a.hid = a.hid || fb();
        return a.hid
    }

    function xK(a, b) {
        var c = vK();
        if (c.vid === void 0 || b && !c.from_cookie) c.vid = a, c.from_cookie = b
    };

    function XK(a) {
        (cx(a) || Jj()) && W(a, L.m.Rj, wn() || vn());
        !cx(a) && Jj() && W(a, L.m.Zj, "::")
    }

    function YK(a) {
        if (I(76) && Jj()) {
            Fu(a);
            Gu(a, "cpf", Zu(P(a.D, L.m.Ja)));
            var b = P(a.D, L.m.Vb);
            Gu(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
            Gu(a, "cf", Zu(P(a.D, L.m.Xa)));
            Gu(a, "cd", jr(Yu(P(a.D, L.m.Ra)), Yu(P(a.D, L.m.ob))))
        }
    };
    var uL = {
        AW: vo.ol,
        G: vo.Rl,
        DC: vo.Ql
    };

    function vL(a) {
        var b = Fi(a);
        return "" + Nq(b.map(function(c) {
            return c.value
        }).join("!"))
    }

    function wL(a) {
        var b = Ho(a);
        return b && uL[b.prefix]
    }

    function xL(a, b) {
        var c = a[b];
        c && (c.clearTimerId && z.clearTimeout(c.clearTimerId), c.clearTimerId = z.setTimeout(function() {
            delete a[b]
        }, 36E5))
    };
    var cM = window,
        dM = document,
        eM = function(a) {
            var b = cM._gaUserPrefs;
            if (b && b.ioo && b.ioo() || dM.documentElement.hasAttribute("data-google-analytics-opt-out") || a && cM["ga-disable-" + a] === !0) return !0;
            try {
                var c = cM.external;
                if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0
            } catch (p) {}
            for (var d = [], e = String(dM.cookie).split(";"), f = 0; f < e.length; f++) {
                var g = e[f].split("="),
                    k = g[0].replace(/^\s*|\s*$/g, "");
                if (k && k == "AMP_TOKEN") {
                    var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    m && (m = decodeURIComponent(m));
                    d.push(m)
                }
            }
            for (var n =
                    0; n < d.length; n++)
                if (d[n] == "$OPT_OUT") return !0;
            return dM.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function pM(a) {
        ib(a, function(c) {
            c.charAt(0) === "_" && delete a[c]
        });
        var b = a[L.m.tb] || {};
        ib(b, function(c) {
            c.charAt(0) === "_" && delete b[c]
        })
    };

    function WM(a, b) {}

    function XM(a, b) {
        var c = function() {};
        return c
    }

    function YM(a, b, c) {};
    var ZM = XM;

    function aN(a, b, c) {
        var d = this;
    }
    aN.K = "internal.gtagConfig";

    function bN() {
        var a = {};
        return a
    };

    function dN(a, b) {}
    dN.publicName = "gtagSet";

    function eN() {
        var a = {};
        return a
    };

    function fN(a, b) {}
    fN.publicName = "injectHiddenIframe";
    var gN = function() {
        var a = 0;
        return function(b) {
            switch (b) {
                case 1:
                    a |= 1;
                    break;
                case 2:
                    a |= 2;
                    break;
                case 3:
                    a |= 4
            }
            return a
        }
    }();

    function hN(a, b, c, d, e) {}
    hN.K = "internal.injectHtml";
    var lN = {};

    function nN(a, b, c, d) {}
    var oN = {
            dl: 1,
            id: 1
        },
        pN = {};

    function qN(a, b, c, d) {}
    I(151) ? qN.publicName = "injectScript" : nN.publicName = "injectScript";
    qN.K = "internal.injectScript";

    function rN() {
        return An()
    }
    rN.K = "internal.isAutoPiiEligible";

    function sN(a) {
        var b = !0;
        if (!ah(a) && !Zg(a)) throw J(this.getName(), ["string", "Array"], arguments);
        var c = md(a);
        if (bb(c)) K(this, "access_consent", c, "read");
        else
            for (var d = l(c), e = d.next(); !e.done; e = d.next()) K(this, "access_consent", e.value, "read");
        b = S(c);
        return b
    }
    sN.publicName = "isConsentGranted";

    function tN(a) {
        var b = !1;
        return b
    }
    tN.K = "internal.isDebugMode";

    function uN() {
        return yn()
    }
    uN.K = "internal.isDmaRegion";

    function vN(a) {
        var b = !1;
        return b
    }
    vN.K = "internal.isEntityInfrastructure";

    function wN() {
        var a = !1;
        return a
    }
    wN.K = "internal.isLandingPage";

    function xN() {
        var a = Bh(function(b) {
            zD(this).log("error", b)
        });
        a.publicName = "JSON";
        return a
    };

    function yN(a) {
        var b = void 0;
        return nd(b)
    }
    yN.K = "internal.legacyParseUrl";

    function zN() {
        return !1
    }
    var AN = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };

    function BN() {}
    BN.publicName = "logToConsole";

    function CN(a, b) {}
    CN.K = "internal.mergeRemoteConfig";

    function DN(a, b, c) {
        c = c === void 0 ? !0 : c;
        var d = [];
        return nd(d)
    }
    DN.K = "internal.parseCookieValuesFromString";

    function EN(a) {
        var b = void 0;
        return b
    }
    EN.publicName = "parseUrl";

    function FN(a) {}
    FN.K = "internal.processAsNewEvent";

    function GN(a, b, c) {
        var d;
        return d
    }
    GN.K = "internal.pushToDataLayer";

    function HN(a) {
        var b = xa.apply(1, arguments),
            c = !1;
        if (!ah(a)) throw J(this.getName(), ["string"], arguments);
        for (var d = [this, a], e = l(b), f = e.next(); !f.done; f = e.next()) d.push(md(f.value, this.J, 1));
        try {
            K.apply(null, d), c = !0
        } catch (g) {
            return !1
        }
        return c
    }
    HN.publicName = "queryPermission";

    function IN(a) {
        var b = this;
    }
    IN.K = "internal.queueAdsTransmission";

    function JN() {
        var a = "";
        return a
    }
    JN.publicName = "readCharacterSet";

    function KN() {
        return mj.zb
    }
    KN.K = "internal.readDataLayerName";

    function LN() {
        var a = "";
        return a
    }
    LN.publicName = "readTitle";

    function MN(a, b) {
        var c = this;
        if (!ah(a) || !Xg(b)) throw J(this.getName(), ["string", "function"], arguments);
        nv(a, function(d) {
            b.invoke(c.J, nd(d, c.J, 1))
        });
    }
    MN.K = "internal.registerCcdCallback";

    function NN(a) {
        return !0
    }
    NN.K = "internal.registerDestination";
    var ON = ["config", "event", "get", "set"];

    function PN(a, b, c) {}
    PN.K = "internal.registerGtagCommandListener";

    function QN(a, b) {
        var c = !1;
        return c
    }
    QN.K = "internal.removeDataLayerEventListener";

    function RN(a, b) {}
    RN.K = "internal.removeFormData";

    function SN() {}
    SN.publicName = "resetDataLayer";

    function TN(a, b, c) {
        var d = void 0;
        return d
    }
    TN.K = "internal.scrubUrlParams";

    function UN(a) {}
    UN.K = "internal.sendAdsHit";

    function VN(a, b, c, d) {
        if (arguments.length < 2 || !Vg(d) || !Vg(c)) throw J(this.getName(), ["any", "any", "Object|undefined", "Object|undefined"], arguments);
        var e = c ? md(c) : {},
            f = md(a),
            g = Array.isArray(f) ? f : [f];
        b = String(b);
        var k = d ? md(d) : {},
            m = zD(this);
        k.originatingEntity = pE(m);
        for (var n = 0; n < g.length; n++) {
            var p = g[n];
            if (typeof p === "string") {
                var q = {};
                Yc(e, q);
                var r = {};
                Yc(k, r);
                var v = uv(p, b, q);
                xv(v, k.eventId || m.eventId, r)
            }
        }
    }
    VN.K = "internal.sendGtagEvent";

    function WN(a, b, c) {}
    WN.publicName = "sendPixel";

    function XN(a, b) {}
    XN.K = "internal.setAnchorHref";

    function YN(a) {}
    YN.K = "internal.setContainerConsentDefaults";

    function ZN(a, b, c, d) {
        var e = this;
        d = d === void 0 ? !0 : d;
        var f = !1;
        return f
    }
    ZN.publicName = "setCookie";

    function $N(a) {}
    $N.K = "internal.setCorePlatformServices";

    function aO(a, b) {}
    aO.K = "internal.setDataLayerValue";

    function bO(a) {}
    bO.publicName = "setDefaultConsentState";

    function cO(a, b) {}
    cO.K = "internal.setDelegatedConsentType";

    function dO(a, b) {}
    dO.K = "internal.setFormAction";

    function eO(a, b, c) {
        c = c === void 0 ? !1 : c;
    }
    eO.K = "internal.setInCrossContainerData";

    function fO(a, b, c) {
        return !1
    }
    fO.publicName = "setInWindow";

    function gO(a, b, c) {
        if (!ah(a) || !ah(b) || arguments.length !== 3) throw J(this.getName(), ["string", "string", "any"], arguments);
        var d = Ev(a) || {};
        d[b] = md(c, this.J);
        var e = a;
        Cv || Dv();
        Bv[e] = d;
    }
    gO.K = "internal.setProductSettingsParameter";

    function hO(a, b, c) {
        if (!ah(a) || !ah(b) || arguments.length !== 3) throw J(this.getName(), ["string", "string", "any"], arguments);
        for (var d = b.split("."), e = Pp(a), f = 0; f < d.length - 1; f++) {
            if (e[d[f]] === void 0) e[d[f]] = {};
            else if (!Xc(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]]
        }
        e[d[f]] = md(c, this.J, 1);
    }
    hO.K = "internal.setRemoteConfigParameter";

    function iO(a, b) {}
    iO.K = "internal.setTransmissionMode";

    function jO(a, b, c, d) {
        var e = this;
    }
    jO.publicName = "sha256";

    function kO(a, b, c) {}
    kO.K = "internal.sortRemoteConfigParameters";

    function lO(a, b) {
        var c = void 0;
        return c
    }
    lO.K = "internal.subscribeToCrossContainerData";
    var mO = {},
        nO = {};
    mO.getItem = function(a) {
        var b = null;
        K(this, "access_template_storage");
        var c = zD(this).vb();
        nO[c] && (b = nO[c].hasOwnProperty("gtm." + a) ? nO[c]["gtm." + a] : null);
        return b
    };
    mO.setItem = function(a, b) {
        K(this, "access_template_storage");
        var c = zD(this).vb();
        nO[c] = nO[c] || {};
        nO[c]["gtm." + a] = b;
    };
    mO.removeItem = function(a) {
        K(this, "access_template_storage");
        var b = zD(this).vb();
        if (!nO[b] || !nO[b].hasOwnProperty("gtm." + a)) return;
        delete nO[b]["gtm." + a];
    };
    mO.clear = function() {
        K(this, "access_template_storage"), delete nO[zD(this).vb()];
    };
    mO.publicName = "templateStorage";

    function oO(a, b) {
        var c = !1;
        return c
    }
    oO.K = "internal.testRegex";

    function pO(a) {
        var b;
        return b
    };

    function qO() {
        var a = {};
        return a
    };

    function rO(a) {
        var b;
        return b
    }
    rO.K = "internal.unsiloId";

    function sO(a, b) {
        var c;
        return c
    }
    sO.K = "internal.unsubscribeFromCrossContainerData";

    function tO(a) {}
    tO.publicName = "updateConsentState";
    var uO;

    function vO(a, b, c) {
        uO = uO || new Mh;
        uO.add(a, b, c)
    }

    function wO(a, b) {
        var c = uO = uO || new Mh;
        if (c.C.hasOwnProperty(a)) throw Error("Attempting to add a private function which already exists: " + a + ".");
        if (c.contains(a)) throw Error("Attempting to add a private function with an existing API name: " + a + ".");
        c.C[a] = ab(b) ? hh(a, b) : ih(a, b)
    }

    function xO() {
        return function(a) {
            var b;
            var c = uO;
            if (c.contains(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.C.hasOwnProperty(a)) {
                    var e = this.J.C;
                    if (e) {
                        var f = !1,
                            g = e.vb();
                        if (g) {
                            oh(g) || (f = !0);
                        }
                        d = f
                    } else d = !0
                }
                if (d) {
                    var k = c.C.hasOwnProperty(a) ? c.C[a] : void 0;
                    b = k
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };

    function yO() {
        var a = function(c) {
                return void wO(c.K, c)
            },
            b = function(c) {
                return void vO(c.publicName, c)
            };
        b(tD);
        b(AD);
        b(PE);
        b(RE);
        b(SE);
        b(ZE);
        b(aF);
        b(eG);
        b(xN());
        b(gG);
        b(KJ);
        b(LJ);
        b(dK);
        b(eK);
        b(fK);
        b(lK);
        b(dN);
        b(fN);
        b(sN);
        b(BN);
        b(EN);
        b(HN);
        b(JN);
        b(LN);
        b(WN);
        b(ZN);
        b(bO);
        b(fO);
        b(jO);
        b(mO);
        b(tO);
        vO("Math", mh());
        vO("Object", Kh);
        vO("TestHelper", Ph());
        vO("assertApi", jh);
        vO("assertThat", kh);
        vO("decodeUri", ph);
        vO("decodeUriComponent", qh);
        vO("encodeUri", rh);
        vO("encodeUriComponent", sh);
        vO("fail", xh);
        vO("generateRandom",
            yh);
        vO("getTimestamp", zh);
        vO("getTimestampMillis", zh);
        vO("getType", Ah);
        vO("makeInteger", Ch);
        vO("makeNumber", Dh);
        vO("makeString", Eh);
        vO("makeTableMap", Fh);
        vO("mock", Ih);
        vO("mockObject", Jh);
        vO("fromBase64", FJ, !("atob" in z));
        vO("localStorage", AN, !zN());
        vO("toBase64", pO, !("btoa" in z));
        a(sD);
        a(wD);
        a(RD);
        a(cE);
        a(jE);
        a(oE);
        a(EE);
        a(NE);
        a(QE);
        a(TE);
        a(UE);
        a(VE);
        a(WE);
        a(XE);
        a(YE);
        a($E);
        a(bF);
        a(dG);
        a(fG);
        a(hG);
        a(jG);
        a(kG);
        a(lG);
        a(mG);
        a(nG);
        a(sG);
        a(AG);
        a(BG);
        a(MG);
        a(RG);
        a(WG);
        a(eH);
        a(jH);
        a(wH);
        a(yH);
        a(MH);
        a(NH);
        a(PH);
        a(DJ);
        a(EJ);
        a(GJ);
        a(HJ);
        a(IJ);
        a(MJ);
        a(NJ);
        a(OJ);
        a(PJ);
        a(QJ);
        a(RJ);
        a(SJ);
        a(TJ);
        a(UJ);
        a(VJ);
        a(WJ);
        a(YJ);
        a(ZJ);
        a($J);
        a(aK);
        a(bK);
        a(cK);
        a(gK);
        a(hK);
        a(iK);
        a(jK);
        a(kK);
        a(nK);
        a(aN);
        a(hN);
        a(qN);
        a(rN);
        a(tN);
        a(uN);
        a(vN);
        a(wN);
        a(yN);
        a(CE);
        a(CN);
        a(DN);
        a(FN);
        a(GN);
        a(IN);
        a(KN);
        a(MN);
        a(NN);
        a(PN);
        a(QN);
        a(RN);
        a(Oh);
        a(TN);
        a(UN);
        a(VN);
        a(XN);
        a(YN);
        a($N);
        a(aO);
        a(cO);
        a(dO);
        a(eO);
        a(gO);
        a(hO);
        a(iO);
        a(kO);
        a(lO);
        a(oO);
        a(rO);
        a(sO);
        wO("internal.CrossContainerSchema", iG());
        wO("internal.GtagSchema", bN());
        wO("internal.IframingStateSchema",
            eN());
        wO("internal.TransmissionType", qO());
        I(151) ? b(qN) : b(nN);
        return xO()
    };
    var qD;

    function zO() {
        var a = data.sandboxed_scripts,
            b = data.security_groups;
        a: {
            var c = data.runtime || [],
                d = data.runtime_lines;qD = new He;AO(); of = pD();
            var e = qD,
                f = yO(),
                g = new fd("require", f);g.Ma();e.C.C.set("require", g);
            for (var k = [], m = 0; m < c.length; m++) {
                var n = c[m];
                if (!Array.isArray(n) || n.length < 3) {
                    if (n.length === 0) continue;
                    break a
                }
                d && d[m] && d[m].length && Kf(n, d[m]);
                try {
                    qD.execute(n), I(109) && zk && n[0] === 50 && k.push(n[1])
                } catch (r) {}
            }
            I(109) && (Bf = k)
        }
        if (a && a.length)
            for (var p = 0; p < a.length; p++) {
                var q = a[p].replace(/^_*/, "");
                Cj[q] = ["sandboxedScripts"]
            }
        BO(b)
    }

    function AO() {
        qD.C.C.N = function(a, b, c) {
            po.SANDBOXED_JS_SEMAPHORE = po.SANDBOXED_JS_SEMAPHORE || 0;
            po.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                po.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function BO(a) {
        a && ib(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Cj[e] = Cj[e] || [];
                Cj[e].push(b)
            }
        })
    };

    function CO(a) {
        xv(rv("developer_id." + a, !0), 0, {})
    };
    var DO = Array.isArray;

    function EO(a, b) {
        return Yc(a, b || null)
    }

    function X(a) {
        return window.encodeURIComponent(a)
    }

    function FO(a, b, c) {
        wc(a, b, c)
    }

    function GO(a, b) {
        if (!a) return !1;
        var c = ck(ik(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                f > 0 && e.charAt(0) !== "." && (f--, e = "." + e);
                if (f >= 0 && c.indexOf(e, f) === f) return !0
            }
        }
        return !1
    }

    function HO(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    }
    var QO = z.clearTimeout,
        RO = z.setTimeout;

    function SO(a, b, c) {
        if (Kq()) {
            b && C(b)
        } else return sc(a, b, c, void 0)
    }

    function TO() {
        return z.location.href
    }

    function UO(a, b) {
        return Pj(a, b || 2)
    }

    function VO(a, b) {
        z[a] = b
    }

    function WO(a, b, c) {
        b && (z[a] === void 0 || c && !z[a]) && (z[a] = b);
        return z[a]
    }

    function XO(a, b) {
        if (Kq()) {
            b && C(b)
        } else uc(a, b)
    }

    var YO = {};
    var Z = {
        securityGroups: {}
    };

    Z.securityGroups.access_template_storage = ["google"], Z.__access_template_storage = function() {
        return {
            assert: function() {},
            P: function() {
                return {}
            }
        }
    }, Z.__access_template_storage.F = "access_template_storage", Z.__access_template_storage.isVendorTemplate = !0, Z.__access_template_storage.priorityOverride = 0, Z.__access_template_storage.isInfrastructure = !1, Z.__access_template_storage.runInSiloedMode = !1;
    Z.securityGroups.v = ["google"], Z.__v = function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = UO(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return c !== void 0 ? c : a.vtp_defaultValue
    }, Z.__v.F = "v", Z.__v.isVendorTemplate = !0, Z.__v.priorityOverride = 0, Z.__v.isInfrastructure = !0, Z.__v.runInSiloedMode = !1;

    Z.securityGroups.rep = ["google"], Z.__rep = function(a) {
        var b = dm(a.vtp_containerId),
            c = Ho(b, !0);
        if (c) {
            var d, e;
            switch (c.prefix) {
                case "AW":
                    d = TH;
                    e = 1;
                    break;
                case "DC":
                    d = iI;
                    e = 1;
                    break;
                case "GF":
                    d = nI;
                    e = 0;
                    break;
                case "HA":
                    d = tI;
                    e = 0;
                    break;
                case "UA":
                    d = RI;
                    e = 0;
                    break;
                case "MC":
                    d = ZM(c, a.vtp_gtmEventId);
                    e = 2;
                    break;
                default:
                    C(a.vtp_gtmOnFailure);
                    return
            }
            d ? (C(a.vtp_gtmOnSuccess), Lp(b, d, e), a.vtp_remoteConfig && Rp(b, a.vtp_remoteConfig || {})) : C(a.vtp_gtmOnFailure)
        } else C(a.vtp_gtmOnFailure)
    }, Z.__rep.F = "rep", Z.__rep.isVendorTemplate = !0, Z.__rep.priorityOverride = 0, Z.__rep.isInfrastructure = !1, Z.__rep.runInSiloedMode = !0;
    Z.securityGroups.read_event_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    key: c
                }
            }(function(b) {
                Z.__read_event_data = b;
                Z.__read_event_data.F = "read_event_data";
                Z.__read_event_data.isVendorTemplate = !0;
                Z.__read_event_data.priorityOverride = 0;
                Z.__read_event_data.isInfrastructure = !1;
                Z.__read_event_data.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_eventDataAccess,
                    d = b.vtp_keyPatterns || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (g != null && !bb(g)) throw e(f, {
                            key: g
                        }, "Key must be a string.");
                        if (c !== "any") {
                            try {
                                if (c === "specific" && g != null && yg(g, d)) return
                            } catch (k) {
                                throw e(f, {
                                    key: g
                                }, "Invalid key filter.");
                            }
                            throw e(f, {
                                key: g
                            }, "Prohibited read from event data.");
                        }
                    },
                    P: a
                }
            })
        }();





    Z.securityGroups.detect_form_submit_events = ["google"],
        function() {
            function a(b, c) {
                return {
                    options: c
                }
            }(function(b) {
                Z.__detect_form_submit_events = b;
                Z.__detect_form_submit_events.F = "detect_form_submit_events";
                Z.__detect_form_submit_events.isVendorTemplate = !0;
                Z.__detect_form_submit_events.priorityOverride = 0;
                Z.__detect_form_submit_events.isInfrastructure = !1;
                Z.__detect_form_submit_events.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowWaitForTags,
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!c &&
                            f && f.waitForTags) throw d(e, {}, "Prohibited option waitForTags.");
                    },
                    P: a
                }
            })
        }();
    Z.securityGroups.read_container_data = ["google"], Z.__read_container_data = function() {
        return {
            assert: function() {},
            P: function() {
                return {}
            }
        }
    }, Z.__read_container_data.F = "read_container_data", Z.__read_container_data.isVendorTemplate = !0, Z.__read_container_data.priorityOverride = 0, Z.__read_container_data.isInfrastructure = !1, Z.__read_container_data.runInSiloedMode = !1;

    Z.securityGroups.listen_data_layer = ["google"],
        function() {
            function a(b, c) {
                return {
                    eventName: c
                }
            }(function(b) {
                Z.__listen_data_layer = b;
                Z.__listen_data_layer.F = "listen_data_layer";
                Z.__listen_data_layer.isVendorTemplate = !0;
                Z.__listen_data_layer.priorityOverride = 0;
                Z.__listen_data_layer.isInfrastructure = !1;
                Z.__listen_data_layer.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_accessType,
                    d = b.vtp_allowedEvents || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!bb(g)) throw e(f, {
                            eventName: g
                        }, "Event name must be a string.");
                        if (!(c === "any" || c === "specific" && d.indexOf(g) >= 0)) throw e(f, {
                            eventName: g
                        }, "Prohibited listen on data layer event.");
                    },
                    P: a
                }
            })
        }();
    Z.securityGroups.detect_user_provided_data = ["google"],
        function() {
            function a(b, c) {
                return {
                    dataSource: c
                }
            }(function(b) {
                Z.__detect_user_provided_data = b;
                Z.__detect_user_provided_data.F = "detect_user_provided_data";
                Z.__detect_user_provided_data.isVendorTemplate = !0;
                Z.__detect_user_provided_data.priorityOverride = 0;
                Z.__detect_user_provided_data.isInfrastructure = !1;
                Z.__detect_user_provided_data.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_createPermissionError;
                return {
                    assert: function(d, e) {
                        if (e !== "auto" && e !== "manual" &&
                            e !== "code") throw c(d, {}, "Unknown user provided data source.");
                        if (b.vtp_limitDataSources)
                            if (e !== "auto" || b.vtp_allowAutoDataSources) {
                                if (e === "manual" && !b.vtp_allowManualDataSources) throw c(d, {}, "Detection of user provided data via manually specified CSS selectors is not allowed.");
                                if (e === "code" && !b.vtp_allowCodeDataSources) throw c(d, {}, "Detection of user provided data from an in-page variable is not allowed.");
                            } else throw c(d, {}, "Automatic detection of user provided data is not allowed.");
                    },
                    P: a
                }
            })
        }();



    Z.securityGroups.access_consent = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    consentType: c,
                    read: !1,
                    write: !1
                };
                switch (d) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + d);
                }
                return e
            }(function(b) {
                Z.__access_consent = b;
                Z.__access_consent.F = "access_consent";
                Z.__access_consent.isVendorTemplate = !0;
                Z.__access_consent.priorityOverride = 0;
                Z.__access_consent.isInfrastructure = !1;
                Z.__access_consent.runInSiloedMode = !1
            })(function(b) {
                for (var c = b.vtp_consentTypes || [], d = b.vtp_createPermissionError, e = [], f = [], g = 0; g < c.length; g++) {
                    var k = c[g],
                        m = k.consentType;
                    k.read && e.push(m);
                    k.write && f.push(m)
                }
                return {
                    assert: function(n, p, q) {
                        if (!bb(p)) throw d(n, {}, "Consent type must be a string.");
                        if (q === "read") {
                            if (e.indexOf(p) > -1) return
                        } else if (q === "write") {
                            if (f.indexOf(p) > -1) return
                        } else throw d(n, {}, "Access type must be either 'read', or 'write', was " + q);
                        throw d(n, {}, "Prohibited " + q + " on consent type: " + p + ".");
                    },
                    P: a
                }
            })
        }();






    Z.securityGroups.get = ["google"], Z.__get = function(a) {
        var b = a.vtp_settings,
            c = b.eventParameters || {},
            d = String(a.vtp_eventName),
            e = {};
        e.eventId = a.vtp_gtmEventId;
        e.priorityId = a.vtp_gtmPriorityId;
        a.vtp_deferrable && (e.deferrable = !0);
        var f = uv(String(b.streamId), d, c);
        xv(f, e.eventId, e);
        a.vtp_gtmOnSuccess()
    }, Z.__get.F = "get", Z.__get.isVendorTemplate = !0, Z.__get.priorityOverride = 0, Z.__get.isInfrastructure = !1, Z.__get.runInSiloedMode = !1;



    Z.securityGroups.detect_form_interaction_events = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Z.__detect_form_interaction_events = b;
                Z.__detect_form_interaction_events.F = "detect_form_interaction_events";
                Z.__detect_form_interaction_events.isVendorTemplate = !0;
                Z.__detect_form_interaction_events.priorityOverride = 0;
                Z.__detect_form_interaction_events.isInfrastructure = !1;
                Z.__detect_form_interaction_events.runInSiloedMode = !1
            })(function() {
                return {
                    assert: function() {},
                    P: a
                }
            })
        }();

    var so = {
        dataLayer: Qj,
        callback: function(a) {
            Bj.hasOwnProperty(a) && ab(Bj[a]) && Bj[a]();
            delete Bj[a]
        },
        bootstrap: 0
    };

    function ZO() {
        ro();
        gm();
        yA();
        tb(Cj, Z.securityGroups);
        var a = bm(cm()),
            b, c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
        Qn(c, a == null ? void 0 : a.parent);
        c !== 2 && c !== 4 && c !== 3 || O(142);
        Af = {
            wm: Qf
        }
    }
    var $O = !1;
    (function(a) {
        function b() {
            n = A.documentElement.getAttribute("data-tag-assistant-present");
            Dn(n) && (m = k.Vj)
        }

        function c() {
            m && jc ? g(m) : a()
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var d = !1;
            if (A.referrer) {
                var e = ik(A.referrer);
                d = ek(e, "host") === "cct.google"
            }
            if (!d) {
                var f = Uq("googTaggyReferrer");
                d = !(!f.length || !f[0].length)
            }
            d && (z["__TAGGY_INSTALLED"] = !0, sc("https://cct.google/taggy/agent.js"))
        }
        var g = function(u) {
                var t = "GTM",
                    w = "GTM";
                sj && (t = "OGT", w = "GTAG");
                var x = z["google.tagmanager.debugui2.queue"];
                x || (x = [], z["google.tagmanager.debugui2.queue"] = x, sc("https://" + mj.Qf + "/debug/bootstrap?id=" + Wf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + Mq()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: jc,
                        containerProduct: t,
                        debug: !1,
                        id: Wf.ctid,
                        targetRef: {
                            ctid: Wf.ctid,
                            isDestination: Rl()
                        },
                        aliases: Ul(),
                        destinations: Sl()
                    }
                };
                y.data.resume = function() {
                    a()
                };
                mj.rl && (y.data.initialPublish = !0);
                x.push(y)
            },
            k = {
                Sl: 1,
                Xj: 2,
                jk: 3,
                Zi: 4,
                Vj: 5
            };
        k[k.Sl] = "GTM_DEBUG_LEGACY_PARAM";
        k[k.Xj] = "GTM_DEBUG_PARAM";
        k[k.jk] = "REFERRER";
        k[k.Zi] = "COOKIE";
        k[k.Vj] = "EXTENSION_PARAM";
        var m = void 0,
            n = void 0,
            p = ck(z.location, "query", !1, void 0, "gtm_debug");
        Dn(p) && (m = k.Xj);
        if (!m && A.referrer) {
            var q = ik(A.referrer);
            ek(q, "host") === "tagassistant.google.com" && (m = k.jk)
        }
        if (!m) {
            var r = Uq("__TAG_ASSISTANT");
            r.length && r[0].length && (m = k.Zi)
        }
        m || b();
        if (!m && Cn(n)) {
            var v = !1;
            xc(A, "TADebugSignal", function() {
                v || (v = !0, b(), c())
            }, !1);
            z.setTimeout(function() {
                v || (v = !0, b(), c())
            }, 200)
        } else c()
    })(function() {
        try {
            if ($O || !pm()) {
                Gj();
                Fj.O = "";
                Fj.Bc = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
                Fj.Ca = "ad_storage|analytics_storage|ad_user_data";
                Fj.da = "53k0";
                Fj.da = "5420";
                em();
                if (I(97)) {}
                hg[8] = !0;
                var a = qo("debugGroupId", function() {
                    return String(Math.floor(Number.MAX_SAFE_INTEGER *
                        Math.random()))
                });
                Xn(a);
                oo();
                mq();
                Do();
                if (hm()) {
                    zE();
                    iA().removeExternalRestrictions($l());
                } else {
                    Ox();
                    uA();
                    yf();
                    uf = Z;
                    vf = gD;
                    Sf = new Zf;
                    zO();
                    ZO();
                    tn = un();
                    lo();
                    xC();
                    JB();
                    dC = !1;
                    A.readyState === "complete" ? fC() : xc(z, "load", fC);
                    DB();
                    zk && (tp(Hp), z.setInterval(Gp,
                        864E5), tp(jD), tp(aB), tp(Sy), tp(Kp), tp(mD), tp(lB), I(109) && (tp(fB), tp(gB), tp(hB)));
                    Ak && (gn(), Zo(), yC(), CC(), AC(), Ym("bt", String(Fj.C ? 2 : uj ? 1 : 0)), Ym("ct", String(Fj.C ? 0 : uj ? 1 : Kq() ? 2 : 3)), zC());
                    XC();
                    rn(1);
                    AE();
                    Aj = qb();
                    so.bootstrap = Aj;
                    Fj.N && wC();
                    I(97) && kz();
                    I(124) && (typeof z.name === "string" && vb(z.name, "web-pixel-sandbox-CUSTOM") && Mc() ? CO("dMDg0Yz") : z.Shopify && (CO("dN2ZkMj"),
                        Mc() && CO("dNTU0Yz")))
                }
            }
        } catch (b) {
            rn(4), Dp()
        }
    });

})()