# gestalt

Gestalt is a GLSL plugin for Light Table.
It initially targets the [OpenGL ES Shading Language v1.00 Specification](http://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf) (same as WebGL's GLSL).
The goal is for the program to be a good teacher.
Essentially, someone should be able to learn GLSL by fiddling with a sample program through the guidance of the plugin.
I am guided by the philosophy that our tools should explain themselves and get out of the way.

In terms of functionality, this translates to:

- Powerful, type/context-aware autocomplete for all built-in (and programmer-defined) functions, with inline documentation
- Live re-rendering of a shader as you modify it
- inline, helpful errors for invalid shaders
- Graphical tools for feeding input (e.g. images, webcam) and observing intermediate values/output of a shader
- Debugging functionality, e.g. stepping through the rendering pipeline on a per-vertex or per-pixel basis
- Ctags-esque support for viewing the overall structure of a GLSL program in terms of functions, structs, variables.
- Fullscreen mode to display the live output of the program under the text.
- Just for the hell of it: ShaderToy integration.

For this to work, we need:

- A GLSL parser, ideally an incremental one: for now the plan is to use MESA's glsl parser, compiled to js with emscripten.
- A file watcher
- Or maybe it is sufficient to use WebGL's compiler and ask it about the shader (active_uniforms, active_attributes)?
- A pipeline for capturing/redirecting errors
- A default WebGL context for rendering and plugging in new inputs
- Nice tools like color pickers, matrix renderers, input fields for uniform values (a la shader builder: pictures, video, audio, webcam as texture inputs)...
- Basic template files for a fragment and vertex shader (2d, 3d)?
- Display graphical information about your hardware WebGL limitations (max textures, resolution requirements, etc.)

So, the initial goal is to obtain feature-parity with OpenGL Shader Builder.
From here, we can start experimenting with goofy features that take full advantage of the fact that LT is essentially
just a fancy web view (piping geometry/textures/shaders/params in and out from arbitrary sources online...
dataflow programming sorts of ideas...)

Progress:

- [x] Initial Readme
- [x] Syntax highlighting
- [x] Inline documentation (grab from manglsl)
- [ ] Parser: MESA glsl, piggybacking off [GLSL optimizer](https://github.com/aras-p/glsl-optimizer) -> emscripten
- [ ] Autocomplete
- [ ] Live preview
- [ ] GUI input tools...

Just for the hell of it, I am interested in using powerful/experimental libraries
to achieve this, such as:

- core/async
- om

Inspiration:

- [OpenGL Shader Builder.app](https://developer.apple.com/library/mac/documentation/graphicsimaging/conceptual/OpenGLShaderBuilderUserGuide/Introduction/Introduction.html)
- [OpenGL Profiler.app](https://developer.apple.com/library/mac/documentation/graphicsimaging/conceptual/OpenGLProfilerUserGuide/Introduction/Introduction.html)
- [PixelShaders.com](http://pixelshaders.com/)
- [Shadertoy.com](shadertoy.com)

Resources:

- http://www.khronos.org/opengles/sdk/tools/Reference-Compiler/
- Chromium...
- http://www.mesa3d.org/shading.html
- https://github.com/chrisdickinson/glsl-parser
- http://www.opengl.org/sdk/tools/glslang/
- [Mesa Standalone GLSL Compiler](http://www.mesa3d.org/shading.html#standalone)
- [language-glsl haskell package](http://hackage.haskell.org/package/language-glsl)


My gratitude to the creators of [light-haskell](https://github.com/jetaggart/light-haskell) for giving
me a sane starting-point for creating this plugin.
