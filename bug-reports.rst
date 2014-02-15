Issue tracker
=============

`The issue tracker is located on GitHub <https://github.com/mpv-player/mpv/issues>`_.
Report bugs and feature requests there.

Please provide enough information so that the bug can be reproduced without
much trouble. Also include any details that could help us hunt down the bug.
Use your common sense for this: if it looks a platform specific bug, include
you OS version; if it's a video display problem, include video card model
and video driver type and version; etc.

This guide goes on with recurring scenarios and which information might be
needed to properly isolate the bug.

Compilation failures
====================

- Paste the content of the ``config.log`` file that waf creates in the
  ``build`` directory.

- Paste the compilation error result from ``./waf build`` if you went past
  the configure step.

Mind the config
===============

- Make sure it's actually a bug. A lot of times users forget they added
  something in their config file and think mpv is misbehaving. Always try
  to use the ``--no-config`` CLI option before reporting.

- If ``--no-config`` removes the buggy behavior, the bug is triggered by a 
  particular set of options. Work your way through your config the config file
  and add the options manually one-by-one _together_ with ``--no-config`` until
  you find the smallest set of options that triggers the bug. Include the
  ``./mpv [options] file`` command in your bug report.

Bugs related to specific files and formats:
===========================================

- If the bug is related to a particular format or container, make sure that
  it works with ``ffplay`` or ``avplay`` compiled against the same FFmpeg
  or Libav version you compiled mpv against.

- Include a sample that triggers the bug. You don't need to upload the entire
  file. Generally, cutting a sample that triggers the problem is good enough.

  To cut a sample you can use the ``dd`` UNIX command, like follows:::

    dd if=sample-file of=small-sample-file bs=1024 count=10000

  The above command will copy the first ``block size (bs) x count`` bytes of
  the input file (``if``) to the output file (``of``).

  Cutting the sample can sometimes cause the file not to work anymore (always
  for mp4) or the bug not to be triggered.

  Unfortunately the mpv project doesn't have a private FTP to host files since
  it would cost money, so you will have to host the file on a server of yours.
  Using a hosting service is also ok but make sure it doesn't need people to
  queue in order to download stuff (Dropbox and datafilehost.com are
  recommended).

Crashes / Segmentation faults
=============================

- Include the stacktrace. On UNIX systems you can get the stacktrace with the
  following steps:

    - Start mpv within gdb: ``gdb mpv``
    - Run it with: ``run --no-config [options] file``
    - Perform any operation that triggers the crash
    - Type ``thread apply all backtrace`` and include its result in your
      report.

  On OS X if you are running the application bundle ``mpv.app`` the system
  will automatically generate a backtrace among other user useful information
  as part of the "Crash Report". You can just paste that in that case.

Regressions / functionality that once worked:
=============================================

- Please provide the a git commit from the past (or a mpv version in case of
  stable releases) where you recall the functionality used to work correctly.

- BONUS: If you want to be extra nice you can perform a binary search with
  ``git bisect`` to find the exact commit that broke this functionality.

Timing bugs / mpv hangs at last frame
=====================================

- Are you using ``ao_pulse``? If so it's probably PulseAudio's fault :)

mpv hangs after pausing
=======================

- Are you using Mesa drivers and ``vo_vdpau``? If so it's a problem in Mesa's
  implementation of the VDPAU presentation queue. You can workaround this
  problem with ``--vo=vdpau:fps=-1``.
