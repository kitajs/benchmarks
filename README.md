<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.1`
* __Run:__ Mon May 19 2025 01:37:59 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 54743.2    | 17.77        | 9.76          |
| kita                     | 1.1.36   | ✓      | 46903.2    | 20.82        | 8.41          |
| polka                    | 0.5.2    | ✓      | 45936.8    | 21.27        | 8.19          |
| fastify                  | 4.29.1   | ✓      | 45789.6    | 21.33        | 8.21          |
| server-base              | 7.1.32   | ✗      | 45740.8    | 21.36        | 8.16          |
| bare                     | v20.19.1 | ✗      | 45655.2    | 21.41        | 8.14          |
| connect                  | 3.7.0    | ✗      | 45448.0    | 21.50        | 8.10          |
| rayo                     | 1.4.6    | ✓      | 45200.8    | 21.62        | 8.06          |
| server-base-router       | 7.1.32   | ✓      | 44320.0    | 22.06        | 7.90          |
| h3                       | 1.15.3   | ✗      | 44231.2    | 22.11        | 7.89          |
| 0http                    | 3.5.3    | ✓      | 43612.8    | 22.44        | 7.78          |
| h3-router                | 1.15.3   | ✓      | 42822.4    | 22.86        | 7.64          |
| connect-router           | 1.3.8    | ✓      | 42506.4    | 23.02        | 7.58          |
| hono                     | 4.7.10   | ✓      | 40519.2    | 24.18        | 6.65          |
| restana                  | 4.9.9    | ✓      | 37731.2    | 26.00        | 6.73          |
| koa                      | 2.16.1   | ✗      | 36064.6    | 27.23        | 6.43          |
| restify                  | 11.1.0   | ✓      | 35256.2    | 27.85        | 6.35          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35071.0    | 28.00        | 6.25          |
| take-five                | 2.0.0    | ✓      | 34897.2    | 28.16        | 12.55         |
| koa-router               | 12.0.1   | ✓      | 32914.0    | 29.89        | 5.87          |
| hapi                     | 21.4.0   | ✓      | 32014.2    | 30.73        | 5.71          |
| fastify-big-json         | 4.29.1   | ✓      | 11831.6    | 83.96        | 136.12        |
| express                  | 4.21.2   | ✓      | 11017.0    | 90.19        | 1.96          |
| express-with-middlewares | 4.21.2   | ✓      | 10198.8    | 97.45        | 3.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
