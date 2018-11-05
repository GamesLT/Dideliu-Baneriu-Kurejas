let img = new Image();
img.src = 'data:image/gif;base64,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';

export default img;