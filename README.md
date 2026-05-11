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
* __Node:__ `v20.20.2`
* __Run:__ Mon May 11 2026 02:48:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 3.5.3    | ✓      | 53296.8    | 18.27        | 9.50          |
| bare                     | v20.20.2 | ✗      | 50396.0    | 19.33        | 8.99          |
| fastify                  | 4.29.1   | ✓      | 47987.2    | 20.36        | 8.60          |
| connect                  | 3.7.0    | ✗      | 47414.4    | 20.58        | 8.46          |
| polka                    | 0.5.2    | ✓      | 46872.8    | 20.83        | 8.36          |
| rayo                     | 1.4.6    | ✓      | 46704.0    | 20.90        | 8.33          |
| server-base              | 7.1.32   | ✗      | 46070.4    | 21.20        | 8.22          |
| server-base-router       | 7.1.32   | ✓      | 45938.4    | 21.26        | 8.19          |
| polkadot                 | 1.0.0    | ✗      | 45030.4    | 21.71        | 8.03          |
| kita                     | 1.1.36   | ✓      | 44960.0    | 21.74        | 8.06          |
| connect-router           | 1.3.8    | ✓      | 44406.4    | 22.02        | 7.92          |
| h3                       | 1.15.11  | ✗      | 43713.6    | 22.38        | 7.80          |
| h3-router                | 1.15.11  | ✓      | 41384.8    | 23.67        | 7.38          |
| restana                  | 4.9.9    | ✓      | 41110.4    | 23.84        | 7.33          |
| koa                      | 2.16.4   | ✗      | 37340.2    | 26.28        | 6.66          |
| hono                     | 4.12.18  | ✓      | 36510.6    | 26.89        | 5.99          |
| restify                  | 11.1.0   | ✓      | 35547.8    | 27.61        | 6.41          |
| take-five                | 2.0.0    | ✓      | 35226.6    | 27.89        | 12.66         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34194.0    | 28.75        | 6.10          |
| koa-router               | 12.0.1   | ✓      | 33261.2    | 29.56        | 5.93          |
| hapi                     | 21.4.9   | ✓      | 32050.0    | 30.70        | 5.72          |
| fastify-big-json         | 4.29.1   | ✓      | 11836.0    | 83.95        | 136.17        |
| express                  | 4.22.1   | ✓      | 10915.0    | 91.04        | 1.95          |
| express-with-middlewares | 4.22.1   | ✓      | 10347.0    | 96.03        | 3.85          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
