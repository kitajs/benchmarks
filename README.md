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
* __Node:__ `v20.20.1`
* __Run:__ Mon Mar 16 2026 02:02:48 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.1 | ✗      | 48090.4    | 20.30        | 8.58          |
| polkadot                 | 1.0.0    | ✗      | 47312.8    | 20.64        | 8.44          |
| fastify                  | 4.29.1   | ✓      | 47260.8    | 20.65        | 8.47          |
| polka                    | 0.5.2    | ✓      | 46692.0    | 20.92        | 8.33          |
| rayo                     | 1.4.6    | ✓      | 46674.4    | 20.91        | 8.32          |
| connect                  | 3.7.0    | ✗      | 46673.6    | 20.91        | 8.32          |
| server-base              | 7.1.32   | ✗      | 46520.0    | 20.98        | 8.30          |
| kita                     | 1.1.36   | ✓      | 46416.0    | 21.02        | 8.32          |
| server-base-router       | 7.1.32   | ✓      | 45632.0    | 21.42        | 8.14          |
| h3                       | 1.15.6   | ✗      | 44555.2    | 21.95        | 7.95          |
| 0http                    | 3.5.3    | ✓      | 44284.0    | 22.08        | 7.90          |
| h3-router                | 1.15.6   | ✓      | 43501.6    | 22.49        | 7.76          |
| connect-router           | 1.3.8    | ✓      | 43345.6    | 22.55        | 7.73          |
| restana                  | 4.9.9    | ✓      | 40640.8    | 24.10        | 7.25          |
| koa                      | 2.16.4   | ✗      | 36572.6    | 26.83        | 6.52          |
| hono                     | 4.12.8   | ✓      | 35832.2    | 27.40        | 5.88          |
| restify                  | 11.1.0   | ✓      | 35100.2    | 27.98        | 6.33          |
| take-five                | 2.0.0    | ✓      | 35000.2    | 28.07        | 12.58         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34610.8    | 28.38        | 6.17          |
| koa-router               | 12.0.1   | ✓      | 33266.8    | 29.56        | 5.93          |
| hapi                     | 21.4.7   | ✓      | 32125.4    | 30.61        | 5.73          |
| fastify-big-json         | 4.29.1   | ✓      | 11687.8    | 84.97        | 134.49        |
| express                  | 4.22.1   | ✓      | 11629.6    | 85.42        | 2.07          |
| express-with-middlewares | 4.22.1   | ✓      | 10665.6    | 93.17        | 3.97          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
