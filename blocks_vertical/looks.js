/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.looks');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['looks_sayforsecs'] = {
  /**
   * Block to say for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SAYFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_say'] = {
  /**
   * Block to say.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SAY,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_thinkforsecs'] = {
  /**
   * Block to think for some time.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_THINKFORSECS,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SECS"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_think'] = {
  /**
   * Block to think.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_THINK,
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_show'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SHOW,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_hide'] = {
  /**
   * Hide block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_HIDE,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_hideallsprites'] = {
  /**
   * Hide-all-sprites block. Does not actually do anything. This is an
   * obsolete block that is implemented for compatibility with Scratch 2.0
   * projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_HIDEALLSPRITES,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changeeffectby'] = {
  /**
   * Block to change graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGEEFFECTBY,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, 'GHOST']
          ]
        },
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_seteffectto'] = {
  /**
   * Block to set graphic effect.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETEFFECTTO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EFFECT",
          "options": [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, 'COLOR'],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, 'FISHEYE'],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, 'WHIRL'],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, 'PIXELATE'],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, 'MOSAIC'],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, 'BRIGHTNESS'],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, 'GHOST']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_cleargraphiceffects'] = {
  /**
   * Block to clear graphic effects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_changesizeby'] = {
  /**
   * Block to change size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGESIZEBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_setsizeto'] = {
  /**
   * Block to set size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SETSIZETO,
      "args0": [
        {
          "type": "input_value",
          "name": "SIZE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_size'] = {
  /**
   * Block to report size
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SIZE,
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_changestretchby'] = {
  /**
   * Block to change stretch. Does not actually do anything. This is an
   * obsolete block that is implemented for compatibility with Scratch 1.4
   * projects as well as 2.0 projects that still have the block.
   * The "stretch" blocks were introduced in very early versions of Scratch,
   * but their functionality was removed shortly later. They still appeared
   * correctly up until (and including) Scratch 1.4 - as "change stretch by"
   * and "set stretch to" - but were removed altogether in Scratch 2.0, and
   * displayed as red "undefined" blocks. Some Scratch projects still contain
   * these blocks, however, and they don't open in 3.0 unless the blocks
   * actually exist (though they still don't funcitonally do anything).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_CHANGESTRETCHBY,
      "args0": [
        {
          "type": "input_value",
          "name": "CHANGE"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_setstretchto'] = {
  /**
   * Block to set stretch. Does not actually do anything. This is an obsolete
   * block that is implemented for compatibility with Scratch 1.4 projects
   * (see looks_changestretchby).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%2 %3 set cursor to %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STRETCH"
        },
        {
          "type": "field_image",
          "src": `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path fill="none" stroke="#fff" stroke-width="11.51815371" d="M24.457 7.707a18.41 18.41 0 0 0-.365 2.31c-.02.224 0 .507.06.852.061.405.092.689.092.851 0 .527-.345.79-1.034.79-.446 0-.74-.131-.881-.395-.02-.446-.01-1.054.03-1.824.04-.912.061-1.52.061-1.824-.02 0-.05-.02-.091-.06a98.522 98.522 0 0 0-5.32.364c-.04.264-.04.588 0 .973l.122 1.094c-.081.629-.122 1.56-.122 2.797.061.527.091 2.786.091 6.779v2.219c0 .344.051.587.152.73h1.885c.77-.102 1.155.222 1.155.972 0 .446-.213.76-.638.942-.264.102-.73.122-1.399.061-.405-.04-.881-.05-1.428-.03-.75.101-1.662.182-2.736.243-1.094.06-1.763-.091-2.006-.456-.162-.243-.162-.496 0-.76.283-.446 1.023-.669 2.219-.669.628 0 .942-.172.942-.516 0-.183-.01-.355-.03-.517 0-.507.01-.953.03-1.338.06-1.094.06-2.634 0-4.62-.081-2.878-.05-5.462.091-7.752l-.09-.09c-.63.04-1.805.03-3.527-.031-.081 0-.7.04-1.854.121.283 1.946.446 3.334.486 4.165l-.06.82c-.021.305-.274.457-.76.457-.386 0-.71-.73-.973-2.19-.122-.87-.244-1.752-.365-2.644 0-.142-.071-.385-.213-.73-.122-.364-.39-.97-.39-1.152 0-.641.593-.489 1.363-.61.06 0 .162.01.304.03.142.02.243.03.304.03H17.1a57.098 57.098 0 0 0 5.411-.486c.122-.06.304-.121.547-.182.426-.04.79.06 1.095.304.304.223.405.547.304.972z"/><path fill="none" stroke="#ff4c4c" stroke-width="5.75909785" d="M24.333 7.71q-.244 1.065-.365 2.311-.03.335.06.851.092.608.092.851 0 .79-1.034.79-.669 0-.881-.394-.03-.67.03-1.824.06-1.368.06-1.824-.03 0-.09-.061-2.827.122-5.32.365-.06.395 0 .973l.122 1.094q-.122.942-.122 2.796.091.79.091 6.78v2.218q0 .517.152.73h1.885q1.155-.152 1.155.973 0 .668-.638.942-.396.152-1.399.06-.608-.06-1.428-.03-1.125.152-2.736.243-1.642.092-2.006-.456-.244-.364 0-.76.425-.668 2.219-.668.942 0 .942-.517 0-.274-.03-.517 0-.76.03-1.337.091-1.642 0-4.62-.122-4.317.091-7.752l-.091-.091q-.942.06-3.526-.03-.122 0-1.854.12.425 2.919.486 4.165l-.06.821q-.031.456-.76.456-.578 0-.974-2.189-.182-1.307-.364-2.644 0-.213-.213-.73-.182-.547-.182-.82 0-.76 1.155-.943.09 0 .304.03.212.03.304.03h7.538q2.797-.12 5.411-.485.182-.092.547-.183.639-.06 1.095.304.456.335.304.973z"/><path fill="#fff" d="M24.31 7.714q-.243 1.064-.365 2.31-.03.335.061.852.091.608.091.85 0 .791-1.033.791-.67 0-.882-.395-.03-.669.03-1.824.061-1.368.061-1.824-.03 0-.09-.06-2.828.121-5.32.364-.061.396 0 .973l.121 1.094q-.121.943-.121 2.797.09.79.09 6.779v2.219q0 .517.153.73h1.884q1.156-.153 1.156.972 0 .669-.639.942-.395.152-1.398.061-.608-.06-1.429-.03-1.125.152-2.736.243-1.641.091-2.006-.456-.243-.365 0-.76.426-.669 2.22-.669.941 0 .941-.516 0-.274-.03-.517 0-.76.03-1.338.092-1.641 0-4.62-.121-4.317.092-7.752l-.092-.09q-.942.06-3.526-.031-.121 0-1.854.121.426 2.919.486 4.165l-.06.82q-.03.457-.76.457-.578 0-.973-2.19-.182-1.306-.365-2.644 0-.212-.213-.73-.182-.546-.182-.82 0-.76 1.155-.942.091 0 .304.03t.304.03h7.539q2.796-.121 5.41-.486.183-.091.548-.182.638-.061 1.094.304.456.334.304.972z"/></svg>')}`,
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_costume'] = {
  /**
   * Costumes drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "COSTUME",
          "options": [
            ['costume1', 'COSTUME1'],
            ['costume2', 'COSTUME2']
          ]
        }
      ],
      "colour": Blockly.Colours.looks.secondary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['looks_switchcostumeto'] = {
  /**
   * Block to switch the sprite's costume to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHCOSTUMETO,
      "args0": [
        {
          "type": "input_value",
          "name": "COSTUME"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_nextcostume'] = {
  /**
   * Block to switch the sprite's costume to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_NEXTCOSTUME,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_switchbackdropto'] = {
  /**
   * Block to switch the backdrop to the selected one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROPTO,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_backdrops'] = {
  /**
   * Backdrop list
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "looks_backdrops",
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "BACKDROP",
          "options": [
            ['backdrop1', 'BACKDROP1']
          ]
        }
      ],
      "colour": Blockly.Colours.looks.secondary,
      "colourSecondary": Blockly.Colours.looks.secondary,
      "colourTertiary": Blockly.Colours.looks.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['looks_gotofrontback'] = {
  /**
   * "Go to front/back" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOTOFRONTBACK,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FRONT_BACK",
          "options": [
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT, 'front'],
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK, 'back']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_goforwardbackwardlayers'] = {
  /**
   * "Go forward/backward [Number] Layers" Block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "FORWARD_BACKWARD",
          "options": [
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD, 'forward'],
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD, 'backward']
          ]
        },
        {
          "type": "input_value",
          "name": "NUM"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_backdropnumbername'] = {
  /**
   * Block to report backdrop's number or name
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_BACKDROPNUMBERNAME,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, 'name']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_costumenumbername'] = {
  /**
   * Block to report costume's number or name
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_COSTUMENUMBERNAME,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "NUMBER_NAME",
          "options": [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, 'number'],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, 'name']
          ]
        }
      ],
      "category": Blockly.Categories.looks,
      "checkboxInFlyout": true,
      "extensions": ["colours_looks", "output_number"]
    });
  }
};

Blockly.Blocks['looks_switchbackdroptoandwait'] = {
  /**
   * Block to switch the backdrop to the selected one and wait.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT,
      "args0": [
        {
          "type": "input_value",
          "name": "BACKDROP"
        }
      ],
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};

Blockly.Blocks['looks_nextbackdrop'] = {
  /**
   * Block to switch the backdrop to the next one.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK,
      "category": Blockly.Categories.looks,
      "extensions": ["colours_looks", "shape_statement"]
    });
  }
};
