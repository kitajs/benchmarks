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
* __Node:__ `v20.12.2`
* __Run:__ Mon Apr 29 2024 01:17:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| kita                     | 1.1.36   | ✓      | 46445.6    | 21.02        | 8.33          |
| fastify                  | 4.26.2   | ✓      | 45528.0    | 21.46        | 8.16          |
| bare                     | v20.12.2 | ✗      | 45499.2    | 21.48        | 8.11          |
| connect                  | 3.7.0    | ✗      | 44939.2    | 21.75        | 8.01          |
| polka                    | 0.5.2    | ✓      | 44766.4    | 21.87        | 7.98          |
| rayo                     | 1.4.6    | ✓      | 44754.4    | 21.85        | 7.98          |
| 0http                    | 3.5.3    | ✓      | 44753.6    | 21.84        | 7.98          |
| polkadot                 | 1.0.0    | ✗      | 44150.4    | 22.16        | 7.87          |
| server-base              | 7.1.32   | ✗      | 43475.2    | 22.50        | 7.75          |
| server-base-router       | 7.1.32   | ✓      | 43286.4    | 22.60        | 7.72          |
| connect-router           | 1.3.8    | ✓      | 41537.6    | 23.58        | 7.41          |
| h3-router                | 1.11.1   | ✓      | 41267.2    | 23.73        | 7.36          |
| h3                       | 1.11.1   | ✗      | 41024.8    | 23.88        | 7.32          |
| hono                     | 4.2.8    | ✓      | 37953.6    | 25.85        | 6.77          |
| restana                  | 4.9.9    | ✓      | 37221.6    | 26.37        | 6.64          |
| koa                      | 2.15.3   | ✗      | 35546.2    | 27.62        | 6.34          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33796.8    | 29.08        | 6.03          |
| take-five                | 2.0.0    | ✓      | 33654.6    | 29.20        | 12.10         |
| koa-router               | 12.0.1   | ✓      | 32834.6    | 29.97        | 5.86          |
| restify                  | 11.1.0   | ✓      | 32361.4    | 30.40        | 5.83          |
| hapi                     | 21.3.9   | ✓      | 30741.4    | 32.02        | 5.48          |
| fastify-big-json         | 4.26.2   | ✓      | 11460.8    | 86.69        | 131.87        |
| express                  | 4.19.2   | ✓      | 10681.0    | 93.00        | 1.90          |
| express-with-middlewares | 4.19.2   | ✓      | 9925.2     | 100.10       | 3.69          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
