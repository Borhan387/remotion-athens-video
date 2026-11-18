
## Chromium SIGTRAP in Debian Proot on Android

### Symptoms
- Remotion render fails during browser launch.
- Bundled Chrome Headless Shell exits with SIGTRAP.
- Debian Chromium 156 also exits with SIGTRAP.
- NETLINK socket shutdown messages appear before the crash.

### Checks completed
- Architecture: aarch64 / arm64-v8a / arm64 (compatible).
- Dynamic libraries: ldd reports no missing libraries.
- Seccomp: 2; NoNewPrivs: 1.
- /dev/shm exists.
- Tested --no-sandbox, --disable-gpu, --disable-dev-shm-usage.
- Tested --no-zygote and --single-process.
- Both bundled and Debian Chromium fail.

### Conclusion
Likely a Chromium runtime compatibility issue with the Android Proot environment. Root cause is not yet proven.

### Next direction
Stop repeated Chromium flag experiments. Investigate rendering outside Proot, such as a free remote Linux runner, while preserving the existing project and backup.
