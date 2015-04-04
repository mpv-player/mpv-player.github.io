Installation
============

mpv is packaged on package managers in several Linux distributions and
binaries are available on Windows and OS X. mpv can also be compiled from
source on most UNIX systems: it is reported to work on BSDs (FreeBSD, OpenBSD
and NetBSD) and Solaris.

For more info about Installing mpv check out the `related web page
</installation>`_. Steps to compile the software are listed in mpv's and
mpv-build's READMEs.

Manpage
=======

``mpv --help`` is very basic. Everything else is documented in mpv's manpage.
You can access the manpage with ``man mpv``.

If you are unfamiliar with navigating manpages using ``man``, refer to `this
helpful page on the Gentoo wiki <https://wiki.gentoo.org/wiki/Man_page/Navigate>`_.

General architecture
====================

mpv has a modular architecture that allows you choose different 'modules' to
perform different tasks. The following table lists all the 'modules' categories
that mpv uses.

==============  ===========
Category        Option
==============  ===========
Demuxer         demux
Audio decoders  ad
Video decoders  vd
Audio filters   af
Video filters   vf
Audio outputs   ao
Video outputs   vo
==============  ===========

For any particular file the data flows like this::

  demux => (ad,  vd) => (af, vf) => (ao, vo)


.. note::
  Audio and Video filters are special since you can use more than one of them at
  a given time to build a filter chain.

Choosing modules
----------------

To list all the available Video outputs you would use the following command
line: ::

  $ mpv --vo=help
  Available video outputs:
   opengl         : Extended OpenGL Renderer
   corevideo      : Mac OS X Core Video
   sdl            : SDL 2.0 Renderer
   opengl-old     : OpenGL (legacy VO, may work better on older GPUs)
   null           : Null video output
   image          : Write video frames to image files
   opengl-hq      : Extended OpenGL Renderer (high quality rendering preset)

mpv will automatically select the first Video output from the above list. If
its initilization fails, it will try the next one in the list and so on.

Let's say you are into placebo, have the hardware power, and want to get some
high quality going. You can force ``opengl-hq`` with the command line:
``mpv --vo=opengl-hq path/to/file.mkv``.

Like other Video outputs, ``opengl-hq`` itself supports additional options. You
can pass them in separated by a colon ``:``. To get the list of options,
unsurprisingly, you can use: ::

  mpv --vo=opengl-hq:help

For example, if you want to use the X11 backend to generate windows, and a
color profile that matches my display, you would use: ::

  mpv --vo=opengl-hq:backend=x11:icc-profile=path/to/icc/profile.icc
