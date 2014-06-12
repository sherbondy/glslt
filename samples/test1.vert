attribute vec4 vertex;

void main()
{
	/*gl_FrontColor = gl_Color;
	gl_TexCoord[0] = gl_MultiTexCoord0;*/
  mediump float a = (5-1)*( 1.5e+2 + 1);
  gl_Position = ftransform();
}

/* hello there...
buddy */
