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
* __Node:__ `v20.20.0`
* __Run:__ Mon Feb 23 2026 01:54:35 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.0 | ✗      | 47634.4    | 20.49        | 8.50          |
| polka                    | 0.5.2    | ✓      | 46718.4    | 20.89        | 8.33          |
| 0http                    | 3.5.3    | ✓      | 46684.8    | 20.92        | 8.32          |
| polkadot                 | 1.0.0    | ✗      | 46542.4    | 20.99        | 8.30          |
| kita                     | 1.1.36   | ✓      | 45613.6    | 21.44        | 8.18          |
| rayo                     | 1.4.6    | ✓      | 45599.2    | 21.44        | 8.13          |
| fastify                  | 4.29.1   | ✓      | 45262.4    | 21.61        | 8.11          |
| connect                  | 3.7.0    | ✗      | 45120.6    | 21.66        | 8.05          |
| server-base              | 7.1.32   | ✗      | 44910.4    | 21.78        | 8.01          |
| h3                       | 1.15.5   | ✗      | 44486.4    | 21.98        | 7.93          |
| server-base-router       | 7.1.32   | ✓      | 44361.6    | 22.05        | 7.91          |
| connect-router           | 1.3.8    | ✓      | 43591.2    | 22.42        | 7.77          |
| h3-router                | 1.15.5   | ✓      | 43308.8    | 22.59        | 7.72          |
| restana                  | 4.9.9    | ✓      | 40929.6    | 23.93        | 7.30          |
| koa                      | 2.16.3   | ✗      | 37558.4    | 26.11        | 6.70          |
| restify                  | 11.1.0   | ✓      | 35547.8    | 27.61        | 6.41          |
| take-five                | 2.0.0    | ✓      | 35085.0    | 27.99        | 12.61         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34935.8    | 28.12        | 6.23          |
| koa-router               | 12.0.1   | ✓      | 33261.0    | 29.57        | 5.93          |
| hapi                     | 21.4.6   | ✓      | 32809.6    | 29.97        | 5.85          |
| hono                     | 4.12.1   | ✓      | 18797.7    | 52.69        | 3.08          |
| fastify-big-json         | 4.29.1   | ✓      | 11953.8    | 83.08        | 137.55        |
| express                  | 4.22.1   | ✓      | 11104.0    | 89.46        | 1.98          |
| express-with-middlewares | 4.22.1   | ✓      | 10201.8    | 97.42        | 3.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
